import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/BackgroundImage';
import Icon from 'react-native-vector-icons/Feather';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import { PermissionsAndroid } from 'react-native';

import {
  Container,
  Header,
  Footer,
  HelpIcon,
  SettingsIcon,
  LogoText,
  Scan,
  ListIcon,
  AddItemIcon,
  FooterItem,
  InfoIcon,
} from './styles';

export default class Home extends Component {
  constructor() {
    super();
    global.user_knowledge = 1;
    this.state = {
      qrvalue: '',
      openScanner: false,
    };
  }

  onBarcodeScan(qrvalue) {
    this.setState({ qrvalue: qrvalue }, () => global.current_stand = this.state.qrvalue);
    this.setState({ openScanner: false}, () => this.props.navigation.navigate('StandPlayer'));
  }
  onOpenScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'CameraExample App Camera Permission',
              'message': 'CameraExample App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ openScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ openScanner: true });
    }
  }


  render(){
    const {navigation} = this.props;
    if (!this.state.openScanner) {
      return(
        <BackgroundColor>
          <Container>
            <Header>
              <HelpIcon>
                <Icon
                  onPress={() => navigation.navigate('Help')}
                  name={'help-circle'}
                  size={40}
                  color="white"
                />
              </HelpIcon>
              <LogoText onPress={() => navigation.navigate('SignIn')}>
                SmartGuide
              </LogoText>
              <SettingsIcon>
                <Icon
                  name={'settings'}
                  size={40}
                  color="white"
                  onPress={() => navigation.navigate('MyAccount')}
                />
              </SettingsIcon>
            </Header>

            <Scan>
              <Icon name={'camera'} size={150} color="white"
                onPress={() => this.onOpenScanner()}></Icon>
            </Scan>

            <Footer>
              <FooterItem>
                <InfoIcon>
                  <Icon
                    name={'info'}
                    size={40}
                    color="white"
                    onPress={() => navigation.navigate('About')}
                  />
                </InfoIcon>
              </FooterItem>
              <FooterItem>
                <ListIcon>
                  <Icon
                    name={'list'}
                    size={40}
                    color="white"
                    onPress={() => navigation.navigate('ListStands')}
                  />
                </ListIcon>
                <AddItemIcon>
                  <Icon
                    name={'plus-circle'}
                    size={40}
                    color="white"
                    onPress={() => navigation.navigate('NewStand')}
                  />
                </AddItemIcon>
              </FooterItem>
            </Footer>
          </Container>
        </BackgroundColor>
      )
    }
    return(
      <CameraKitCameraScreen
      showFrame={false}
      scanBarcode={true}
      frameColor={'yellow'}
      colorForScannerFrame={'black'}
      onReadCode={event =>
        this.onBarcodeScan(event.nativeEvent.codeStringValue)
      }
      />
    )
  };
}

import React, {Component} from 'react';

import logoImage from '~/assets/logo.png';
import BackgroundColor from '~/components/BackgroundImage';
import Icon from 'react-native-vector-icons/Feather';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

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
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
    };
  }

  onOpenlink() {
    //Function to open URL, If scanned
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    console.log(this.state.qrvalue)
    this.setState({ opneScanner: false });
  }
  onOpneScanner() {
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
            that.setState({ opneScanner: true });
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
      that.setState({ opneScanner: true });
    }
  }


  render(){
      const {navigation} = this.props;

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
              onPress={() => this.onOpneScanner()}></Icon>
            <CameraKitCameraScreen
              showFrame={false}
              //Show/hide scan frame
              scanBarcode={true}
              //Can restrict for the QR Code only
              laserColor={'blue'}
              //Color can be of your choice
              frameColor={'yellow'}
              //If frame is visible then frame color
              colorForScannerFrame={'black'}
              //Scanner Frame color
              onReadCode={event =>
                this.onBarcodeScan(event.nativeEvent.codeStringValue)
              }
            />
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
  };
}

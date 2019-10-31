import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NewStand from './pages/NewStand';
import ListStands from './pages/ListStands';
import Help from './pages/Help';
import About from './pages/About';
import StandPlayer from './pages/StandPlayer';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator({
          Home,
          MyAccount,
          NewStand,
          StandPlayer,
          ListStands,
          Help,
          About,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );

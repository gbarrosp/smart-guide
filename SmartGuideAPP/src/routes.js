import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount'

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Home,
    MyAccount
  }),
);

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Help from './pages/Help'

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Home,
    Help
  }),
);

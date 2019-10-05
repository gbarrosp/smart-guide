import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Home
  }),
);

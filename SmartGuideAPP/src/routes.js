import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import NewStand from './pages/NewStand';
import ListStands from './pages/ListStands'
import Help from './pages/Help'

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Home,
    MyAccount,
    NewStand,
    ListStands
    Help
  }),
);

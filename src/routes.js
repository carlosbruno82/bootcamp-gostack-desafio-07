import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Header,
    Home,
    Cart,
  })
);

export default Routes;

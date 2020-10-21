import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging3152690Navigator from '../features/Messaging3152690/navigator';
import ArticleList2152689Navigator from '../features/ArticleList2152689/navigator';
import BlankScreen0152688Navigator from '../features/BlankScreen0152688/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging3152690: { screen: Messaging3152690Navigator },
ArticleList2152689: { screen: ArticleList2152689Navigator },
BlankScreen0152688: { screen: BlankScreen0152688Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed53878Navigator from '../features/Feed53878/navigator';
import NotificationList53876Navigator from '../features/NotificationList53876/navigator';
import Settings53875Navigator from '../features/Settings53875/navigator';
import SignIn453873Navigator from '../features/SignIn453873/navigator';
import UserProfile53872Navigator from '../features/UserProfile53872/navigator';
import Settings53776Navigator from '../features/Settings53776/navigator';
import UserProfile53769Navigator from '../features/UserProfile53769/navigator';
import Settings53768Navigator from '../features/Settings53768/navigator';
import Settings53766Navigator from '../features/Settings53766/navigator';
import SignIn253764Navigator from '../features/SignIn253764/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Feed53878: { screen: Feed53878Navigator },
NotificationList53876: { screen: NotificationList53876Navigator },
Settings53875: { screen: Settings53875Navigator },
SignIn453873: { screen: SignIn453873Navigator },
UserProfile53872: { screen: UserProfile53872Navigator },
Settings53776: { screen: Settings53776Navigator },
UserProfile53769: { screen: UserProfile53769Navigator },
Settings53768: { screen: Settings53768Navigator },
Settings53766: { screen: Settings53766Navigator },
SignIn253764: { screen: SignIn253764Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

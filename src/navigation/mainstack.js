import { createDrawerNavigator, NavigationActions, StackActions, StackNavigator } from "react-navigation";
import { MainView } from "../screens/main";
export const MainStack = createDrawerNavigator(
    {
        ["Map"]: {
            screen: MainView
        },
        ["Home"]: {
            screen: MainView
        },
        ["Account"]: {
            screen: MainView
        },
        ["Profile"]: {
            screen: MainView
        },
        ["Garage"]: {
            screen: MainView
        },
        ["Settings"]: {
            screen: MainView
        },
        ["About MotoTool"]: {
            screen: MainView
        }
    },
    {
        initialRouteName: "Home",
        drawerWidth: 300
    }
);
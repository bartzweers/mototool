import { createStackNavigator, NavigationActions, StackActions, StackNavigator } from "react-navigation";
import OnboardingSplash from "../screens/onboarding";
import { MainStack } from "./mainstack";

export function navigateToNewStack(routeName = "", params = null) {
    return StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({ routeName, params })
        ]
    });
}

export const Rootstack = createStackNavigator(
    {
        Onboarding: {
            screen: OnboardingSplash,
            header: null
        },
        Home: {
            screen: MainStack
        }
    },
    {
        initialRouteName: "Onboarding",
        mode: "card",
        headerMode: "none"
    }
);
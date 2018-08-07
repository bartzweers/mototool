import { NavigationActions, StackActions, StackNavigator } from "react-navigation";

export function navigateToNewStack(routeName = "", params = null) {
    return StackActions.reset({
        index: 0,
        key: null,
        actions: [
            NavigationActions.navigate({ routeName, params })
        ]
    });
}

export const rootstack = StackNavigator(
    {
        Onboarding: {
            screen: null,
            header: null
        },
    },
    {
        initialRouteName: "Onboarding",
        mode: "card",
        headerMode: "none"
    }
);
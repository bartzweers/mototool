import React, { Component } from "react";
import { Image, ImageBackground, View } from "react-native";
import type { NavigationScreenConfigProps } from "react-navigation";
import { Button } from "../../components/Button";
import { navigateToNewStack } from "../../navigation/rootstack";

type Props = {
    navigation: NavigationScreenConfigProps,
};

export default class OnboardingSplash extends Component<Props> {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.disableYellowBox = true;

        return (
            <ImageBackground
                style={{ width: "100%", height: "100%" }}
                source={require("../../../img/splash.png")}>
                <View style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    paddingVertical: 120,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Image source={require("../../../img/logo.png")}/>
                    <Button
                        label={"GET STARTED"}
                        containerStyle={{ width: 240 }}
                        onPress={() => this.props.navigation.dispatch(navigateToNewStack("Home"))}/>
                </View>
            </ImageBackground>
        );
    }
}

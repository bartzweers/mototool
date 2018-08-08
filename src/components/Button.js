import React, { Component } from "react";
import { TouchableHighlight, Text } from "react-native";
import { Style } from "../style";
import { StyleVars } from "../style/variables";

type props = {
    label: string,
    onPress: any,
    containerStyle?: any
}

export class Button extends Component<props> {
    constructor(props) {
        super(props);
    }

    render() {
        return <TouchableHighlight style={{ ...Style.buttonContainer, ...this.props.containerStyle }}
                                   underlayColor={StyleVars.colors.secondary}
                                   onPress={() => this.props.onPress()}>
            <Text style={Style.buttonText}>{this.props.label}</Text>
        </TouchableHighlight>;
    }
}
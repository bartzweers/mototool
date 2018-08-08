/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Rootstack } from "./src/navigation/rootstack";
import { StatusBar } from "react-native";

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        StatusBar.setBarStyle("light-content", true);
        return (
            <Rootstack/>
        );
    }
}
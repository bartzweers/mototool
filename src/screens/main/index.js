import React, { Component } from "react";
import { Image, ImageBackground, View, Text, Animated, StyleSheet, TouchableOpacity } from "react-native";
import type { NavigationScreenConfigProps } from "react-navigation";
import SafeAreaView from "react-native-safe-area-view";
import { StyleVars } from "../../style/variables";
import { Style } from "../../style";
import LinearGradient from "react-native-linear-gradient";
import Swiper from "react-native-swiper";
import Popover from "react-native-popover-view";
import { Button } from "../../components/Button";
import { navigateToNewStack } from "../../navigation/rootstack";

export class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statRefPicker: false
        };
    }

    showPopover() {
        this.setState({ statRefPicker: true });
    }

    closePopover() {
        this.setState({ statRefPicker: false });
    }

    render() {
        return <View
            style={{
                flex: 1,
                display: "flex",
                backgroundColor: StyleVars.colors.secondary,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }}
            forceInset={{ top: "always" }}>

            <Popover
                isVisible={this.state.statRefPicker}
                fromView={this.statRef}
                onClose={() => this.closePopover()}
                placement={"bottom"}
                popoverStyle={Style.popover}>
                <View style={{ padding: 20, backgroundColor: "white" }}>
                    <TouchableOpacity style={Style.popoverButton}>
                        <Text style={Style.popoverText}>Last trip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.popoverButton}>
                        <Text style={Style.popoverText}>Last 7 days</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.popoverButton}>
                        <Text style={Style.popoverText}>All trips</Text>
                    </TouchableOpacity>
                </View>
            </Popover>

            <View style={{
                width: "100%",
                height: 280
            }}>
                <Image style={{ width: "100%", height: "100%", position: "absolute", zIndex: 1 }}
                       source={require("../../../img/blurred-motor.png")}/>
                <LinearGradient colors={["black", "rgba(0,0,0,0.75)", "transparent"]}
                                style={{
                                    width: "100%",
                                    height: 140,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 1
                                }}/>
                <LinearGradient
                    colors={["transparent", "rgba(5,11,30,0.61)", "rgba(7,17,44,0.9)", StyleVars.colors.secondary]}
                    style={{
                        width: "100%",
                        height: 90,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        zIndex: 1
                    }}/>

                <View style={{
                    position: "absolute",
                    height: "100%",
                    width: "50%",
                    zIndex: 4,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={Style.sliderTitleText}
                          ref={ref => this.statRef = ref}>{`Last\n    trip`}</Text>
                    <Text style={Style.sliderSubTitleText}>04/06/2018</Text>
                </View>

                <Swiper containerStyle={{ width: "100%", height: "100%", position: "absolute", zIndex: 5 }}
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={5}
                        dot={<View style={{
                            backgroundColor: "rgba(255,255,255,0.4)",
                            width: 6,
                            height: 6,
                            borderRadius: 4,
                            marginLeft: 7,
                            marginRight: 7,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>}
                        activeDot={<View style={{
                            backgroundColor: "rgba(255,255,255,1)",
                            width: 6,
                            height: 6,
                            borderRadius: 4,
                            marginLeft: 7,
                            marginRight: 7,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>}>
                    <View style={Style.sliderView}>
                        <View style={Style.sliderSection}>
                            <TouchableOpacity style={{ width: "100%", height: 100 }}
                                              onPress={() => this.showPopover()}><Text> </Text></TouchableOpacity>
                        </View>
                        <View style={Style.sliderSection}>
                            <Text style={Style.sliderRightPanelTitle}>Ø SPEED</Text>
                            <Text style={Style.sliderRightPanelBody}>89</Text>
                            <Text style={Style.sliderRightPanelSubText}>km/h</Text>
                        </View>
                    </View>
                    <View style={Style.sliderView}>
                        <View style={Style.sliderSection}>
                            <TouchableOpacity style={{ width: "100%", height: 100 }}
                                              onPress={() => this.showPopover()}><Text> </Text></TouchableOpacity>
                        </View>
                        <View style={Style.sliderSection}>
                            <Text style={Style.sliderRightPanelTitle}>LENGTH</Text>
                            <Text style={Style.sliderRightPanelBody}>120</Text>
                            <Text style={Style.sliderRightPanelSubText}>km</Text>
                        </View>
                    </View>
                    <View style={Style.sliderView}>
                        <View style={Style.sliderSection}>
                            <TouchableOpacity style={{ width: "100%", height: 100 }}
                                              onPress={() => this.showPopover()}><Text> </Text></TouchableOpacity>
                        </View>
                        <View style={Style.sliderSection}>
                            <Text style={Style.sliderRightPanelTitle}>DURATION</Text>
                            <Text style={Style.sliderRightPanelBody}>2:35</Text>
                            <Text style={Style.sliderRightPanelSubText}>hours</Text>
                        </View>
                    </View>
                </Swiper>

                {/*<Image style={{ width: "24", height: "17", position: "absolute", top: 25, left: 25 }}*/}
                {/*source={require("../../../img/hamburger.png")}/>*/}

            </View>
            <View style={{ flex: 1, width:'100%', justifyContent: "space-evenly", alignItems:'center' }}>
                <TouchableOpacity style={{ width: "100%" }}
                                  onPress={() => this.showPopover()}>
                    <Text style={Style.buttonText}>TRIP HISTORY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "100%" }}
                                  onPress={() => this.showPopover()}>
                    <Text style={Style.buttonText}>ROUTES & MAP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: "100%" }}
                                  onPress={() => this.showPopover()}>
                    <Text style={Style.buttonText}>GARAGE</Text>
                </TouchableOpacity>
                <Button
                    label={"START NEW TRIP"}
                    containerStyle={{ width: 240 }}
                    onPress={() => this.props.navigation.dispatch(navigateToNewStack("Home"))}/>
            </View>
        </View>;
    }
}
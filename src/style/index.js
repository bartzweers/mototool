import { StyleVars } from "./variables";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        backgroundColor: StyleVars.colors.primary,
        borderRadius: 7,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: { color: "white", textAlign:'center',fontSize: 20, letterSpacing: 0.9, fontFamily: StyleVars.fonts.product.bold },

    fillImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
    },

    sliderView: {
        display: "flex",
        flexDirection: "row",
        height: "100%"
    },
    sliderSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sliderTitle: {},
    sliderTitleText: {
        fontFamily: StyleVars.fonts.bebas.bold,
        fontSize: 48,
        color: "white",
        lineHeight: 46,
        textShadowColor: "rgba(0, 0, 0, 0.50)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },
    sliderSubTitleText: {
        fontFamily: StyleVars.fonts.product.bold,
        fontSize: 16,
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.50)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },

    sliderRightPanelTitle: {
        fontFamily: StyleVars.fonts.product.bold,
        fontSize: 20,
        color: "white",
        letterSpacing: 0,
        textShadowColor: "rgba(0, 0, 0, 0.50)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },
    sliderRightPanelBody: {
        fontFamily: StyleVars.fonts.product.bold,
        fontSize: 48,
        color: "white",
        letterSpacing: 0,
        textShadowColor: "rgba(0, 0, 0, 0.50)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },
    sliderRightPanelSubText: {
        fontFamily: StyleVars.fonts.product.bold,
        fontSize: 24,
        color: "white",
        letterSpacing: 0,
        textShadowColor: "rgba(0, 0, 0, 0.50)",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },

    popover: { width: 280 },
    popoverButton: {
        padding: 15
    },
    popoverText: {
        fontFamily: StyleVars.fonts.product.bold,
        fontSize: 20,
        letterSpacing: 0.9,
        color: "#07112C",
        textAlign: "center"
    }
});
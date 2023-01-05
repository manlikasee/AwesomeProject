import React from "react";
import { Image, Text, View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginLeft: 10 }}>
            <Image style={{ height: 100, width: 200, borderRadius: 10 }} source={{ uri: props.item.uri }} />
            <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: "black", opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: "white" }}>{props.item.title}</Text>
            </View>
        </View>
    );
}

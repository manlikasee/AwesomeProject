import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('24.22');
    const [thisBMI, setThisBMI] = useState('Normal');
    console.log("STATE : ", weight, height, bmi,thisBMI);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));
        let description = "";
        if (output < 18.5)
            description = "Underweight ";
        else if (output >= 18.5 && output <= 24.99)
            description = "Normal ";
        else if (output >= 25 && output <= 29.99)
            description = "Overweight ";
        else if (output >= 30 && output <= 39.99)
            description = "Obese";
        else
            description = "Morbidly Obese ";
        console.log(thisBMI);
        console.log(output);
        setThisBMI(description);



    };


    return (
        <View>
            {/* บรรทักที่1 */}
            {/* padding, backgroundColor, borderRadius, height, space-around, marginTop */}
            <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10, height: 150, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}> Weight (kg.)</Text>
                <TextInput value={weight} onChangeText={(newWeight) => setWeight(newWeight)} keyboardType="numeric" style={{ fontSize: 15 }} placeholder="Input your Weight …" />
            </View>
            {/* บรรทัดที่2 */}
            <View style={{ padding: 20, backgroundColor: "white", borderRadius: 10, height: 150, justifyContent: "space-around", marginTop: 20 }} >
                <Text style={{ fontSize: 20 }}> Height (cm.)</Text>
                <TextInput value={height} onChangeText={(newHeight) => setHeight(newHeight)} keyboardType="numeric" style={{ fontSize: 15 }} placeholder=" Input your Height …" />
            </View>
            {/* บรรทัดที่3 */}
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ flex: 1, padding: 20, backgroundColor: "white", borderRadius: 10, height: 150, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>
                <View style={{ flex: 1, padding: 20, backgroundColor: "white", borderRadius: 10, height: 150, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>{thisBMI}</Text>
                </View>
            </View>
            {/* บรรทัดที่4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}

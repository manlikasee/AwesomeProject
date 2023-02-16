import React from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Myprofile() {
    return (

        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, padding: 10 }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 30 }}>My Profile</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 15, color: 'blue' }}>Upload</Text>
                </View>
            </View>

            {/* 1 */}
            <View style={{ padding: 10, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 150, width: 150, borderRadius: 150 / 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 1 }} source={{ uri: 'https://cdn.icon-icons.com/icons2/154/PNG/512/man_22007.png' }} />
                    </View>
                </View>
            </View>

            {/* 1 */}
            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 15, color: 'black' }}>GENERAL INFORMATION</Text>
            </View>
            {/* 1 */}
            <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="Full Name" />
            </View>
            {/* 1 */}
            <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="Major" />
            </View>

            {/* 2 */}
            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 15, color: 'black', padding: 10 }}>MANAGE BUSINESS ACCOUNT</Text>
            </View>
            {/* 2 */}
            <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="Email" />
            </View>
            {/* 2 */}
            <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="Passwords" />
            </View>

            {/* 3 */}
            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 15, color: 'black', padding: 10 }}>CONTACTS</Text>
            </View>
            {/* 3 */}
            <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="Mobile" />
            </View>
            {/* 3 */}
            <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="Email" />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>นางสาวสุชาดา น่วมคงมั่น 63122420009</Text>
            </View>



        </View>



    );
}
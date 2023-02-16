import React from 'react';
import { View, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Checkmenu() {
    return (

        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>ชื่อนักศึกษาในชั้นเรียน</Text>
                    <Text style={{ fontSize: 15 }}>จำนวนสมาชิก</Text>
                </View>
            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 20 }}>
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 20, width: 100, height: 50, alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 20, textAlign: "left", color: 'black' }}>
                        แชท
                    </Text>
                </View>
                <View style={{ padding: 10, backgroundColor: "skyblue", borderRadius: 20, width: 150, height: 50, alignItems: "center" }}>
                    <Text style={{ fontSize: 18, textAlign: "left", color: 'black' }}>
                        จำนวนที่มาเรียน
                    </Text>
                </View>
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 20, width: 100, height: 50, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 20, textAlign: "left", color: 'black' }}>
                        สมาชิก
                    </Text>
                </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, margin: 10, padding: 10 }}>
                <TextInput placeholder="ค้นหาสมาชิกในชั้นเรียน" />
            </View>
            {/* 1 */}
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 10 }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ marginLeft: 10 }} >
                            <Text style={{ fontSize: 20 }}>Week 1 </Text>
                            <Text style={{ color: "grey" }}> จำนวนสมาชิกที่มาเรียน : 1 กุมภาพันธ์ 2023 </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* 2 */}
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 10 }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'violet', justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ marginLeft: 10 }} >
                            <Text style={{ fontSize: 20 }}>Week 2 </Text>
                            <Text style={{ color: "grey" }}> จำนวนสมาชิกที่มาเรียน : 1 กุมภาพันธ์ 2023 </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* 3 */}
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 10 }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ marginLeft: 10 }} >
                            <Text style={{ fontSize: 20 }}>Week 3 </Text>
                            <Text style={{ color: "grey" }}> จำนวนสมาชิกที่มาเรียน : 1 กุมภาพันธ์ 2023 </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* 4 */}
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 10 }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ marginLeft: 10 }} >
                            <Text style={{ fontSize: 20 }}>Week 4 </Text>
                            <Text style={{ color: "grey" }}> จำนวนสมาชิกที่มาเรียน : 1 กุมภาพันธ์ 2023 </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* 5 */}
            <View style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, padding: 10 }}>
                    <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center' }}>
                    </View>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ marginLeft: 10 }} >
                            <Text style={{ fontSize: 20 }}>Week 5 </Text>
                            <Text style={{ color: "grey" }}> จำนวนสมาชิกที่มาเรียน : 1 กุมภาพันธ์ 2023 </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>นางสาวมัลลิกา ศรีไพโรจน์ 63122420010</Text>
            </View>


        </View>



    );
}
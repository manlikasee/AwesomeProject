import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import { Image, Text, View } from "react-native";


export default function Event(props) {
    // const event = [
    //     { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
    //     { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
    //     { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
    //     { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
    //     { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
    // ]
    const [onlineEvent, setOnlineEvent] = useState([]);
    const loadOnlineEvent = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineEvent(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineEvent();
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
            <Text style={{ color: 'grey', marginVertical: 10 }}>What's the Worst that Could Happend</Text>
            <FlatList
                horizontal={true}
                data={onlineEvent}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginLeft: 10 }}>
                                <Image style={{ height: 100, width: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={{ uri: item.uri }} />
                                <View style={{ flexDirection: 'row', marginTop: -3, height: 50, width: 200, paddingHorizontal: 10, borderColor: "black", borderWidth: 0.5, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                    <View style={{ padding: 1 }}>
                                        <Text style={{ fontSize: 15, color: 'red', textAlign: 'left' }}>DEC</Text>
                                        <Text style={{ fontSize: 10, color: 'gray', textAlign: 'center' }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding: 1 }}>
                                        <Text style={{ fontSize: 10, color: "black" }}>{item.title}</Text>
                                        <Text style={{ color: 'gray', fontSize: 10 }}>{item.mouth}{item.data}{item.datetime}</Text>
                                        <Text style={{ color: 'gray', fontSize: 10 }}>{item.place}</Text>
                                    </View>
                                </View>

                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />

        </View>
    );
}




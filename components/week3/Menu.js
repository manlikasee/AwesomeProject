import React from 'react';
import { TextInput, View } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth :1, borderColor : "grey", margin :20, padding : 20, borderRadius: 10 }}>
            {/* ก้อนที่1  */}
            <View >
                <TextInput placeholder="What're you looking for?" />
            </View>
            {/* ก้อนที่2 */}
            <View style={{flexDirection : 'row', justifyContent :'space-around'}}>
                <MyIcon title='Hotel' name='building' size={30} color='blue' />
                <MyIcon title='Tour' name='map-marker' size={30} color='tomato' />
                <MyIcon title='Car' name='car' size={30} color='orange' />
                <MyIcon title='Flight' name='plane' size={30} color='purple' />

            </View>
            {/* ก้อนที่ 3 */}
            <View style={{flexDirection : 'row', justifyContent :'space-around'}}>
                <MyIcon title='Cruise' name='ship' size={30} color='maroon' />
                <MyIcon title='Bus' name='bus' size={30} color='brown' />
                <MyIcon title='Event' name='star' size={30} color='gold' />
                <MyIcon title='More' name='ellipsis-h' size={30} color='black' />

            </View>
        </View>
    );
}

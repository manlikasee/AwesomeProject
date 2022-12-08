import React from 'react';
import { View } from 'react-native';
import MyIcon from '../week3/MyIcon';


export default function Section5() {
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-around',padding: 20 }}>
            <MyIcon title='wif' name='wifi' size={20} color='blue' />
            <MyIcon title='coffee' name='coffee' size={20} color='tomato' />
            <MyIcon title='bathtub' name='bathtub' size={20} color='purple' />
            <MyIcon title='car' name='car' size={20} color='black' />
            <MyIcon title='paw' name='paw' size={20} color='brown' />


        </View>
    );
}

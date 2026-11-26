import React from 'react';
import { View } from 'react-native';
import MyIcon from '@/components/week3/MyIcon';

export default function Section5() {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingVertical: 7,
                paddingHorizontal: 14,
                borderBottomWidth: 0.5,
                borderColor: '#ddd',
            }}
        >
            <MyIcon
                name="wifi"
                size={21}
                color="#5798a5"
                title="wifi"
                titleStyle={{ fontSize: 7, color: '#888', marginTop: 2 }}
            />
            <MyIcon
                name="coffee"
                size={21}
                color="#5798a5"
                title="coffee"
                titleStyle={{ fontSize: 7, color: '#888', marginTop: 2 }}
            />
            <MyIcon
                name="bath"
                size={21}
                color="#5798a5"
                title="bath"
                titleStyle={{ fontSize: 7, color: '#888', marginTop: 2 }}
            />
            <MyIcon
                name="car"
                size={21}
                color="#5798a5"
                title="car"
                titleStyle={{ fontSize: 7, color: '#888', marginTop: 2 }}
            />
            <MyIcon
                name="paw"
                size={21}
                color="#5798a5"
                title="paw"
                titleStyle={{ fontSize: 7, color: '#888', marginTop: 2 }}
            />
        </View>
    );
}
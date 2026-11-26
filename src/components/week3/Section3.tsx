import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={{ paddingHorizontal: 14, paddingTop: 22, paddingBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: 22,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#eb6653',
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 14 }}>9.5</Text>
                </View>
                <View style={{ marginLeft: 6 }}>
                    <Text style={{ color: '#eb6653', fontSize: 14 }}>Excellent</Text>
                    <Text style={{ fontSize: 10, color: '#444' }}>See 801 reviews</Text>
                </View>
            </View>
        </View>
    );
}
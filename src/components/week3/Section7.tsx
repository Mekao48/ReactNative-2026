import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View
            style={{
                paddingHorizontal: 14,
                paddingVertical: 7,
                borderBottomWidth: 0.5,
                borderColor: '#ddd',
            }}
        >
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 6 }}>
                Room Type
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{
                        width: 64,
                        height: 76,
                        borderRadius: 6,
                        resizeMode: 'cover',
                    }}
                    source={require('@/assets/week3/room-8.jpg')}
                />
                <View style={{ flex: 1, marginLeft: 7 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 16, color: '#f16b59', marginTop: 13 }}>
                        $399.99
                    </Text>
                    <Text style={{ color: '#5798a5', fontSize: 9, marginTop: 2 }}>
                        Hurry Up! This is your last room!
                    </Text>
                </View>
            </View>
        </View>
    );
}
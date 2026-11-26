import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        <View
            style={{
                flexDirection: 'column',
                paddingVertical: 7,
                paddingHorizontal: 14,
                borderBottomWidth: 0.5,
                borderColor: '#ddd',
            }}
        >
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Location</Text>
            <Text style={{ marginTop: 3, fontSize: 10, lineHeight: 13, color: '#333' }}>
                218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et...
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Image
                    style={{ flex: 1, resizeMode: 'cover', aspectRatio: 2.85 }}
                    source={require('@/assets/week3/map.jpg')}
                />
            </View>
        </View>
    );
}
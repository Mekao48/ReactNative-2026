import React from 'react';
import { Text, View } from 'react-native';

export default function Section4() {
    return (
        <View
            style={{
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                borderColor: '#ddd',
                paddingVertical: 8,
                paddingHorizontal: 14,
            }}
        >
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Hotel Description</Text>
            <Text style={{ marginTop: 3, fontSize: 10, lineHeight: 13, color: '#333' }}>
                218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
            </Text>
        </View>
    );
}
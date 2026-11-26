import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Section8() {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 14,
                paddingVertical: 6,
                borderTopWidth: 0.5,
                borderColor: '#ddd',
            }}
        >
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 9 }}>Price</Text>
                <Text style={{ color: '#e96550', fontSize: 16 }}>$399.99</Text>
                <Text style={{ fontSize: 8 }}>AVG/Night</Text>
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#e96550',
                    borderRadius: 7,
                    width: 90,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 14 }}>Book Now</Text>
            </TouchableOpacity>
        </View>
    );
}
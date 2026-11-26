import React from 'react';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { Image, View } from 'react-native';

export default function Section1() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ flex: 1, resizeMode: 'cover', aspectRatio: 2.5 }}
                    source={require('@/assets/week3/room-6.jpg')}
                />
            </View>
            <View
                style={{
                    position: 'absolute',
                    top: 12,
                    left: 14,
                    right: 14,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
            </View>
        </View>
    );
}
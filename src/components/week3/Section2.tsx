import FontAwesome from '@react-native-vector-icons/fontawesome';
import React from 'react';
import { Text, View } from 'react-native';

export default function Section2() {
    return (
        <View
            style={{
                flex: 1,
                marginTop: -16,
                marginHorizontal: 14,
                paddingHorizontal: 10,
                paddingVertical: 8,
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.18,
                shadowRadius: 3,
                elevation: 4,
                zIndex: 1,
            }}
        >
            <Text style={{ textAlign: 'center', fontSize: 16 }}>
                Hilton San Francisco
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 3,
                }}
            >
                <FontAwesome name="star" size={13} color="#ffc107" />
                <FontAwesome name="star" size={13} color="#ffc107" />
                <FontAwesome name="star" size={13} color="#ffc107" />
                <FontAwesome name="star" size={13} color="#ffc107" />
                <FontAwesome name="star-half" size={13} color="#ffc107" />
            </View>
            <Text
                style={{
                    textAlign: 'center',
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 14,
                    color: '#444',
                }}
            >
                Facilities provided may range from a modest quality mattress in a small room to large suites
            </Text>
        </View>
    );
}
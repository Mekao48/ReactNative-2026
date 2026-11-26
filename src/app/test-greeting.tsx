import { View } from 'react-native';
import Greeting from '@/components/greeting';
export default function TestGreeting(){
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Roxaria' lastname = 'Silverhands' />
        <Greeting name='Jaina' lastname = 'Laurrence'/>
        <Greeting name='Valeera' />
      </View>
    );
}

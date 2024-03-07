import { View } from 'react-native';
import Header from '../Header';
import Stories from '../../components/Stories';


export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                marginVertical: 32,
                MarginHorizontal: 16,
            }}
        >
            <Header />
            <Stories />
        </View>
    )
}
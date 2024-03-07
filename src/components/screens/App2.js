import { View } from 'react-native';
import Header from '../header';
import Stories from '../Stories';


export default function App() {
    return (
        <View
        style={{
            felx: 1,
            marginVertical: 32,
            MarginHorizontal: 16,
        }}
        >
      <Header/>
      <Stories/>
      </View>
    )
}
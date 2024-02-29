import { View } from 'react-native';
import Header from './src/components/header';
import Stories from './src/components/Stories';


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
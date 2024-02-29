
import {View, } from 'react-native';
import InfoProfile from './src/components/InfoProfile';
import Cbum from './src/assets/Cbum.jpg';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile
            image={Cbum}
            publi={250 }
            followers={ 7000 }
            following={ 1000 }/>
        </View>
  )
};
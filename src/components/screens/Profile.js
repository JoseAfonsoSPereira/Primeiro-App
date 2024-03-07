
import {View} from 'react-native';
import InfoProfile from '../InfoProfile';
import Cbum from '../../assets/Cbum.jpg';
import MyPosts from '../MyPosts';

export default function Profile( ) {
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
            <MyPosts />
        </View>
  )
};
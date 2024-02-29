import {View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';

export default function Header() {
    return(

        <View
        style={styles.container}
      >
        <Image style={{ width: 150, height: 50 }} source={Logo} />
        <View style={style.icons}>
          <TouchableOpacity>
            <Feather name="heart" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={style.icons}>
            <Ionicons name="chatbubble-ellipses-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:"100%",
    alignItems: "center"
  },
  icons:{ flexDirection: "row"},
  icon: {marginLeft: 8},
});
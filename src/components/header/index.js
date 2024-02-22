import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';

export default function Header() {
    return(

        <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center"
        }}
      >
        <Image style={{ width: 150, height: 50 }} source={Logo} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Feather name="heart" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 8 }}>
            <Ionicons name="chatbubble-ellipses-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
}
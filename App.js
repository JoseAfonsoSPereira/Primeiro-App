import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Logo from './assets/logo.png';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
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
      <ScrollView contentContainerStyle={{ gap: 8, height:100, }}
        horizontal style={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}> 
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://lojaviego.com.br/cdn/shop/files/BoneChrisBumstead-CBUM.webp?v=1696445561"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpnraGJEUxCDNtllzvmxOLOPH52Qdb2_CmA&usqp=CAU"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://i.pinimg.com/236x/0d/98/5e/0d985e9b78552154209431d8dd82d964.jpg"
          }}
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
};
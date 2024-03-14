import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from "react-native";
import { Feather, FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Posts({profileImage,postImage,profileName, description}) {
  return (
     <View style={styles.container}>
        <View style={styles.topo}>
          <Image style={styles.photoPrefil} source={profileImage} />

          <Text style={styles.name}>{profileName}</Text>

          <Feather name="more-vertical" size={28} coclor="black"/>
      </View>

      <View>
      <Image style={styles.photo} source={postImage} />
      </View>

      <View style={styles.icons}>
        <TouchableOpacity>
        <AntDesign name="hearto" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
        <Feather name="send" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
        <MaterialCommunityIcons style={{marginLeft: 210}} name="bookmark-outline" size={33} color="black"/>
        </TouchableOpacity>        

              </View>

      

      <Text style={{ marginHorizontal:10, marginVertical:10}}>{description}</Text>

      

      

     
      
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    backgroundColor:"white",
    marginHorizontal: 11,
  },
  topo: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginVertical: 20,
    marginHorizontal: 12,
  },
  photoPrefil:{
    width: 55,
    height: 55,
    borderRadius: 50
  },

  photo: {
    width: "95%",
    height: 450,
    marginVertical: -10,
    marginHorizontal: 10,
  },
  
  name:{
    flex:1,
    marginLeft:10,
    fontSize:18
  },

  icons:{
    marginTop:18,
    marginLeft:15,
    flexDirection: "row",
    alignItems:"center",
    gap:10 
   
  }
  
});

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PostImage from "../../assets/post.jpg";
import PostCbum1 from "../../assets/postcbum1.jpg";
import PostCbum9 from "../../assets/postcbum9.jpg";
import PostCbum2 from "../../assets/postcbum2.jpg";
import PostCbum3 from "../../assets/postcbum3.jpg";
import PostCbum4 from "../../assets/postcbum4.jpg";
import PostCbum5 from "../../assets/postcbum5.jpg";
import PostCbum6 from "../../assets/postcbum6.jpg";
import PostCbum7 from "../../assets/postcbum7.jpg";


export default function MyPosts() {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="grid" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="movie-open-play-outline"
            size={32}
            color="#aaa"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="account-outline"
            size={32}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postsList}>
        <Image source={PostImage} style={styles.post} />
        <Image source={PostCbum1} style={styles.post} />
        <Image source={PostCbum9} style={styles.post} />
        <Image source={PostCbum2} style={styles.post} />
        <Image source={PostCbum3} style={styles.post} />
        <Image source={PostCbum4} style={styles.post} />
        <Image source={PostCbum5} style={styles.post} />
        <Image source={PostCbum6} style={styles.post} />
        <Image source={PostCbum7} style={styles.post} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  postsList: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  post: {
    width: "33.3%",
    borderWidth: 1,
    borderColor: "#ddd",
    height: 150,
  },
});

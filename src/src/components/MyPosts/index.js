import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import PostImage from "../../assets/post-example.png";

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
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
        <Image source={PostImage} style={styles.post} />
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

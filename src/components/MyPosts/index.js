import { View,TouchableOpacity, StyleSheet, Image} from "react-native";
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
import{} from 'react-native';
import post from "../../assets/post.jpg";


export default function MyPosts({}) {
    return(
        <View styles={styles.container}>
            


            <View style = {styles.icon}>
            <TouchableOpacity>
                <MaterialIcons name="grid-on" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialCommunityIcons name="movie-open-play-outline" size={40} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
                <MaterialCommunityIcons name="account" size={40} color="black" />
            </TouchableOpacity>
                
            </View>

            <View style={styles.postList}>
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                <Image style={styles.post} source={post} />
                
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center"
    },

    icon: {
        marginTop: 15,
        alignItems: 'center',
        width:"100%",
        flexDirection: 'row',
        justifyContent:'space-evenly',
        gap: 32,
    

    },

    post: {
        width: "33.3%",
        borderWidth: 1,
        borderColor: "#ddd",
        height: 220

    },

    postList: {
        marginTop: 16,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent:'space-between',
    },
    

})
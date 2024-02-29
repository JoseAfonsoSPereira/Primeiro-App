import { View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import TomCruise from "./src/assets/TomCruise.jpg";
import Cbum from "./src/assets/Cbum.jpg";
import Alan from "./src/assets/Alan.jpg";
import Mariana from "./src/assets/Mariana.jpg";

export default function Stories(){

    return(
        <ScrollView contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}>
            <Story Image={TomCruise}/>
            <Story Image={Cbum}/>
            <Story Image={Alan}/>
            <Story Image={Mariana}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        gap: 8,
        height: 100,
    },
})
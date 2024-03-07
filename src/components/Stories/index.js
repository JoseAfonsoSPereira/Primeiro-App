import { StyleSheet, Image, ScrollView } from "react-native";
import Gabriel from "../../assets/Gabriel.jpeg";
import Arthur from "../../assets/Arthur.jpeg";
import Cbum from "../../assets/Cbum.jpg";
import TomCruise from "../../assets/TomCruise.jpg";
import Alan from "../../assets/Alan.jpg";
import NCagezinho from "../../assets/N. Cagezinho.jpg";
import Story from "../Story";

export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Story image={Cbum} />
      <Story image={TomCruise} />
      <Story image={Alan} />
      <Story image={NCagezinho} />
      <Story image={Gabriel} />
      <Story image={Arthur} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
});

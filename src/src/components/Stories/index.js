import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/fake-feminino.jpg";
import Fake2 from "../../assets/fake-masculino.jpg";
import Story from "../Story";

export default function Stories() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Story image={Fake1} />
      <Story image={Fake2} />
      <Story image={Fake1} />
      <Story image={Fake2} />
      <Story image={Fake1} />
      <Story image={Fake2} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
});

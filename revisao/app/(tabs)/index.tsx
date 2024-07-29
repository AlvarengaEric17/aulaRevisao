import {View, StyleSheet} from "react-native";

import Olimpiadas1 from "./olimpiadas1"

import Olimpiadas2 from "./olimpiadas2"

export default function HomeScreen(){
  return(
    <View style={styles.container}>
      <Olimpiadas1 nome='Coreia do Sul' quantidade="9" ouro="5" prata="3" bronze="1"></Olimpiadas1>

      <Olimpiadas2 nome='Japão' quantidade="11" ouro="5" prata="2" bronze="4"></Olimpiadas2>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
})
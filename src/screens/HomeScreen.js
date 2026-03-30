import { View, Text, StyleSheet, Image, Pressable, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
       source={require("C:/Users/46559720845/Downloads/modeloAt01_S1_R2/modeloAt01_S1_R2/assets/image.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Bryan Tecno</Text>

      <Text style={styles.descricao}>
        Somos uma empresa especializada em tecnologia e inovação.
      </Text>

      <Pressable style={styles.botao} onPress={() => navigation.navigate("Produtos")}>
        <Text style={styles.botaoTexto}>Ver Produtos</Text>
      </Pressable>

      <Pressable style={styles.botao} onPress={() => navigation.navigate("Contato")}>
        <Text style={styles.botaoTexto}>Contato</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 40 },
  logo: { width: 200, height: 200, marginBottom: 20 },
  titulo: { fontSize: 34, fontWeight: "bold" },
  descricao: { textAlign: "center", marginVertical: 25 },
  botao: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignItems: "center"
  },
  botaoTexto: { color: "#fff", fontWeight: "bold" }
});
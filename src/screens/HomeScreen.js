import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function homeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require=("../assets/image.png")}
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
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  logo: { width: 120, height: 120, marginBottom: 20 },
  titulo: { fontSize: 24, fontWeight: "bold" },
  descricao: { textAlign: "center", marginVertical: 15 },
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
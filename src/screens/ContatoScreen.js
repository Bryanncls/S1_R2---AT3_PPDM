import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function contatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <Text>📞 Telefone: (19) 198812-0909</Text>
      <Text>💬 WhatsApp: (11) 198812-0909</Text>
      <Text>📍 Endereço: Rua José Ednei Barijan, 307 - São Paulo</Text>
      <Text>🏢 CNPJ: 10.100.222/1010-20</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 }
});
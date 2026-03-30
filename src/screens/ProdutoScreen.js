import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";

const produtos = [
  { 
    id: 1, 
    nome: "Fone Bluetooth", 
    preco: 39.89, 
    imagem: "https://images.unsplash.com/photo-1518449036152-91b2e5f4f3c6" 
  },
  { 
    id: 2, 
    nome: "Headset Gamer", 
    preco: 189.90, 
    imagem: "https://images.unsplash.com/photo-1585386959984-a41552231658" 
  },
  { 
    id: 3, 
    nome: "Fone In-Ear", 
    preco: 249.90, 
    imagem: "https://images.unsplash.com/photo-1578319439584-104c94d37305" 
  },
  { 
    id: 4, 
    nome: "Fone Over-Ear", 
    preco: 289.90, 
    imagem: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b" 
  },
  { 
    id: 5, 
    nome: "Fone Profissional", 
    preco: 309.90, 
    imagem: "https://images.unsplash.com/photo-1516707570263-52f0f0c81c0c" 
  },
];

export default function produtosScreen() {
  const [quantidade, setQuantidade] = useState({});

  function adicionar(nome) {
    Alert.alert(`${nome} adicionado ao carrinho`);
  }

  return (
    <View style={styles.container}>
      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image
            source={{ uri: item.imagem }}
            style={styles.img}
          />

          <Text>{item.nome}</Text>
          <Text>R$ {item.preco}</Text>
          <Text>PIX: R$ {(item.preco * 0.9).toFixed(2)}</Text>

          <View style={styles.qtdContainer}>
            <Pressable
              onPress={() =>
                setQuantidade({
                  ...quantidade,
                  [item.id]: Math.max((quantidade[item.id] || 0) - 1, 0)
                })
              }
            >
              <Text>-</Text>
            </Pressable>

            <Text>{quantidade[item.id] || 0}</Text>

            <Pressable
              onPress={() =>
                setQuantidade({
                  ...quantidade,
                  [item.id]: (quantidade[item.id] || 0) + 1
                })
              }
            >
              <Text>+</Text>
            </Pressable>
          </View>

          <Pressable style={styles.botao} onPress={() => adicionar(item.nome)}>
            <Text style={{ color: "#fff" }}>Adicionar</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  card: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  img: { 
    width: 80, 
    height: 80,
    marginBottom: 10,
    borderRadius: 10
  },
  qtdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginVertical: 10
  },
  botao: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 5,
    alignItems: "center"
  }
});
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert, ScrollView } from "react-native";

const produtos = [
  { 
    id: 1, 
    nome: "Fone Bluetooth", 
    preco: 59.89, 
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgpADIE101LPCZUhWwumjeUVY25V2GW-fM5aYyKpq8GlhXmfBuAWjkAawyPbV_yf2NaITlWwa6HKY3WSP8iMsAFNNvPxE0"
  },
  {
    id: 2, 
    nome: "Teclado Gamer", 
    preco: 122.90, 
    imagem: "https://s2-techtudo.glbimg.com/vdO2eAo27ELaz9v95MzLwZhCeBw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/D/C/BynViDTI60Mlt4AYfjLw/razer-huntsman-mini-2020-gallery-07.jpg"
  },
  {
    id: 3, 
    nome: "Fone In-Ear", 
    preco: 149.90, 
    imagem: "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=400&q=60"
  },
  { 
    id: 4, 
    nome: "Gabinete Gamer", 
    preco: 289.90, 
    imagem: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=60"
  },
  { 
    id: 5, 
    nome: "Placa de video", 
    preco: 700.90, 
    imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAAuHfX_Njuehd15t9nGMU-PyMeTtGufMJpMu0bX99SkIQDjhqWTeeXdjbQ5ShHoaXFY5bMWXhqYij1t19xQg0BCK8FktCtI1jMNDN6uBMWkpo7TLUq0fGwOijdWUt-fJx7Dxwzn1gpw&usqp=CAc"
  }
];

export default function ProdutosScreen() {
  const [quantidade, setQuantidade] = useState({});

  function adicionar(nome) {
    Alert.alert(`${nome} adicionado ao carrinho`);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>

          <Image
            source={{ uri: item.imagem }}
            style={styles.img}
          />

          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>

            <Text style={styles.preco}>R$ {item.preco}</Text>
            <Text style={styles.pix}>
              PIX: R$ {(item.preco * 0.9).toFixed(2)}
            </Text>

            <View style={styles.qtdContainer}>
              <Pressable
                style={styles.qtdBtn}
                onPress={() =>
                  setQuantidade({
                    ...quantidade,
                    [item.id]: Math.max((quantidade[item.id] || 0) - 1, 0)
                  })
                }
              >
                <Text style={styles.qtdTexto}>-</Text>
              </Pressable>

              <Text style={styles.qtdNumero}>
                {quantidade[item.id] || 0}
              </Text>

              <Pressable
                style={styles.qtdBtn}
                onPress={() =>
                  setQuantidade({
                    ...quantidade,
                    [item.id]: (quantidade[item.id] || 0) + 1
                  })
                }
              >
                <Text style={styles.qtdTexto}>+</Text>
              </Pressable>
            </View>

            <Pressable
              style={styles.botao}
              onPress={() => adicionar(item.nome)}
            >
              <Text style={styles.botaoTexto}>Adicionar</Text>
            </Pressable>
          </View>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
    elevation: 3
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover"
  },

  info: {
    flex: 1,
    marginLeft: 10
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold"
  },

  preco: {
    fontSize: 15,
    marginTop: 5
  },

  pix: {
    color: "green",
    fontWeight: "bold"
  },

  qtdContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },

  qtdBtn: {
    backgroundColor: "#ddd",
    padding: 6,
    borderRadius: 5
  },

  qtdTexto: {
    fontSize: 16,
    fontWeight: "bold"
  },

  qtdNumero: {
    marginHorizontal: 10,
    fontSize: 16
  },

  botao: {
    backgroundColor: "#007bff",
    padding: 8,
    borderRadius: 6,
    alignItems: "center"
  },

  botaoTexto: {
    color: "#fff",
    fontWeight: "bold"
  }
});
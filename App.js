import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import homeScreen from "./src/screens/HomeScreen.js";
import produtoScreen from "./src/screens/ProdutoScreen.js"
import contatoScreen from "./src/screens/ContatoScreen.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="Produtos" component={produtoScreen} />
        <Stack.Screen name="Contato" component={contatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
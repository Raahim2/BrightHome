// Metro waiting on exp://192.168.0.103:8081

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// █ ▄▄▄▄▄ █▀▀ ████ ▄█ ▄▄▄▄▄ █
// █ █   █ █▄▀██▀██▀ █ █   █ █
// █ █▄▄▄█ █ ▄ █ ▄▀ ██ █▄▄▄█ █
// █▄▄▄▄▄▄▄█ █ ▀▄█ █▄█▄▄▄▄▄▄▄█
// █  █ █▀▄▄█▀█  ▄▀▄▄▀  ▄▀▄▄▀█
// █ ▀▀█▀▄▄█▄▀▀  ▀ ▀█▄▀ ▀▀█▄▄█
// ████▄ █▄ ▀▀▄ █  █▀█ ▄█ ██▀█
// █▄▀ ██ ▄▄ ▀▀ █▀██ ▄▄ ▀▀██▄█
// █▄▄█▄▄▄▄█▀▄██ ▀▄  ▄▄▄ █ ▄ █
// █ ▄▄▄▄▄ █▄█▄▄ █▄  █▄█  ▀ ▄█
// █ █   █ █▀▄▄▀▄▄▀▀▄ ▄▄ █▀▄██
// █ █▄▄▄█ █▀█▄██  █  █▄  ▄█▄█
// █▄▄▄▄▄▄▄█▄█▄██▄▄█▄███▄▄█▄▄█


import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/HomeScreen';
import Products from './screens/ProductScreen';
import Product from './screens/SelectedProduct';
import Cart from './screens/CartScreen';
import { CartProvider } from './components/CartContext';
import CheckoutPage from './screens/CheckoutScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Bright Home">

            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

            <Stack.Screen name="Products" component={Products}
              options={({ route }) => ({
                title: "Cateogry : "+route.params?.category || 'Cateogry : Sofa',
                headerShown: true,
              })}
            />

            <Stack.Screen name="Product" component={Product}
              options={({ route }) => ({
                title: "Product : "+route.params.product.name || 'Product : NaN',
                headerShown: true,
              })}
            />

            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }}/>
            
            <Stack.Screen name="Checkout" component={CheckoutPage} options={{ headerShown: true }}/>

        </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  
  );
}



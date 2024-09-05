import { React ,useContext  , useState , useEffect} from "react";
import { StyleSheet , View , ScrollView , Text , TouchableOpacity} from "react-native";
import CartCard from "../components/CartCard";
import { CartContext } from "../components/CartContext";

export default function Cart({route , navigation }) {
  // const [totalQty , setTotalQty] = useState(0);
  // const [totalPrice , setTotalPrice] = useState(0)
  const { cart } = useContext(CartContext);
  

  let totalQty = 0;
  let totalPrice = 0;


  cart.map((product, index) => (
    totalQty = totalQty + product.quantity,
    totalPrice = totalPrice + (product.price)*totalQty
  ))
 


  return (
  <>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.cardContainer}>
        {cart.map((product, index) => (
          <CartCard  product={product} />
        ))}
    </ScrollView>

    <View style={styles.LowerContainer}>
        <View style={styles.header}>
            <Text style={styles.title}>Total Items : {totalQty}</Text>
            <Text style={styles.price}>${totalPrice}.00</Text>
        </View>

        <TouchableOpacity style={styles.buyButton}  onPress={() => navigation.navigate('Checkout', { totalPrice: totalPrice })}>
            <Text style={styles.buyButtonText}>Proceed to checkout</Text>
        </TouchableOpacity>
    </View>

  </>
  );
}

const styles = StyleSheet.create({
    cardContainer:{
        height:"75%"
    },
    LowerContainer:{
        backgroundColor:'white',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    buyButton: {
        marginHorizontal:20,
        backgroundColor: '#333333',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom:30
      },
      buyButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      header: {
        marginTop:10,
        marginHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
      },
      
  });



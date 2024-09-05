import { useState , React , useContext} from "react";
import { View, Image  , Text , TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";
import { CartContext } from "./CartContext";

export default function CartCard({product}) {
  const [qty , setqty] = useState(product.quantity)
  const { updateQuantity } = useContext(CartContext);
  const {deleteItem} = useContext(CartContext)
  
  function inc(){
    setqty(qty+1)
    updateQuantity(product.id, qty+1);
  }

  function dec(){
    if(qty>1){
      setqty(qty-1)
      updateQuantity(product.id, qty-1);
    }
  }
  

  return (
    <>
     

    <View style={styles.cardContainer}>
  <Image source={require('../assets/Products/item.jpg')} style={styles.productImage} />

  <View style={styles.detailsContainer}>
    <Text style={styles.productName}>{product.name}</Text>
    <Text style={styles.productDescription}>{product.type}</Text>
    <Text style={styles.productPrice}>${parseInt(product.price) * parseInt(qty)}.00</Text>
  </View>

  <View style={styles.quantityContainer}>
    <TouchableOpacity style={styles.quantityButton} onPress={() => dec()}>
      <Text style={styles.quantityText}>-</Text>
    </TouchableOpacity>

    <Text style={styles.quantityNumber}>{qty}</Text>

    <TouchableOpacity style={styles.quantityButton} onPress={() => inc()}>
      <Text style={styles.quantityText}>+</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(product.id)}>
    <Text style={styles.deleteButtonText}>Remove</Text>
  </TouchableOpacity>
    </View>

    </>
  );
}

const styles = StyleSheet.create({

cardContainer: {

    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    },
    productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    },
    detailsContainer: {
    flex: 1,
    marginLeft: 10,
    },
    productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    },
    productDescription: {
    fontSize: 16,
    color: '#888',
    marginVertical: 4,
    },
    productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    },
    quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    quantityButton: {
    width: 35,
    height: 35,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginHorizontal: 4,
    },
    quantityText: {
    fontSize: 18,
    color: '#333',
    },
    quantityNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    },
    deleteButton: {
      padding: 10,
      backgroundColor: '#ff4d4d',
      borderRadius: 5,
      marginLeft: 10,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
});





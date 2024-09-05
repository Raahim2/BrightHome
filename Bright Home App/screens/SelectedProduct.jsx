import React from "react";
import { useState  , useContext} from "react";
import { StyleSheet , View, Image , Text , TouchableOpacity , TextInput , ScrollView} from "react-native";
import { CartContext } from "../components/CartContext";


export default function Product({route , navigation }) {
  const { product } = route.params || { product: 'No Product Selected' };
  const { addToCart } = useContext(CartContext);
  const [qty , setqty] = useState(1)

  function inc(){
    setqty(qty+1)
  }

  function dec(){
    if(qty>1){
      setqty(qty-1)
    }
  }



  return (
  <>
    {/* <View style={styles.screen}> */}
        <Image source={require('../assets/Products/item.jpg')} style={styles.image}></Image>
        <View style={styles.lower}>
          <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Product Information */}
            <View style={styles.header}>
              <View>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.subtitle}>{product.type}</Text>
              </View>
              <Text style={styles.price}>${product.price}.00</Text>
            </View>

            {/* Colour Selection */}
            <View style={styles.colorContainer}>
              <Text style={styles.sectionTitle}>Colour</Text>
              <View style={styles.colorOptions}>
                <View style={[styles.colorCircle, { backgroundColor: '#D4A73A' }]} />
                <View style={[styles.colorCircle, { backgroundColor: '#A9A9A9' }]} />
                <View style={[styles.colorCircle, { backgroundColor: '#8B3A3A' }]} />
              </View>
            </View>

            {/* Quantity Selector */}
            <View style={styles.quantityContainer}>
              <Text style={styles.sectionTitle}>Quantity</Text>
              <View style={styles.quantitySelector}>
                <TouchableOpacity style={styles.button} onPress={dec}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.quantityInput}
                  value={qty.toString()}
                  editable={false}
                  textAlign="center"
                />
                <TouchableOpacity style={styles.button} onPress={inc}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Description */}
            <View style={styles.descriptionContainer}>
              <Text style={styles.sectionTitle}>Description</Text>
              <Text style={styles.descriptionText}>
                It looks great from all sides you can put it in the middle of the room,
                high legs make it easier cleaning under the seat.
              </Text>
            </View>

            {/* Buy Now Button */}
            <View style={styles.btnConatiner}>
              <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
                <Image source={require('../assets/Icons/cart.png')} style={styles.cartImage}></Image>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buyButton} onPress={() => addToCart(product, qty)}>
                <Text style={styles.buyButtonText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
            
          </ScrollView>
        </View>




    {/* </View> */}
  </>
  );
}

const styles = StyleSheet.create({
  btnConatiner:{
    display:'flex',
    flexDirection:'row'
  },
  cartImage:{
    width:25,
    height:25,
  },
  cartButton:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:12,
    padding:4,
    width:50,
    height:50,
  },
  image:{
    height:'40%',
    width:'100%',
    resizeMode:'contain'
  },
  lower:{
    height:'60%',
    backgroundColor:'white',
    borderTopRightRadius:30,
    borderTopLeftRadius:30

  },
  container: {
    flex: 1,
    padding: 20,
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  colorContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  quantityContainer: {
    marginBottom: 20,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#333333',
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555555',
  },
  buyButton: {
    marginBottom:50,
    backgroundColor: '#333333',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex:1,
    marginLeft:20
  },
  buyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  
  

  });



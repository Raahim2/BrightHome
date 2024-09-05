import React from "react";
import { StyleSheet , View , ScrollView , Text} from "react-native";
import ItemCard from "../components/ItemCard";
import axios from "axios";
import { useState } from "react";



export default function Products({route , navigation}) {
  const { category } = route.params || { category: 'Default Category' };
  const [products, setProducts] = useState([]);

  // const getProducts = () => {
    // axios.get(`http://127.0.0.1:5000/getProducts/${category}`)
    axios.get(`http://192.168.0.103:5000/getProducts/${category}`)

      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:' , error);
      });
  // };




  return (
  <>
    <View style={styles.screen}>

    <View style={styles.bluebox}> 
      <Text style={styles.cattext}>{category}</Text>
    </View>



    <Text style={styles.text}>Cateogry : {category}</Text>
    <ScrollView contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>

      {products.map((product, index) => (
        <ItemCard product={product} navigation={navigation}/>
      ))}


              
    </ScrollView>

    {/* <View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <Category name={"Bed"} navigation={navigation}/>
        <Category name={"Chair"} navigation={navigation}/>
        <Category name={"Sofa"} navigation={navigation}/>
        <Category name={"Tabel"} navigation={navigation}/>
        <Category name={"Wardrobe"} navigation={navigation}/>
      </ScrollView>
    </View> */}



    </View>
  </>
  );
}

const styles = StyleSheet.create({
  bluebox:{
    height:'20%',
    backgroundColor:'#bad0ff',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  cattext:{
    fontSize:20,
    fontWeight:'bold'
  },
  screen:{
    backgroundColor:'white',
    height:'100%'
  },
  scrollContainer: {
    marginLeft:10,
    marginRight:10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:20,
    margin:10
  },
  
  
  
  
  
  


  });



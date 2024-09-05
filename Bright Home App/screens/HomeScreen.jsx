import React from "react";
import { StyleSheet , View , ScrollView , Text} from "react-native";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Category from "../components/Cateogry";
import ItemCard from "../components/ItemCard";


export default function Home({navigation}) {
  const hardcodedProducts = [
    {
      id: "BHF1",
      name: "Green X2",
      price: 600,
      type: "SOFA"
    },
    {
      id: "BHF2",
      name: "Kings Cup",
      price: 720,
      type: "SOFA"
    },
    {
      id: "BHF3",
      name: "Prajapati ki Gaddi",
      price: 180,
      type: "SOFA"
    },
    {
      id: "BHF4",
      name: "Mahan Sofa",
      price: 510,
      type: "SOFA"
    },
    {
      id: "BHF5",
      name: "Jos 5",
      price: 100,
      type: "SOFA"
    }
  ];

  return (
  <>
  <View style={styles.temp}>
    <Navbar back={false} navigation={navigation}/>

    <SearchBar/>

    <View>
    <Text style={styles.text}>Choose a Cateogry</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <Category name={"Bed"} navigation={navigation}/>
        <Category name={"Chair"} navigation={navigation}/>
        <Category name={"Sofa"} navigation={navigation}/>
        <Category name={"Table"} navigation={navigation}/>
        <Category name={"Wardrobe"} navigation={navigation}/>
      </ScrollView>
    </View>

    <Text style={styles.text}>Explore</Text>
    <ScrollView contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
      {hardcodedProducts.map((product, index) => (
        <ItemCard product={product} navigation={navigation}/>
      ))}
    </ScrollView>

  </View>


  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    width: '30%',
    height: 100,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    marginLeft:20,
  },
  temp:{
    height:"100%",
    backgroundColor:'white'
  },
  scrollContainer: {
    marginLeft:10,
    marginRight:10,
  },
  
  
  
  


  });



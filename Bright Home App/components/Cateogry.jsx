import React from "react";
import { View, Image  , Text , TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";

export default function Category({name , navigation}) {
  const images = {
    Bed: require('../assets/Icons/bed.png'),
    Chair: require('../assets/Icons/chair.png'),
    Sofa: require('../assets/Icons/sofa.png'),
    Table: require('../assets/Icons/table.png'),
    Wardrobe: require('../assets/Icons/wardrobe.png'),
  };

  const imageSource = images[name] || require('../assets/Icons/bed.png');
  return (
    <>
      <TouchableOpacity style={styles.catbox} onPress={() => navigation.navigate('Products', { category: name })}>
        <Image source={imageSource} style={styles.image}></Image>
        <Text style={styles.cname}>{name}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  catbox:{
    margin:10,
    width:100,
    height:100,
    padding:10,
    backgroundColor: '#f0f0f0',
    borderRadius:10
  },
  image:{
    width:60,
    height:60,
    margin:'auto'
  },
  cname:{
    textAlign:'center'
  }
  
});

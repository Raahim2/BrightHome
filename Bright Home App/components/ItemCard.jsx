import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ItemCard({ navigation , product}) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Product', {product:product})  }>
      <Image 
       source={require('../assets/Products/item.jpg')}
       style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth:155,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    margin: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 130, // Adjust based on your design
    height: 130, // Adjust based on your design
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  arrow: {
    fontSize: 20,
    color: 'gray',
  },
});

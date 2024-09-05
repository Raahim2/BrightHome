import {React , useContext} from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../components/CartContext';
import CartCard from '../components/CartCard';

const CheckoutPage = ({navigation , route}) => {
  const { cart } = useContext(CartContext);
  const { totalPrice } = route.params;


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Checkout</Text>
      
      {/* Shipping Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Information</Text>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Address" />
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="Postal Code" keyboardType="number-pad" />
      </View>

      {/* Payment Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <TextInput style={styles.input} placeholder="Card Number" keyboardType="number-pad" />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="MM/YY" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="CVC" keyboardType="number-pad" />
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cart.map((product, index) => (
          <View style={styles.row}>
           <Text style={styles.summaryText}>{product.name}  (X{product.quantity})</Text>
           <Text style={styles.summaryText}>${product.price * product.quantity}.00</Text>
         </View>
        ))}
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>${totalPrice}.00</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  totalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#333333',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CheckoutPage;

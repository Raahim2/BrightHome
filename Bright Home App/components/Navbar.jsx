import React from "react";
import { Text ,Image,View,Button} from "react-native";
import { StyleSheet } from "react-native";
export default function Navbar({back , navigation}) {
  
  return (
  <>
  <View style={styles.nav}>
    {back ? (
        <Image source={require('../assets/Icons/next.jpg')} style={styles.back} />
      ) : (
        <>
          <Text style={styles.headertext}>Bright Home</Text>
        <Image source={require('../assets/Icons/bed.png')} style={styles.logo} />

        </>
      )}
  </View>
  </>
  );
}

const styles = StyleSheet.create({
  nav:{
    marginHorizontal:15,
    marginTop:40,
    backgroundColor:'white',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  headertext:{
    flexShrink:1,
    fontSize:24,
    fontWeight:'bold'
  },
  logo:{
    width:40,
    height:40
  },
  back:{
    width:20,
    height:20,
    transform: [{ rotate: '180deg' }],
  }

  });



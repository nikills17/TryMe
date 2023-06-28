import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Product = ({ item,navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.image} />
      </View>
      <View style={styles.border} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
        activeOpacity={0.95}
        style={styles.viewButton} onPress={() =>navigation.navigate('productDetail')}>
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
        <Image source={require('../assets/heart.png')} style={styles.icon} />
        <Image source={require('../assets/menu.png')} style={styles.icon} />
      </View>
      <Image source={item.matchSource} style={styles.matchImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginTop: 45,
    backgroundColor: '#fff',
    width:'47%'
  },
  imageContainer: {
    backgroundColor: '#e9e9e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
  },
  image: {
    height: 131,
    width: 131,
    resizeMode: 'contain',
  },
  border: {
    borderWidth: 0.5,
    borderColor: '#000',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  name: {
    color: '#000',
    fontWeight: '600',
    fontSize: 15,
  },
  description: {
    width: '90%',
  },
  actionsContainer: {
    marginTop: 25,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  viewButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'transparent',
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 15,
    color: '#000',
  },
  icon: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  matchImage: {
    height: 35,
    width: 101,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    left: 40,
  },
});

export default Product;

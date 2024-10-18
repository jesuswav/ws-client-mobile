import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ContentCard = () => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/400x200' }} 
        style={styles.contentImage} 
      />
      <View style={styles.contentInfo}>
        <Text style={styles.title}>Contenido Fresco</Text>
        <Text style={styles.description}>Explora las mejores tendencias de diseño y aprende nuevas técnicas.</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Leer Más</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  contentImage: {
    width: '100%',
    height: 200,
  },
  contentInfo: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#83C67A',
    marginBottom: 5,
  },
  description: {
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#66B266',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ContentCard;

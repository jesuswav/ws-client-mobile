import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100' }} 
        style={styles.profileImage} 
      />
      <Text style={styles.name}>Nombre Usuario</Text>
      <Text style={styles.description}>Amante del diseño minimalista y moderno.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CA64C',
    marginBottom: 5,
  },
  description: {
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A4DE97',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileCard;

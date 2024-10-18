import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={setQuery}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 30,
    elevation: 5, // Sombra para dar profundidad
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: '#333',
  },
});

export default SearchBar;

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface ItemProps {
  title: string;
  id: string;
}

const data = [
  { id: '1', title: 'Huerto 1' },
  { id: '2', title: 'Huerto 2' },
  { id: '3', title: 'Huerto 3' },
  { id: '4', title: 'Huerto 4' },
];

const Item: React.FC<ItemProps> = ({ title, id }) => {
  const router = useRouter();

  const handlePress = () => {
    // Navega a la pantalla de detalles y pasa los parámetros como query string
    router.push({
      pathname: '/details', 
      params: { itemId: id, itemTitle: title }
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HorizontalSlider: React.FC = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item title={item.title} id={item.id} />}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#28a745', // Verde principal
    padding: 25,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff', // Texto blanco
    textAlign: 'center',
  },
});

export default HorizontalSlider;

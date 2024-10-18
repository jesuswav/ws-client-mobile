import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Importa el slider del paquete correcto

const SliderComponent: React.FC = () => {
  const [value, setValue] = useState<number>(50); // Especificamos el tipo de valor (number)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor: {value.toFixed(0)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(val) => setValue(val)} // Val ahora tiene el tipo number
        minimumTrackTintColor="#66B266"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#4CA64C"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    fontWeight: '600'
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default SliderComponent;

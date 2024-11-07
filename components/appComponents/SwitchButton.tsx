// SwitchButton.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';

interface SwitchButtonProps {
  onToggle?: (isOn: boolean) => void; // Propiedad opcional para manejar el cambio de estado
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ onToggle }) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const translateX = useState(new Animated.Value(0))[0];

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);

    // Animación para el movimiento del slider
    Animated.timing(translateX, {
      toValue: newState ? 30 : 0, // Ajusta el valor según el tamaño del switch
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Llama a la función onToggle si está definida
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.switch, isOn ? styles.on : styles.off]}
      onPress={toggleSwitch}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.slider, { transform: [{ translateX }] }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 60,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    padding: 3,
  },
  on: {
    backgroundColor: '#4caf50',
  },
  off: {
    backgroundColor: '#ccc',
  },
  slider: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
  },
});

export default SwitchButton;

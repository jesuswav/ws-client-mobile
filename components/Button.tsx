import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'alert' | 'disabled' | 'success';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type]]}
      onPress={type === 'disabled' ? undefined : onPress}
      disabled={type === 'disabled'}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    marginVertical: 10,
    width: '80%', // Para un diseño más uniforme
  },
  primary: {
    backgroundColor: '#4CA64C', // Verde primario
  },
  secondary: {
    backgroundColor: '#66B266', // Verde secundario
  },
  alert: {
    backgroundColor: '#D9534F', // Rojo para advertencias
  },
  disabled: {
    backgroundColor: '#d3d3d3', // Color gris para deshabilitado
  },
  success: {
    backgroundColor: '#5cb85c', // Verde de éxito
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;

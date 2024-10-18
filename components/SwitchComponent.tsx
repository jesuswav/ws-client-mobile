import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{isEnabled ? 'Encendido' : 'Apagado'}</Text>
      <Switch
        trackColor={{ false: '#ccc', true: '#A4DE97' }}
        thumbColor={isEnabled ? '#4CA64C' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
});

export default SwitchComponent;

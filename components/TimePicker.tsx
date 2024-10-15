import React, { useState } from 'react';
import { View, Button, Text, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

// Definición de los tipos de los props
interface TimePickerProps {
  time: Date;
  setTime: (newTime: Date) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ time, setTime }) => {
    const [showPicker, setShowPicker] = useState(false);
  
    // Función para actualizar la hora seleccionada
    const onChange = (event: DateTimePickerEvent, selectedTime: Date | undefined) => {
      const currentTime = selectedTime || time;
      setShowPicker(Platform.OS === 'ios');
      setTime(currentTime);
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Seleccionar Hora" onPress={() => setShowPicker(true)} />
        {time && (
          <Text style={{ marginTop: 20, fontSize: 18, color: 'white', marginBottom: 12 }}>
            Hora seleccionada: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        )}
        {showPicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  };
  
export default TimePicker;
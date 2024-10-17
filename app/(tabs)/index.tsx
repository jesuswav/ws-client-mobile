import React, {useEffect, useState} from 'react';
import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import TimePicker from '@/components/TimePicker';
import SwitchButton from '@/components/SwitchButton';

export default function HomeScreen() {

  type MessageType = {
    id: number;
    message: string;
    startTime: string;
  };

  const [userId, setUserId] = useState('yo')

  const [inputValue, setInputValue] = useState('')
  const [targetId, setTargetId] = useState('jesus1')
  const [messages, setMessages] = useState<MessageType[]>([])

  const [socket, setSocket] = useState(undefined)

  // const [time, setTime] = useState('')

  // Estado para la hora del time picker
  const [startTime, setStartTime] = useState(new Date());
  const [finishTime, setFinishTime] = useState(new Date());

  // Conectar al servidor WebSocket
  const ws = new WebSocket('ws://192.168.0.108:3001')

  // Guardar la conexión WebSocket en el estado
  // setSocket(ws)

  // Use effect para conectar con el socket
  useEffect(() => {
    ws.onopen = () => {
      console.log('Conectado al servidor WebSocket')
      // Enviar el ID del usuario al servidor WebSocket
      ws.send(JSON.stringify({ id: userId }))
    }

    ws.onmessage = (event) => {
      const message = event.data
      const parsedMessage = JSON.parse(message)
      console.log('Parsed message:', parsedMessage)
      setMessages((prevMessages) => [...prevMessages, parsedMessage])
    }

    // ws.onclose = () => {
    //   console.log('Conexión cerrada')
    // }

    // Limpiar el WebSocket al desmontar el componente
    return () => {
      console.log('Conexión cerrada')
      ws.close()
    }
  }, [userId])

  const sendMessage = (valor : string) => {
    if (ws && targetId) {
      // Enviar el mensaje junto con el ID destino
      ws.send(
        JSON.stringify({
          id: userId,
          to: targetId,
          message: valor,
          startHour: startTime.toLocaleTimeString([], { hour: '2-digit', hour12: false }),
          startMinute: startTime.toLocaleTimeString([], { minute: '2-digit' }),
          finishHour: finishTime.toLocaleTimeString([], { hour: '2-digit', hour12: false }),
          finishMinute: finishTime.toLocaleTimeString([], { minute: '2-digit' })
        })
      )
      setInputValue('')
    }
  }

  const handleToggle = (isOn: boolean) => {
    console.log()
    var numero 
    console.log("Switch está:", isOn ? "Encendido" : "Apagado");
    if (isOn) {
      numero = '0'
    } else {
      numero = '180'
    }
    sendMessage(numero)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Web sockets connection test!</ThemedText>
        <HelloWave/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>Write your message!</ThemedText>
        <SafeAreaView>
          <TextInput style={styles.input} value={userId} onChangeText={(text) => setUserId(text)} placeholder='Tu id'/>
          <TextInput style={styles.input} value={targetId} onChangeText={(text) => setTargetId(text)} placeholder='ID del destinatario'/>
          <TextInput style={styles.input} value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder='Mensaje'/>
          {/* Switch button */}
          <SwitchButton onToggle={handleToggle} />
        </SafeAreaView>
        <View>
          {messages.map((message, index) => (
            <ThemedText key={index}>{message.message}</ThemedText>
          ))}
        </View>
        <View>
          <TimePicker time={startTime} setTime={setStartTime} />
          <TimePicker time={finishTime} setTime={setFinishTime} />
          {/* <TouchableOpacity onPress={sendMessage} style={styles.button}>
            <ThemedText style={styles.buttonText}>Send</ThemedText>
          </TouchableOpacity> */}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    marginTop: 16,
    height: 40,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#ffffff',
    backgroundColor: '#333',
  },
  button: {
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native'
import SwitchComponent from '@/components/appComponents/SwitchComponent'
import GardenItem from '@/components/appComponents/GardenItem'

export default function HomeScreen() {
  type MessageType = {
    id: number
    message: string
    startTime: string
  }

  const [userId, setUserId] = useState('yo')

  const [inputValue, setInputValue] = useState('')
  const [targetId, setTargetId] = useState('jesus2')
  const [messages, setMessages] = useState<MessageType[]>([])

  // const [time, setTime] = useState('')

  // Estado para la hora del time picker
  const [startTime, setStartTime] = useState(() => {
    const currentTime = new Date()
    currentTime.setHours(8) // Establece la hora (08:00 AM)
    currentTime.setMinutes(30) // Establece los minutos
    return currentTime
  })

  const [finishTime, setFinishTime] = useState(() => {
    const currentTime = new Date()
    currentTime.setHours(12) // Establece la hora (05:00 PM)
    currentTime.setMinutes(0) // Establece los minutos
    return currentTime
  })

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

    // Limpiar el WebSocket al desmontar el componente
    return () => {
      console.log('Conexión cerrada')
      ws.close()
    }
  }, [userId, messages])

  const sendMessage = (valor: string) => {
    if (ws && targetId) {
      // Enviar el mensaje junto con el ID destino
      console.log('input value: ', inputValue)
      ws.send(
        JSON.stringify({
          id: userId,
          to: targetId,
          message: valor,
          startHour: startTime.toLocaleTimeString([], {
            hour: '2-digit',
            hour12: false,
          }),
          startMinute: startTime.toLocaleTimeString([], { minute: '2-digit' }),
          finishHour: finishTime.toLocaleTimeString([], {
            hour: '2-digit',
            hour12: false,
          }),
          finishMinute: finishTime.toLocaleTimeString([], {
            minute: '2-digit',
          }),
        })
      )
      setInputValue('')
    }
  }

  // estado para el switch component
  const [isOnOff, setIsOnOff] = useState(false)
  ws.onmessage = (event) => {
    const message = event.data
    const parsedMessage = JSON.parse(message)
    console.log('Parsed message:', parsedMessage)
    setMessages((prevMessages) => [...prevMessages, parsedMessage])
    console.log(parsedMessage.message)
    if (parsedMessage.message === '0') {
      setIsOnOff(false)
    } else {
      setIsOnOff(true)
    }
  }

  const handleToggle = (isOn: boolean) => {
    console.log()
    var numero
    console.log('Switch está:', isOn ? 'Encendido' : 'Apagado')
    if (isOn) {
      numero = '0'
    } else {
      numero = '180'
    }
    sendMessage(numero)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#88D498', dark: '#88D498' }}
      headerComponent={
        <View style={styles.headerComponent}>
          <ThemedText style={styles.headerText}>Agua total gastada</ThemedText>
          <ThemedText style={styles.headerNumber}>421,567lts</ThemedText>
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={{ color: '#575757' }} type='title'>
          Mis Huertos
        </ThemedText>
      </ThemedView>
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText>Write your message!</ThemedText>
        <SafeAreaView>
          <TextInput style={styles.input} value={userId} onChangeText={(text) => setUserId(text)} placeholder='Tu id'/>
          <TextInput style={styles.input} value={targetId} onChangeText={(text) => setTargetId(text)} placeholder='ID del destinatario'/>
          <TextInput style={styles.input} value={inputValue} onChangeText={(text) => setInputValue(text)} placeholder='Mensaje'/>

          <ThemedView style={styles.switchButton}>
            <SwitchButton onToggle={handleToggle} />
          </ThemedView>
        </SafeAreaView>
        <View>
          {messages.map((message, index) => (
            <ThemedText key={index}>{message.message}</ThemedText>
          ))}
        </View>
        <View>
          <ThemedView style={styles.timePickerContainer}>
            <TimePicker time={startTime} setTime={setStartTime} title='Inicio' color='rgba(164, 222, 159, 0.71)' />
            <TimePicker time={finishTime} setTime={setFinishTime} title='Final' color='rgba(110, 192, 132, 0.56)' /> 
          </ThemedView>
          <TouchableOpacity onPress={() => sendMessage('180')} style={styles.button}>
            <ThemedText style={styles.buttonText}>Send</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView> */}

      {/* Items de los huertos */}
      <ThemedView style={{ gap: 16 }}>
        <GardenItem gardenName='Huerto Uno' background='#88D498' />
        <GardenItem gardenName='Huerto Dos' background='#A4DE9F' />
        <GardenItem gardenName='Huerto Tres' background='#A4DE9F' />
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerComponent: {
    height: 210,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 32,
  },
  headerText: {
    bottom: -52,
    color: '#ffffff',
  },
  headerNumber: {
    lineHeight: 52,
    fontSize: 40,
    bottom: -48,
    fontWeight: '700',
    color: '#ffffff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    color: '#575757',
  },
  stepContainer: {
    marginBottom: 16,
  },
  reactLogo: {
    height: 400,
    width: 240,
    position: 'absolute',
    top: -8,
    bottom: 0,
    left: 0,
    transform: [{ rotate: '70deg' }],
  },
  input: {
    marginTop: 16,
    height: 50, // Altura del input
    borderColor: '#ccc', // Color del borde en modo claro
    borderWidth: 1, // Borde más delgado
    borderRadius: 30, // Bordes redondeados
    paddingHorizontal: 15,
    color: '#333', // Texto en color oscuro para mejor legibilidad
    backgroundColor: '#fff', // Fondo blanco
    fontSize: 16, // Tamaño de fuente
  },
  button: {
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: '#4CA64C', // Color del botón primario
    paddingVertical: 15, // Espacio vertical
    paddingHorizontal: 20, // Espacio horizontal
    borderRadius: 30, // Bordes redondeados
    elevation: 3, // Sombra para dar profundidad
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18, // Tamaño de texto más grande
    fontWeight: 'bold', // Texto en negrita
  },
  switchButton: {
    // top: 18
  },
  timePickerContainer: {
    top: 12,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
})

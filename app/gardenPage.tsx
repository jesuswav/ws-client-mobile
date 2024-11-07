import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useRouter } from 'expo-router'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'

const GardenPage: React.FC = () => {
  const { itemId, itemTitle } = useLocalSearchParams() // Obtiene los parámetros pasados

  const router = useRouter()
  const handlePress = () => {
    // Navega a la pantalla de detalles y pasa los parámetros como query string
    router.push({
      pathname: '/scheduleForm',
      params: { itemId: itemId, itemTitle: itemTitle },
    })
  }

  const handleGoBack = () => {
    router.back() // Vuelve a la pantalla anterior
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
      <View style={styles.container}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>
        <Text style={styles.text}>ID del Item: {itemId}</Text>
        <Text style={styles.text}>Título del Item: {itemTitle}</Text>
        <TouchableOpacity onPress={handlePress}>
          <View>
            <Text>{itemTitle}</Text>
            <Text>HHolaaaaaaa</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  // header styles
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
  // page and container styles
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#28a745', // Verde principal
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 62,
    left: 16,
    backgroundColor: '#28a745', // Fondo del botón
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#ffffff', // Texto blanco
    fontSize: 16,
  },
})

export default GardenPage

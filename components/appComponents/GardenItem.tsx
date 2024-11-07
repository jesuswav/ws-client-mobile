import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

interface ItemProps {
  title: string
  id: string
}

interface gardenItemProps {
  gardenName: string
}

const data: ItemProps[] = [
  { id: '1', title: 'Huerto 1' },
  { id: '2', title: 'Huerto 2' },
  { id: '3', title: 'Huerto 3' },
  { id: '4', title: 'Huerto 4' },
]

const GardenItem: React.FC<gardenItemProps> = ({ gardenName }) => {
  const router = useRouter()

  const handlePress = () => {
    // Navega a la pantalla de detalles pasando el arreglo completo en JSON
    router.push({
      pathname: '/gardenPage',
      params: { itemId: 'hola', itemTitle: 'Huerto Uno' },
    })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <View style={styles.itemPicture}></View>
        <Text style={styles.title}>{gardenName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 18,
    alignItems: 'center',
    backgroundColor: '#28a745', // Verde principal
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 18,
  },
  itemPicture: {
    display: 'flex',
    height: 46,
    width: 46,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff', // Texto blanco
    textAlign: 'center',
  },
})

export default GardenItem

import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, SafeAreaView, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ProfileCard from '@/components/ProfileCard';
import ContentCard from '@/components/ContendCard';
import SliderComponent from '@/components/SliderComponent';
import SwitchComponent from '@/components/SwitchComponent';
import SearchBar from '@/components/SearchBar';
import Button from '@/components/Button';
import HorizontalSlider from '@/components/HorizontalSlider';

export default function TabTwoScreen() {

  const handleButtonPress = () => {
    console.log('Boton presionado.')
  }

  const imprimir = (data: boolean) => {
    if (data) {
      console.log('Apagado')
    } else {
      console.log('Encendido')
    }
  }
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#88D498', dark: '#88D498' }}
      headerComponent={(
        <View style={{ height: 250, justifyContent: 'center', alignItems: 'center' }}>
          <ThemedText style={{ fontSize: 24, color: '#fff' }}>Componente personalizado en la cabecera</ThemedText>
        </View>
      )}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Components</ThemedText>
      </ThemedView>
      {/* Profile Card */}
      <ThemedView>
        <ProfileCard />
      </ThemedView>
      {/* Contend Card */}
      <ThemedView>
        <ContentCard />
      </ThemedView>
      {/* Slider component */}
      <ThemedView>
        <SliderComponent />
      </ThemedView>
      {/* Switch component */}
      <ThemedView>
        <SwitchComponent sendDataToParend={imprimir} onOff={false} />
      </ThemedView>
      {/* Search bar */}
      <ThemedView>
        <SearchBar />
      </ThemedView>
      {/* Diferentes tipos de botones */}
      <SafeAreaView style={styles.buttonContainer}>
        <Button title="Botón Primario" onPress={handleButtonPress} />
        <Button title="Botón Secundario" onPress={handleButtonPress} type="secondary" />
        <Button title="Botón de Alerta" onPress={handleButtonPress} type="alert" />
        <Button title="Botón Deshabilitado" onPress={() => {}} type="disabled" />
        <Button title="Botón de Éxito" onPress={handleButtonPress} type="success" />
      </SafeAreaView>
      <ThemedView>
        <ThemedText style={styles.horizontalContainer}>Huertos:</ThemedText>
        <HorizontalSlider />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  sliderContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  horizontalContainer: {
    marginLeft: 10,
    fontSize: 20,
    color: '#575757',
    fontWeight: '600',
  }
});

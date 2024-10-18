import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, SafeAreaView } from 'react-native';

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

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
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
        <SwitchComponent />
      </ThemedView>
      {/* Search bar */}
      <ThemedView>
        <SearchBar />
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
});

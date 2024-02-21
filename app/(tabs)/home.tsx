import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground source={require('@/assets/images/image.png')} style={styles.background}>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TouchableOpacity>
            <Image source={require('@/assets/images/download.jpg')} style={styles.pfp}></Image>
          </TouchableOpacity>
          <View style={{ flexDirection: 'column', paddingTop: 10 }}>
            <Text style={styles.title}>Hello Ice Spice</Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
              <Ionicons name='location' size={24}></Ionicons>
              <Text>Virar, India</Text>
            </View>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchBtn}>
            <Text>LOOK FOR TEMPLES</Text>
            <Ionicons name='search' size={24}></Ionicons>
          </TouchableOpacity>
          <View style={styles.whiteBox}>

          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchContainer: {
    width:width,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60, // Reduce the paddingTop here to reduce the gap
    paddingHorizontal: 15,
  },
  searchBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: width - 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    elevation: 2,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  whiteBox: {
    width: width,
    height: height, // Adjust height as needed
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 40, // Adjust spacing as needed
    shadowColor: '#000',
    shadowOpacity: 0.12,
    elevation: 2,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  pfp: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#808080',
    marginTop: 20,
    marginLeft: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Index;

import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const {height, width:SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  const [location, setLocation]=useState();
  const [ok,setOk]=useState(true);
  const ask=async()=>{
    const permission=await Location.requestForegroundPermissionsAsync();
    console.log(permission);
  }
  useEffect(()=>{
    ask();
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled horizontal contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'orange',
  },
  city:{
    flex:1.2,
    justifyContent:'center',
    alignItems:'center'
  },
  cityName:{
    fontSize:68,
    fontWeight:"500",
  },
  weather:{
    
  },
  day:{
    width:SCREEN_WIDTH,
    alignItems:'center',
  },
  temp:{
    marginTop:50,
    fontSize:178,
  },
  description:{
    marginTop:-30,
    fontSize:60,
  },
})
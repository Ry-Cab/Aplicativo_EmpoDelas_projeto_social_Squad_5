import react, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';

//Importando as views da aplicação
import Home from './views/Home/Home';
import Sobre from './views/sobre/sobre';
import Contato from './views/contato/contato';
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function MyTabs() {
  useEffect(() => {
    Font.loadAsync({
      'playlist-script': require('./assets/fonts/playlist-script.otf'),
      'questrial': require('./assets/fonts/questrial.ttf'),
    })
}, [])
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{
      backgroundColor: "#FFDE59", height: 70, paddingBottom: 10}, headerStyle:{ backgroundColor: "#FFDE59"}, tabBarActiveTintColor:'black'}}>
      
      <Tab.Screen 
      name="Quem somos?" 
      component={Sobre} 
      options={{
        tabBarIcon: ({size, color}) => (
          <MaterialIcons name="contact-support" size={size} color={color} />          

          )
      }}
      />

      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="home" size={size} color={color}/>
          )
      }}
      />

      <Tab.Screen 
      name="Contato" 
      component={Contato}
      options={{
        tabBarIcon: ({size, color}) => (
<MaterialIcons name="perm-contact-cal" size={size} color={color} />
          )
      }}
      />
    
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />  
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
}



//Configuração globais de posicionamento da tela 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',    
    backgroundColor: '#fff',
  },
});


//App.js concentra todas as views da aplicação

/*export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}*/
import react, {useEffect} from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from 'expo-font';

//Logo da aplicação para ser usada em outros componentes
export default function Logo(props){
    useEffect(() => {
        Font.loadAsync({
          'playlist-script': require('../../assets/fonts/playlist-script.otf'),
          'questrial': require('../../assets/fonts/questrial.ttf'),
        })
    }, [])
    return(
        <Text style={style_logo.text}>{props.titulo}</Text>
    );
}

//Definindo estilo da logo
const style_logo = StyleSheet.create({
    text:{
        margin:10,
        fontSize: 50,
        fontFamily: "playlist-script",
        textAlign: "center"
    }
})
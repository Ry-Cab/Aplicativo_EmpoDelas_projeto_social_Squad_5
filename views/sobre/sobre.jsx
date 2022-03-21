import react, {useEffect} from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import Logo from "../../components/logo/logo";
import Botao from "../../components/botao/botao";
import { MaterialIcons } from '@expo/vector-icons'; 
import * as Font from 'expo-font';

//Tela inicial da aplicação
export default function Sobre(){
    useEffect(() => {
        Font.loadAsync({
          'playlist-script': require('../../assets/fonts/playlist-script.otf'),
          'questrial': require('../../assets/fonts/questrial.ttf'),
        })
    }, [])
    return(
    <View style={style_sobre.container}>
           <Logo titulo="EmpoDelas"></Logo>
           <MaterialIcons name="shopping-bag" size={34} color="black" />
            <Text style={style_sobre.text_paragraph}>Criamos o aplicativo "EmpoDelas" com o intuito de gerar uma rede de apoio entre as mulheres do bairro de Três Carneiros, Ibura - Recife/PE (empreendedoras ou não), para que elas possam divulgar seus produtos e serviços, facilitando a movimentação do comércio e gerando novas oportunidades para outras mulheres que estão sem fonte de renda no momento atual.</Text>
            <Text style={style_sobre.text_min}>Procure por produtos e seviços por aqui ou</Text>
            <Button title="Acesse o nosso site"></Button>
        </View>
        
    );
}

const style_sobre = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        textAlign: "center",
        fontSize: 20,
        margin: 10
    },
    text_paragraph:{
        textAlign: "justify",
        fontSize:20,
        margin:10,
        fontFamily: 'questrial'
    },
    text_min:{
     fontFamily: 'questrial',
     margin: 20,
     fontSize: 15
    },
    image:{
        width: 200,
        height: 200
    }
})
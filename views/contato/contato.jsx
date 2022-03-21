import react, {useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import Logo from "../../components/logo/logo";



export default function Contato(){
    return(
        <View style={style.container}>
        <Logo titulo="Fale Conosco"></Logo>
        <View style={style.container_inside}>
            <MaterialIcons name="perm-contact-cal" size={100} color="black" />
            <Text style={style.text_p}>Clique abaixo para acessar o formulário!</Text>
            <Button title="Clique aqui"></Button>
        </View>

        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        textAlign: "left",
        margin: 10
    },
    text_p:{
        fontFamily: 'questrial',
        textAlign: "left",
        fontSize: 40,
        marginBottom: 20
    },
    container_inside:{
        marginTop: 50
    }
})
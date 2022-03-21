import react from "react";
import { Button, StyleSheet } from "react-native";

//Botão global da aplicação
export default function Botao(props){
    return(

        <Button title={props.titulo}></Button>
    );
}

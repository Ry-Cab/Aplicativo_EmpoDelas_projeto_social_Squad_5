import React, { Component, useState, useEffect} from "react";
import { View, Text, FlatList, StyleSheet, Image, Button } from "react-native";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";
import Logo from "../../components/logo/logo";


export default function Home(){
    const [produtoServico, setProdutoServico] = useState([])
    useEffect(() =>{
        fetch("https://api-empodelas.herokuapp.com/produto_servico/",{
        method: 'GET',
        headers:{
         'Accept': 'application/json'
        }

        }).then(response => response.json())
        .then(data => {
            setProdutoServico(data)
        })
    }, [])
    

    return(
        <View style={style_home.container}>
            <Logo titulo="Produtos e Serviços"></Logo>
            <FlatList data={produtoServico} style={style_home.flatlist}
            renderItem={({item}) =>{ 
                return(
                    <View style={style_home.card} keyExtractor={item.id_produtoServico}>
                    <Text style={style_home.text}>{item.tipo_produtoServico}</Text>
                        <Image style={style_home.image} source={{uri: item.imagemURL_produtoServico}}></Image>
                      <Text style={style_home.text}>{item.nome_produtoServico}</Text> 
                      <Text style={style_home.text}>R${item.preco_produtoServico}</Text> 
                      <Button title="Ver mais"></Button>
                    </View>
                );
            }}>

            </FlatList>
            
        </View>
    )
}

const style_home = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center' 
    },
    title:{
        fontSize:30,
        textAlign: "center"
    },
    text:{
        textAlign: "center",
        fontSize: 20
    },
    card:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFDE59",
        textAlign: "center",
        color: "white",
        margin: 15,
        padding: 35,
        borderRadius: 20    
    },
    flatlist:{
        marginBottom: 50
    },
    image:{
        width:200,
        height:200
    }
})
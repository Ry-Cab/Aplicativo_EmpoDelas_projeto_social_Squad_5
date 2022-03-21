import axios from "axios";

const base = axios.create({
    baseURL: "http://localhost:8080/produto_servico"
})

export default async function getProdutoServico(){
    try{
        const response = await base.get("/")
        return response
     }catch(error){
         alert(error.toString())
 
     }
}

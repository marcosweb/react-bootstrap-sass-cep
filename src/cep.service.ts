import axios from "axios";
import { IApiData } from "./cep.interface";


export function getCep(cep: string):Promise<IApiData> {
    const url: string = `http://viacep.com.br/ws/${cep}/json/`;
    return axios.get(url);
}

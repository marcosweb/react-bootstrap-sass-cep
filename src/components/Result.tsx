import { Card, ListGroup } from 'react-bootstrap';
import ReactLoading from 'react-loading';

import { ICep } from "../cep.interface";

import './Result.sass';

interface IBoxResult {
    data: ICep | null,
    loading: boolean
}

function Result({ data, loading }: IBoxResult) {

    const result = data?.erro 
        ? 
        <ListGroup.Item>Endereço não encontrado</ListGroup.Item> 
        : 
        <>
            <ListGroup.Item> {data?.logradouro} </ListGroup.Item>
            <ListGroup.Item> Bairro: {data?.bairro}, {data?.localidade} - {data?.uf} </ListGroup.Item>
            <ListGroup.Item> {data?.cep} </ListGroup.Item>
            {data?.complemento &&<ListGroup.Item> {data?.complemento} </ListGroup.Item>}
        </>
    
    if (!data) return <></>
    
    const objLoading = <div className='loading-container'>
                           <ReactLoading type="bars" color="#bbb" />
                       </div>
    return (
        <Card className="result mt-3">
            <ListGroup variant="flush">
                {loading ? objLoading : result}
            </ListGroup>
        </Card>
    );
}

export default Result;

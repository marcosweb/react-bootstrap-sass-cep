export interface ICep {
    bairro: string,
    cep: string,
    complemento:  string,
    ddd: string,
    gia: string,
    ibge: string,
    localidade: string,
    logradouro: string,
    siafi: string,
    uf: string,
    erro?: boolean
}

export interface IApiData {
    data:  ICep,
    status: number
    statusText: string
}

export interface IError {
    message: string
}

export interface IApiError {
    error: boolean
}
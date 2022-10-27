import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

import { getCep } from './cep.service';
import { ICep } from './cep.interface';

import Result from './components/Result';
import CepForm from './components/CepForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';

function App() {
    const [data, setData] = useState<ICep | null>(null);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    const variant='danger';

    function findCep(cep: string): void {

        if (!/^[0-9]{5}[0-9]{3}$/.test(cep)) {
            setError('Cep inválido.');
            return;
        }

        setLoading(true);

        getCep(cep)
        .then(resp => {
            setData(resp.data);
            setTimeout(() => setLoading(false), 2000);
        })
        .catch(error => setError(error.message))
    }

    useEffect(() => console.log(data), [data])

    useEffect(() => {
        if (error?.length) {
            setTimeout(() => setError(''), 5000);
            setData(null);
        }
    }, [error])

    function closeError():void {
        setError('');
    }

    return (
        <div className="app">
            <div className='form-cep'>
                <CepForm findCep={findCep} />
                <Result data={data} loading={loading} />

                {error && 
                <Alert key={variant} variant={variant} onClose={() => closeError()} dismissible>
                    {error}
                </Alert>}
            </div>
        </div>
    );
}

export default App;

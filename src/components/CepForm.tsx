import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

import './CepForm.sass';

interface IFindCep {
    findCep: (cep: string) => void
}

function CepForm({ findCep }: IFindCep) {
    const cep = useRef<HTMLInputElement | null>(null);

    function handleClick(e: React.FormEvent<HTMLButtonElement>) {
        findCep(cep?.current?.value || '')
    }
    
    return (
        <div className='cep-form-container'>
            <Form className='m-4'>
                <Form.Group className="mb-3" controlId="formCep">
                    <Form.Label>Informe o CEP</Form.Label>
                    <Form.Control ref={cep} placeholder="000000-000" maxLength={8} />
                </Form.Group>
                <Button variant="primary" className='btn' onClick={handleClick}> Buscar </Button>
            </Form>
        </div>
    );
}

export default CepForm;

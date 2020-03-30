import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../logo.svg';
import api from '../../services/api';

export default function NewInc(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        }
        try{
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId,
                }
            })
            history.push('/profile');
        }
        catch{
            alert('Erro');
        }
    }

    return(
        <div className="new-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BDHero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link to="/" className="back-link" >Voltar para Home</Link>
                </section>
                
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea placeholder="Descição"    value={description} onChange={e => setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={e => setValue(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../logo.svg'; 
import api from '../../services/api';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDelete(id) {
        try{
            await api.delete(`incidents/${id}`, {
            headers: {
                authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch(err){
            alert('Erro ao deletar');
        }
    }

    function handleLogout(){
       localStorage.clear();
       history.push('/');
    }


    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="BDHero" />
                <span>Bem vindo, {ongName}!</span>

                <Link className="button" to="/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}></button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={()=>{handleDelete(incidents.id)}}>
                             {/*Icon trash bin*/}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}



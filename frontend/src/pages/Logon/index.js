import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../Header';
import './styles.css';
import heroesImg from '../../heroes.png';
import logoImg from '../../logo.svg';
import api from '../../services/api';

export default function Logon(){
    const [counter, setCounter] = useState(0);

    function increment(){
    setCounter(counter + 1);
    }

    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try{
         const response = await api.post('sessions', { id }); 
         localStorage.setItem('ongid', id);
         localStorage.setItem('ongName', response.data.name);

         history.push('profile');
        }
        catch(err){
            alert("Não foi possível efetuar o login");
        }
    }

    return(
        <>
        <div>
            <Header title="page no">Contador: {counter}</Header>
            <button onClick={increment}>Increment</button>
        </div>
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BDHero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input type="text" placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link" >Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
        </>
    );
};
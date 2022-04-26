import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";
import { useState } from 'react';
import logoIMG from '../../assets/cl.png';

export const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    return(
        <LayoutComponents>
            <form className="login-form">
            
                <span className="login-form-title"> Criar Conta </span>

                <span className="login-form-title">
                <img src={logoIMG} alt="jp"/>
                </span>

                <div className='wrap-input'>
                <input className={name !== '' ? 'has-value input' : 'input'} type='text' value={name} onChange={e => setName(e.target.value)} />
                <span className='focus-input' data-placeholder='Nome'> </span>
                </div>

                <div className='wrap-input'>
                <input className={username!== '' ? 'has-value input' : 'input'} type='text' value={username} onChange={e => setUsername(e.target.value)} />
                <span className='focus-input' data-placeholder='Username'> </span>
                </div>

                <div className='wrap-input'>
                <input className={email !== '' ? 'has-value input' : 'input'} type='email' value={email} onChange={e => setEmail(e.target.value)} />
                <span className='focus-input' data-placeholder='Email'> </span>
                </div>

                <div className='wrap-input'>
                <input className={password !== '' ? 'has-value input' : 'input'} type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <span className='focus-input' data-placeholder='Password'> </span>

                </div>
                    <div className='container-login-form-btn'>
                    <button className='login-form-btn'> Login </button>
                </div>

                <div className='text-center'>
                <span className='text1'> Já possui conta? </span>
                <Link className='text2' to='/login'> Entrar. </Link>
                </div>

            </form>
        </LayoutComponents>
    );
}
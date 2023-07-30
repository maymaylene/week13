import React from 'react';

export default class Login extends React.Component {
    render(){
        return(
              <div className="card-body"><h3>Login Here</h3>
               <form>
                    <label>Email:</label>
                    <input className='form-control' type="email" placeholder='Email'></input>
                    <label>Pasword:</label>
                    <input className='form-control' type="password" placeholder='Password'></input>
                    <button className='btn btn-dark' type='submit'>Log in</button>
                </form>
            </div>           
        )

    }
}
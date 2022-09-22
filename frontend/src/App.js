import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import secret from './secret';

function App() {

  const params = `?${secret.response_type}&${secret.client_id}&${secret.redirect_uri}`
  

  useEffect(()=>{
    axios({
      method:'get',
      url: 'https://www.deviantart.com/oauth2/authorize' + params,
      headers:{
        'Access-Control-Allow-Origin': '*'
      },
    })
  })


  return (
    <div className="App">
      <h1>Welcome to Gallary</h1>
      <p>eat ass</p>
    </div>
  );
}

export default App;

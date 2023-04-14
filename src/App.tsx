import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import useApi from './hooks/useApi';
import { User } from './models/user.model';
import { useSnackbar } from './context/snackbar/snackbar.provider';

function App() {
  const { data, error, loading, request } = useApi<User[]>({ url: './MOCK_DATA.json', requestType: 'GET' });
  const snackbar = useSnackbar();

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    if (!data) return;
    snackbar.showSnackbar(data.length.toString(), 'success');
  }, [data]);

  useEffect(() => {
    if (!error) return;
    snackbar.showSnackbar(error || 'error!', 'error');
  }, [error]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

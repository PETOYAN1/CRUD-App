import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/styles.scss'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import UserReducer from './reducer/UserReducer';


const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();

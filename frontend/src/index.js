import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebProvider, metamaskWallet } from '@thirdweb-dev/react'
import { Sepolia } from '@thirdweb-dev/chains'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ThirdwebProvider activeChain={Sepolia} supportedWallets={[metamaskWallet()]} >
          <App />
        </ThirdwebProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

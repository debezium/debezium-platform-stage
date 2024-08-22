import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import "reactflow/dist/style.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css'

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
  </React.StrictMode>,
)

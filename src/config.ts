/* eslint-disable @typescript-eslint/no-explicit-any */
export const getBackendUrl = () => {
    if ((window as any).__ENV__ && (window as any).__ENV__.VITE_BACKEND_BASE_URL) {
      return (window as any).__ENV__.VITE_BACKEND_BASE_URL;
    }
  
    // Fallback to build-time env variable
    return import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8080';
  };
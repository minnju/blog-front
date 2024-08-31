import { create } from 'zustand';

interface ApiStore {
    isAuthorized: boolean;
    isLoading: boolean;
    error: string;
    setIsAuthorized: (isAuthorized: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string) => void;
}

const useApiStore = create<ApiStore>((set) => ({
    isAuthorized: false,
    isLoading: false,
    error: '',
    setIsAuthorized: (isAuthorized: boolean) => set({ isAuthorized }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    setError: (error: string) => set({ error }),
}));

export const getStoreMethods = () => useApiStore.getState();
export default useApiStore;

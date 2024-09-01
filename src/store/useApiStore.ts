import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApiStore {
    isAuthorized: boolean;
    isLoading: boolean;
    error: string;
    setIsAuthorized: (isAuthorized: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string) => void;
}

const useApiStore = create<ApiStore>(
    persist(
        (set) => ({
            isAuthorized: false,
            isLoading: false,
            error: '',
            setIsAuthorized: (isAuthorized: boolean) => set({ isAuthorized }),
            setIsLoading: (isLoading: boolean) => set({ isLoading }),
            setError: (error: string) => set({ error }),
        }),
        {
            name: 'api-storage',
            getStorage: () => sessionStorage, // sessionStorage를 사용하도록 지정
        }
    ) as StateCreator<ApiStore>
);

export const getStoreMethods = () => useApiStore.getState();
export default useApiStore;

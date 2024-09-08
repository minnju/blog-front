import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApiStore {
    isAuthorized: boolean;
    isLoading: boolean;
    error: string;
    token: string | null; // token이 초기에는 null일 수 있음
    setToken: (token: string) => void;
    clearToken: () => void;
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
            token: null,
            setToken: (token: string) => set({ token }),
            clearToken: () => set({ token: null }),
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

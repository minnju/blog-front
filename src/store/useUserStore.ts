import { User } from '@/interface/userInfo';
import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
    userInfo: User | null; // userInfo가 초기에는 null일 수 있음
    token: string | null; // token이 초기에는 null일 수 있음
    setToken: (token: string) => void;
    clearToken: () => void;
}

const useUserStore = create<UserStore>(
    persist(
        (set) => ({
            userInfo: null, // 초기값 설정
            token: null,
            setToken: (token: string) => set({ token }),
            clearToken: () => set({ token: null }),
        }),
        {
            name: 'jwt-storage', // 저장소 이름
            getStorage: () => sessionStorage, // sessionStorage 사용
        }
    ) as StateCreator<UserStore>
);

export const getUserStoreMethods = () => useUserStore.getState();
export default useUserStore;

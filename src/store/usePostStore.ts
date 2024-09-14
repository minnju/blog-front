import { Post } from '@/interface/postInfo';
import { create } from 'zustand';

interface PostStore {
    posts: Post[];
    mainPost: Post[];
    setMainPost: (post: Post[]) => void;
    setPosts: (posts: Post[]) => void;
    addPost: (post: Post) => void;
    addMainPost: (post: Post) => void;
    updatePost: (postId: number, updatedPost: Partial<Post>) => void;
    removePost: (postId: number) => void;
}

const usePostStore = create<PostStore>((set) => ({
    posts: [],
    mainPost: [],
    setPosts: (postList: Post[]) => set({ posts: postList }),
    setMainPost: (post: Post[]) => set({ mainPost: post }),
    addPost: (post: Post) =>
        set((state) => ({
            posts: [...state.posts, post],
        })),
    addMainPost: (post: Post) =>
        set((state) => ({
            mainPost: [...state.mainPost, post],
        })),
    updatePost: (postId: number, updatedPost: Partial<Post>) =>
        set((state) => ({
            posts: state.posts.map((post) => (post.postId === postId ? { ...post, ...updatedPost } : post)),
        })),
    removePost: (postId: number) =>
        set((state) => ({
            posts: state.posts.filter((post) => post.postId !== postId),
        })),
}));

export const getUserStoreMethods = () => usePostStore.getState();
export default usePostStore;

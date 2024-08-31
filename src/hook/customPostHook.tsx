// src/hooks/usePostList.ts
import { useState, useEffect } from 'react';
import usePostStore from '../store/usePostStore';
import { get } from '../util/restUtil'; // REST API 호출 유틸
import { Post, PostReq } from '@/interface/postInfo';
import { getPostList } from '../api/postApi';

export const usePostList = (reqInfo: PostReq) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { setPosts, setMainPost } = usePostStore();

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const postList: Post[] = await getPostList(reqInfo);
                setPosts(postList);
                setMainPost(postList);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError('An error occurred while fetching posts.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [reqInfo]);

    return { loading, error };
};

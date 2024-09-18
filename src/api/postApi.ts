import { ContentType } from '../enum/apiEnum';
import { User } from '@/interface/userInfo';
import { DELETE, get, post } from '../util/restUtil';
import { Post, PostReq } from '@/interface/postInfo';
import getPostStoreMethod, { getUserStoreMethods } from '../store/usePostStore';
import { useState } from 'react';
import { getApiStoreMethods } from '../store/useApiStore';
import { ApiResponse } from '@/interface/commonInterface';

const { setIsAuthorized, setToken, setError, setIsLoading } = getApiStoreMethods();

export const savePost = (postInfo: Post): Promise<number | Error> => {
    const { addMainPost } = getUserStoreMethods();

    return post<Post>('/post/save', postInfo, ContentType.FORM_URLENCODED)
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            addMainPost(postInfo);
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
            return apiResponse.statusCode;
        })
        .catch((error) => {
            return error;
        });
};

export const deletePost = async (postId: number) => {
    DELETE<number>('/post/delete', { postId: postId })
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export const getPostList = async (reqInfo: PostReq): Promise<Post[]> => {
    try {
        const apiResponse = await get<Post[]>('/post/list', reqInfo);
        return apiResponse.data || [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

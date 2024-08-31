import { ContentType } from '../enum/apiEnum';
import { User } from '@/interface/userInfo';
import { DELETE, get, post } from '../util/restUtil';
import { Post, PostReq } from '@/interface/postInfo';

export const savePost = (postInfo: Post) => {
    post<Post>('/post/save', postInfo, ContentType.FORM_URLENCODED)
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
        })
        .catch((error) => {
            console.error('Error:', error);
            window.location.href = '';
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

export const postList = async (reqInfo: PostReq) => {
    get<PostReq>('/post/list', reqInfo)
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

import { ContentType } from '../enum/apiEnum';
import { User } from '@/interface/userInfo';
import { post } from '../util/restUtil';

export const login = (userInfo: User) => {
    post<User>('/login', userInfo, ContentType.FORM_URLENCODED)
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

export const registerMember = async (userInfo: User) => {
    post<User>('/signup', userInfo, ContentType.FORM_URLENCODED)
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

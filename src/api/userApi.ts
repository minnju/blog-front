import { ContentType } from '../enum/apiEnum';
import { User } from '@/interface/userInfo';
import { post } from '../util/restUtil';
import { getStoreMethods } from '../store/useApiStore';
import getUserStoreMethods from '../store/useUserStore';

export const login = async (userInfo: User) => {
    const { setIsAuthorized, setToken, setError, setIsLoading } = getStoreMethods();
    //const { setToken } = getUserStoreMethods();
    try {
        const apiResponse = await post<User>('/login', userInfo, ContentType.FORM_URLENCODED);

        // Handle successful response
        console.log(apiResponse.statusCode); // 상태 코드 출력
        console.log(apiResponse.data); // 실제 데이터 출력

        if (apiResponse.statusCode === 200) {
            // Check for success status code
            setIsAuthorized(true); // Set authorized to true
            if (apiResponse.data) {
                const userInfo: User = apiResponse.data;
                console.log('userInfo', userInfo);
                if (userInfo.token) {
                    console.log('token', userInfo.token);
                    setIsAuthorized(true);
                    setToken(userInfo.token);
                }
            }
        } else {
            // Handle unsuccessful response if needed
            setError('Login failed. Please try again.'); // Update error state
        }
    } catch (error) {
        console.error('Error:', error);
        setError('An error occurred during login.'); // Update error state
    } finally {
        setIsLoading(false); // Set loading to false after request completes
    }
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

export const logout = () => {
    const { setIsAuthorized, clearToken, setError, setIsLoading } = getStoreMethods();
    //const { clearToken } = getUserStoreMethods();
    post<User>('/logout')
        .then((apiResponse) => {
            // apiResponse는 ApiResponse<User> 타입
            console.log(apiResponse.statusCode); // 상태 코드 출력
            console.log(apiResponse.data); // 실제 데이터 출력
            setIsAuthorized(false);
            clearToken();
        })
        .catch((error) => {
            console.error('Error:', error);
            window.location.href = '';
        });
};

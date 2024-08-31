import { ContentType } from '../enum/apiEnum';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ApiResponse } from '@/interface/commonInterface';

// 기본 설정
const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL, // 기본 URL 설정
    timeout: 100000, // 요청 타임아웃 설정
    withCredentials: true, // 쿠키를 포함하여 요청을 보냅니다.
});

// GET 요청을 처리하는 함수
export const get = async <T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await instance.get(url, { params });
        const res: ApiResponse<T> = {
            statusCode: response.status,
            data: response.data,
        };
        return res;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // axios에서 발생한 error
            handleError(error);
        }
        const apiErrorResponse: ApiResponse<T> = {
            statusCode: 500,
            //data: null,
            message: 'An unexpected error occurred.',
        };
        return apiErrorResponse;
    }
};

// POST 요청을 처리하는 함수
export const post = <T>(url: string, data?: Record<string, any>, type?: ContentType): Promise<ApiResponse<T>> => {
    const contentType = type || ContentType.JSON;

    return instance
        .post<T>(url, data, {
            headers: {
                'Content-Type': contentType,
            },
            withCredentials: true,
        })
        .then((response: AxiosResponse<T>) => {
            const res: ApiResponse<T> = {
                statusCode: response.status,
                data: response.data,
            };
            return res;
        })
        .catch((error) => {
            if (axios.isAxiosError(error)) {
                // axios에서 발생한 error
                handleError(error);
            }
            // 에러를 다시 던져서 호출한 쪽에서 처리할 수 있도록 함
            throw error;
        });
};

// DELETE 요청을 처리하는 함수
export const DELETE = async <T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await instance.delete(url, { params });
        const res: ApiResponse<T> = {
            statusCode: response.status,
            data: response.data,
        };
        return res;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // axios에서 발생한 error
            handleError(error);
        }
        const apiErrorResponse: ApiResponse<T> = {
            statusCode: 500,
            //data: null,
            message: 'An unexpected error occurred.',
        };
        return apiErrorResponse;
    }
};

// 에러 핸들러
const handleError = (error: AxiosError) => {
    if (error.response) {
        // 서버가 상태 코드로 응답한 경우
        alert('Server Error:' + error.response.data);
    } else if (error.request) {
        // 요청이 만들어졌지만 응답이 없는 경우
        alert('Network Error:' + error.request);
    } else {
        // 기타 오류
        alert('Error:' + error.message);
    }
};

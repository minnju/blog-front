// 인터페이스: API 응답의 기본 구조를 정의
export interface ApiResponse<T> {
    statusCode: number; // HTTP 상태 코드
    data?: T; // 응답 데이터
    message?: string; // 선택적인 메시지
}

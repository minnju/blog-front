export function encodeBase64(str: string): string {
    // 문자열을 Uint8Array로 변환
    const encoder = new TextEncoder();
    const data = encoder.encode(str);

    // Uint8Array를 Base64로 인코딩
    let binaryString = '';
    for (let i = 0; i < data.length; i++) {
        binaryString += String.fromCharCode(data[i]);
    }

    return btoa(binaryString);
}

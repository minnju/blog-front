export interface Post {
    postId?: number;
    title?: string;
    description: string;
    content: string;
    imageUrl?: string;
    authorNm: string;
    isMain?: boolean;
}

export interface PostReq {
    postId?: number;
}

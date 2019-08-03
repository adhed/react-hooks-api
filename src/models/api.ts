import { IPost } from "./post";
import { IComment } from "./comment";

export interface FetchPostResponse {
    found: number;
    posts: IPost[];
}

export interface FetchCommentsResponse {
    found: number;
    comments: IComment[];
}
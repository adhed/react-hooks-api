import { IPost } from "./post";

export interface FetchPostResponse {
    found: number;
    posts: IPost[];
}
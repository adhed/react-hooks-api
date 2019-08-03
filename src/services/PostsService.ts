import { ApiService } from "./ApiService";
import { API_URL, POSTS_WEBSITE } from "../constants";
import { IPost, FetchPostResponse, FetchCommentsResponse } from "../models";
import { IComment } from "../models/comment";

export const PostsService = {
    async getPosts(limit: number): Promise<IPost[]> {
        const response: FetchPostResponse = await ApiService.makeApiCall<FetchPostResponse>(
            `${API_URL}/sites/${POSTS_WEBSITE}/posts/?number=${limit}`
        );
        return response.posts;
    },

    async getPostComments(postId: number): Promise<IComment[]> {
        const response: FetchCommentsResponse = await ApiService.makeApiCall<FetchCommentsResponse>(
            `${API_URL}/sites/${POSTS_WEBSITE}/posts/${postId}/replies/`
        );
        return response.comments;
    }
}
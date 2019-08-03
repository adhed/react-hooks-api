import { ApiService } from "./ApiService";
import { API_URL, POSTS_WEBSITE } from "../constants";
import { IPost, FetchPostResponse } from "../models";

export const PostsService = {
    async getPosts(limit: number): Promise<IPost[]> {
        const response: FetchPostResponse = await ApiService.makeApiCall<FetchPostResponse>(
            `${API_URL}/sites/${POSTS_WEBSITE}/posts/?number=${limit}`
        );
        return response.posts;
    }
}
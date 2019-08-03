import { IAuthor } from "./author";

export interface IComment {
    ID: string;
    author: IAuthor;
    date: string;
    content: string;
    raw_content: string;
    like_count: number;
}
import { IAuthor } from "./author";

export interface IPost {
    ID: number;
    date: string;
    author: IAuthor;
    title: string;
    excerpt: string;
    content: string;
    URL: string;
}

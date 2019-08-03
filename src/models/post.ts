export interface IPost {
    ID: number;
    date: Date;
    author: IPostAuthor;
    title: string;
    excerpt: string;
    content: string;
}

export interface IPostAuthor {
    ID: number,
    login: string,
    email: boolean,
    name: string,
    first_name: string,
    last_name: string,
    nice_name: string,
    avatar_URL: string,
}
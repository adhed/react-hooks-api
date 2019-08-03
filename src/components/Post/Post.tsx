
import React from 'react';
import { IPost } from '../../models';

export interface PostProps {
    data: IPost;
}

const Post: React.FC<PostProps> = (props: PostProps) => {

  return (
    <div className="post">
        <h2 className="post__headline">{ props.data.title }</h2>
        <span className="post__author">{ props.data.author.name }</span>
        <span className="post__date">{ props.data.date }</span>

        <div className="post__excerpt" dangerouslySetInnerHTML={{__html: props.data.excerpt}}></div>
    </div>
  );
}

export default Post;

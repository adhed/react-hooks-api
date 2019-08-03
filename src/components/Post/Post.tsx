
import React, { useEffect, useState } from 'react';
import { IPost } from '../../models';
import { formatDate } from '../../utils';
import { PostsService } from '../../services';
import { IComment } from '../../models/comment';
import { Comment } from '../Comment';
import { Loading } from '../Loading';

export interface PostProps {
    data: IPost;
    loadComments: boolean;
}

const Post: React.FC<PostProps> = (props: PostProps) => {

    const [comments, setComments] = useState<IComment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(() => {
        setIsLoading(true);

        if (props.loadComments) {
            PostsService.getPostComments(props.data.ID)
                .then((newComments: IComment[]) => {
                    setComments(newComments);
                    setIsLoading(false);
                })
        } else {
            setComments([]);
            setIsLoading(false);
        }

    }, [props.loadComments]);

  return (
    <div className="post">
        <h2 className="post__headline">{ props.data.title }</h2>
        <span className="post__author">{ props.data.author.name }</span>
        <span className="post__date">{ formatDate(props.data.date) }</span>

        <div className="post__excerpt" dangerouslySetInnerHTML={{__html: props.data.excerpt}}></div>
        <a className="post__more-link" href={props.data.URL} target="_blank">read more</a>
        
        { isLoading ? <Loading /> : <div className="comments">
            { comments.length ? <span className="comments__headline">Comments to this post:</span> : null }
            {comments.map((comment: IComment) => {
                return <Comment data={comment} key={comment.ID}></Comment>
            })}
        </div> }
        
    </div>
  );
}

export default Post;

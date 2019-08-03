import React from 'react';
import { IComment } from '../../models/comment';
import { formatDate } from '../../utils';

export interface CommentProps {
    data: IComment;
}

const Comment: React.FC<CommentProps> = (props: CommentProps) => {

  return (
    <div className="comment">
        <span className="comment__date">({ formatDate(props.data.date) })</span>
        <span className="comment__author"> { props.data.author.name } said: </span>
        <span className="comment__content">{ props.data.raw_content }</span>
    </div>
  );
}

export default Comment;

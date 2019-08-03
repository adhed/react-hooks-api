
import React, { useEffect, useState } from 'react';
import { PostsService } from '../../services';
import { IPost } from '../../models';
import Post from '../Post/Post';

export interface PostsListProps {
  postsToShow: number;
}

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {

  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    PostsService.getPosts(props.postsToShow)
      .then((newPosts: IPost[]) => setPosts(newPosts));
  }, [props.postsToShow]);

  return (
    <div className="list">
      {posts.map((post: IPost) => {
        return <Post key={post.ID} data={post}></Post>
      })}
    </div>
  );
}

export default PostsList;


import React, { useEffect, useState } from 'react';
import { PostsService } from '../../services';
import { IPost } from '../../models';
import Post from '../Post/Post';
import { Loading } from '../Loading';
import useDebounce from '../../hooks/debounce';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

export interface PostsListProps {
  postsToShow: number;
  areCommentsEnabled: boolean;
}

const PostsList: React.FC<PostsListProps> = (props: PostsListProps) => {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const debouncedPostsNumber = useDebounce(props.postsToShow, 500);

  useEffect(() => {
    setIsLoading(true);
    setError('');
  }, [props.postsToShow]);

  useEffect(() => {
    if (debouncedPostsNumber) {
      setIsLoading(true);
      PostsService.getPosts(props.postsToShow)
        .then((newPosts: IPost[]) => {
          setPosts(newPosts);
          setIsLoading(false);
        })
        .catch(() => {
          setError(`There's an error with the request. Type another number.`);
          setIsLoading(false);
        });
    }
  }, [debouncedPostsNumber]);

  return (
    isLoading ? <Loading /> :
  
    error ? <ErrorMsg msg="error" /> : 
    <div>
        <div className="list">
          {posts.map((post: IPost) => {
            return <Post key={post.ID} data={post} loadComments={props.areCommentsEnabled}></Post>
          })}
      </div>
    </div>
   
  );
}

export default PostsList;

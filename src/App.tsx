import React, { SyntheticEvent, ChangeEvent, useState, useEffect } from 'react';
import { PostsList } from './components';
import './App.css';
import { DEFAULT_NUMBER_OF_POSTS, MAX_NUMBER_OF_POSTS } from './constants';
import { CounterLabel } from './components/CounterLabel';
import useDebounce from './hooks/debounce';

const App: React.FC = () => {

  const [postsNumber, setPostsNumber] = useState<number>(DEFAULT_NUMBER_OF_POSTS);
  const [areCommentsEnabled, setCommentsEnabled] = useState<boolean>(false);

  const handleFormSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPostsNumber(parseInt(event.target.value));
  }

  const handleLoadCommentsClick = (): void => {
    setCommentsEnabled(!areCommentsEnabled);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleFormSubmit}>
        <input type="number" min={DEFAULT_NUMBER_OF_POSTS} max={MAX_NUMBER_OF_POSTS} value={postsNumber} name="counter" placeholder="Limit of posts" onChange={handleInputChange} className="form__input" />
        <button className="form__comments-button" onClick={handleLoadCommentsClick}>
          { areCommentsEnabled ? 'Hide comments' : 'Load comments' }
        </button>
      </form>
      
      <PostsList postsToShow={postsNumber} areCommentsEnabled={areCommentsEnabled} />
    </div>
  );
}

export default App;

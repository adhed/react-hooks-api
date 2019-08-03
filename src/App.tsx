import React, { useState } from 'react';
import { PostsList } from './components';
import { DEFAULT_NUMBER_OF_POSTS } from './constants';
import Controls from './components/Controls/Controls';

import './App.scss';

const App: React.FC = () => {

  const [postsNumber, setPostsNumber] = useState<number>(DEFAULT_NUMBER_OF_POSTS);
  const [areCommentsEnabled, setCommentsEnabled] = useState<boolean>(false);

  const handleInputChange = (value: number): void => {
    setPostsNumber(value);
    setCommentsEnabled(false);
  }

  const handleLoadCommentsClick = (): void => {
    setCommentsEnabled(!areCommentsEnabled);
  }

  return (
    <div className="container">
      <Controls areCommentsEnabled={areCommentsEnabled} postsNumber={postsNumber} onInputChange={handleInputChange} onLoadCommentsClick={handleLoadCommentsClick} />
      <PostsList postsToShow={postsNumber} areCommentsEnabled={areCommentsEnabled} />
    </div>
  );
}

export default App;

import React, { SyntheticEvent, ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {

  const [postsNumber, setPostsNumber] = useState(5);

  const handleFormSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPostsNumber(parseInt(event.target.value));
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="counter">Max. posts to fetch:</label>
        <input type="number" name="counter" onChange={handleInputChange} className="form__input" />
        <button type="submit">Load posts!</button>
      </form>

      <span>Number of posts to fetch: { postsNumber }</span>
    </div>
  );
}

export default App;

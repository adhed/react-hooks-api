import React, { SyntheticEvent, ChangeEvent } from 'react';
import { DEFAULT_NUMBER_OF_POSTS, MAX_NUMBER_OF_POSTS } from '../../constants';

interface ControlsProps {
    areCommentsEnabled: boolean;
    postsNumber: number;
    onLoadCommentsClick: () => void;
    onInputChange: (value: number) => void;
}

const Controls: React.FC<ControlsProps> = (props: ControlsProps) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.onInputChange(parseInt(event.target.value));
      }
    
    const handleLoadCommentsClick = (): void => {
        props.onLoadCommentsClick();
    }

    const handleFormSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
    }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
        <input type="number" min={DEFAULT_NUMBER_OF_POSTS} max={MAX_NUMBER_OF_POSTS} value={props.postsNumber} name="counter" placeholder="Limit of posts" onChange={handleInputChange} className="form__input" />
        <button className="form__comments-button" onClick={handleLoadCommentsClick}>
        { props.areCommentsEnabled ? 'Hide comments' : 'Load comments' }
        </button>
    </form>
  );
}

export default Controls;

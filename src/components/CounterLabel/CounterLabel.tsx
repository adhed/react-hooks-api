import React from 'react';

interface CounterLabelProps {
    number: number;
}

const CounterLabel: React.FC<CounterLabelProps> = (props: CounterLabelProps) => {

  return (
    <span className="counter-label">We're displaying { props.number } { props.number === 1 ? 'post' : 'posts' }.</span>
  );
}

export default CounterLabel;

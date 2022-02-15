import React, { useState } from 'react';
import './App.css';

export const possibleAnswers = [
  '',
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Most likely',
  'Outlook not so good',
  'Very doubtful'
];

const App: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event?.target.value);
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (input) {
      setIndex(Math.floor(Math.random() * (21) + 1));
      setInput('');
    }
  }

  const answer = possibleAnswers[index];

  return (
    <div className='App'>
      <h1>{'Ask magic 8-ball'}</h1>
      <input className='input' value={input} onChange={handleInputChange} />
      <button className='button' onClick={handleButtonClick}>{'Ask your question'}</button>
      <p className='answer'>{answer}</p>
    </div>
  );
}

export default App;

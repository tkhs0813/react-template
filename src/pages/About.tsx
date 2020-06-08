import * as React from 'react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div>
      <h1>about</h1>
      <Link to="/">go to home</Link>
    </div>
  );
};

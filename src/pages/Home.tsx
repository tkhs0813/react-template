import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>home</h1>
      <Link to="/about">go to about</Link>
    </div>
  );
};

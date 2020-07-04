import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Home: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* <h1 className="text-5xl font-bold text-purple-500">Hello world!</h1>
      <h1>home</h1>
      <Link to="/about">go to about</Link> */}
    </>
  );
};

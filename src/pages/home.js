import * as React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const Home = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Home</h1>
    </main>
  );
};

export default Home;

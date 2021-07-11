import React from 'react';

import Navbar from './NavBar';

const PublicLayout = (prop) => {
  const { children } = prop;
  return (
    <>
      <Navbar />
      <br />
      {children}
    </>
  );
};

export default PublicLayout;

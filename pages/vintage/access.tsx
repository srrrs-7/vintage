import React from 'react';
import AccessPage from '../../components/AccessPage';
import Header from '../../components/Header';

type Props = {};

const Access = (props: Props) => {
  return (
    <div>
      <Header />
      <div>
        <AccessPage />
      </div>
    </div>
  );
};

export default Access;

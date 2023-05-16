import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return(
    <>
      <div>
        <Link href="/setting">설정</Link>
        <Link href="/">버킷리스트</Link>
        <Link href="/profile">프로필</Link>
      </div>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children:PropTypes.node.isRequired,
}

export default AppLayout;
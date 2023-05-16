import React from 'react';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return(
    <>
      {/* 프로필에 들어왔을 때 로그인 전이면 로그인/회원가입창, 로그인했으면 데이터를 받은 프로필창 보여주기 */}
      <AppLayout>Profile</AppLayout>
    </>
  );
};

export default Profile;
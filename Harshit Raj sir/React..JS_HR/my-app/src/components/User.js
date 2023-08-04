import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
// useParams Hook
//   const params = useParams();
//   console.log(params);
//   console.log(params.userId);
// [OR]
//   const { userId } = useParams();
//   console.log({ userId });
//   console.log({ userId }.userId);
  const { userId, userName, userCountry } = useParams();
  console.log(useParams()); //* Object
  console.log({ userId, userName, userCountry }); //* Same Object as above
  console.log({ userId }.userId);
  console.log({ userName }.userName);

  return (
    <>
     <h1>User Page</h1>
     {/* <h2>User Id is {params.userId}</h2> */}
     <h2>User Id is {userId}</h2>
     <h2>User Name is {userName}</h2>
     <h2>User Country is {userCountry}</h2>
    </>
  );
}

export default User;
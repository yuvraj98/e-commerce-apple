import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../services/operations/user';


const Profile = () => {
  const user = useSelector((state) => state.profile.userProfile);
  const dispatch = useDispatch();
  const userId = 'user-id'; // Replace with actual user ID

  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Profile</h1>
      <div>
        <label className="block">First Name: </label>
        <input type="text" value={user.firstname} className="border p-2" readOnly />
      </div>
      <div>
        <label className="block">Last Name: </label>
        <input type="text" value={user.lastname} className="border p-2" readOnly />
      </div>
      <div>
        <label className="block">Email: </label>
        <input type="email" value={user.email} className="border p-2" readOnly />
      </div>
      {/* Add other fields similarly */}
    </div>
  );
};

export default Profile;

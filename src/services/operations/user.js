import { apiConnector } from '../apiConnector';
import { setOrders } from '../../slices/orderSlice';
import { setUserProfile } from '../../slices/userSlice';
const BASE_URL = process.env.REACT_APP_BASE_URL
const PROFILE_URL = BASE_URL + '/dashboard/profile';
const ORDER_URL = BASE_URL + '/dashboard//orders';

// Profile Operations
export const fetchUserProfile = (userId) => async (dispatch) => {
  try {
    const response = await apiConnector('GET', `${PROFILE_URL}/${userId}`);
    dispatch(setUserProfile(response.data));
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = (userId, profileData) => async (dispatch) => {
  try {
    const response = await apiConnector('PUT', `${PROFILE_URL}/${userId}`, profileData);
    dispatch(setUserProfile(response.data));
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Order Operations
export const fetchUserOrders = (userId) => async (dispatch) => {
  try {
    const response = await apiConnector('GET', `${ORDER_URL}?userId=${userId}`);
    dispatch(setOrders(response.data));
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw error;
  }
};

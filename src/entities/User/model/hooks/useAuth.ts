import { useSelector } from 'react-redux';
import { getUserAuthData } from '../selectors';

export const useAuth = () => Boolean(useSelector(getUserAuthData));

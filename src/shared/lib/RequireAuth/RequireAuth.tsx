import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps<T=string> {
  isAuth: boolean;
  children: ReactNode;
  redirect: T;
}
export type RequireAuthType<T> = (props: RequireAuthProps<T>)=> any;

export const RequireAuth = ({ isAuth, children, redirect }: RequireAuthProps) => {
  // const location = useLocation();

  if (!isAuth) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};

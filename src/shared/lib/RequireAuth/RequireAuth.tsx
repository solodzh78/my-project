import { Navigate } from 'react-router-dom';

interface RequireAuthProps<T=string> {
  isAuth: boolean;
  children: JSX.Element;
  redirect: T;
}
export type RequireAuthType<T> = (props: RequireAuthProps<T>)=> JSX.Element;

export const RequireAuth = ({ isAuth, children, redirect }: RequireAuthProps) => {
  // const location = useLocation();

  if (!isAuth) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};

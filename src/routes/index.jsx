import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

import { useAuth } from '../hooks/auth';
import { AdminRoutes } from './admin.routes';

export function Routes() {
  const { user } = useAuth();

  function routes() {
    if(user && user.isAdmin) {
      return <AdminRoutes/>
    } else if(user && !user.isAdmin) {
      return <AppRoutes/>
    } else {
      return <AuthRoutes/> 
    }
  }

  return (
    <BrowserRouter>
      { routes() }
    </BrowserRouter>
  )
}
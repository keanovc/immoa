import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes, HomeRoutes, ProfileRoutes, AdminRoutes } from '../../core/routing';
import AuthProvider from './Auth/AuthProvider';
import Home from './container/Home/Home';
import Signup from './container/Signup/Signup';
import Signin from './container/Signin/Signin';
import Buy from './container/Buy/Buy';
import Rent from './container/Rent/Rent';
import OnboardingLayout from './Auth/OnboardingLayout';
import Profile from './container/Profile/Profile';
import Favorites from './container/Favorites/Favorites';
import ProfileLayout from './Auth/ProfileLayout';
import RoleContainer from './Auth/RoleContainer';
import Dashboard from './container/Admin/Dashboard';
import { UserRoles } from '../../core/modules/users/constants';
import UsersLayout from './container/Users/UsersLayout';
import UsersOverviewScreen from './container/Users/Overview/UsersOverviewScreen';
import PropertiesLayout from './container/Properties/PropertiesLayout';
import PropertiesOverviewScreen from './container/Properties/Overview/PropertiesOverviewScreen';
import Detail from './container/Detail/Detail';
import Contact from './container/Contact/Contact';
import PublicLayout from './Auth/PublicLayout';
import AdminLayout from './Auth/AdminLayout';
import RealtorsLayout from './container/Realtors/RealtorsLayout';
import RealtorsOverviewScreen from './container/Realtors/Overview/RealtorsOverviewScreen';
import UsersEditScreen from './container/Users/Overview/UsersEditScreen';
import UserAddScreen from './container/Users/Overview/UserAddScreen';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path={HomeRoutes.Index} element={<Home />} />
            <Route path={HomeRoutes.Buy} element={<Buy />} />
            <Route path={HomeRoutes.Rent} element={<Rent />} />
            <Route path={HomeRoutes.Contact} element={<Contact />} />
            <Route path={HomeRoutes.Detail} element={<Detail />} />

            
            <Route path={ProfileRoutes.Index} element={<ProfileLayout />}>
              <Route path={ProfileRoutes.Favorites} element={<Favorites />} />
              <Route path={ProfileRoutes.Edit} element={<Profile />} />
            </Route>

            <Route path={AuthRoutes.Index} element={<OnboardingLayout />}>
              <Route path={AuthRoutes.Signup} element={<Signup />} />
              <Route path={AuthRoutes.Signin} element={<Signin />} />
            </Route>
          </Route>

          <Route
          path={AdminRoutes.Index}
            element={
                <RoleContainer roles={[UserRoles.Admin]}>
                    <AdminLayout />
                </RoleContainer>
            }>
            <Route index element={<Dashboard/>} />
            <Route
              path={AdminRoutes.Users}
              element={<UsersLayout />}>
              <Route index element={<UsersOverviewScreen />} />
              <Route path={AdminRoutes.EditUser} element={<UsersEditScreen />} />
              <Route path={AdminRoutes.AddUser} element={<UserAddScreen />} />
            </Route>
            <Route
              path={AdminRoutes.Properties}
              element={<PropertiesLayout />}>
              <Route index element={<PropertiesOverviewScreen />} />
            </Route>
            <Route
              path={AdminRoutes.Realtors}
              element={<RealtorsLayout />}>
              <Route index element={<RealtorsOverviewScreen />} />
            </Route>
          </Route>
          
          <Route path={'*'} element={<Navigate to={'/'} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

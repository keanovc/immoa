import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes, HomeRoutes, ProfileRoutes, AdminRoutes } from '../../core/routing';
import AuthProvider from './Auth/AuthProvider';
import { UserRoles } from '../../core/modules/users/constants';

import Home from './container/Home/Home';
import Signup from './container/Signup/Signup';
import Signin from './container/Signin/Signin';
import Buy from './container/Buy/Buy';
import Rent from './container/Rent/Rent';
import Detail from './container/Detail/Detail';
import Contact from './container/Contact/Contact';

import OnboardingLayout from './Auth/OnboardingLayout';
import ProfileLayout from './Auth/ProfileLayout';
import PublicLayout from './Auth/PublicLayout';
import AdminLayout from './Auth/AdminLayout';

import Profile from './container/Profile/Profile';
import Favorites from './container/Favorites/Favorites';
import RoleContainer from './Auth/RoleContainer';

import UsersLayout from './container/Admin/Users/UsersLayout';
import UsersOverviewScreen from './container/Admin/Users/Overview/UsersOverviewScreen';
import UserDetailLayout from './container/Admin/Users/Detail/UserDetailLayout';
import UserDetailScreen from './container/Admin/Users/Detail/UserDetailScreen';
import UserEditScreen from './container/Admin/Users/Edit/UserEditScreen';
import UserAddScreen from './container/Admin/Users/Add/UserAddScreen';

import PropertiesLayout from './container/Admin/Properties/PropertiesLayout';
import PropertiesOverviewScreen from './container/Admin/Properties/Overview/PropertiesOverviewScreen';
import PropertyDetailLayout from './container/Admin/Properties/Detail/PropertyDetailLayout';
import PropertyDetailScreen from './container/Admin/Properties/Detail/PropertyDetailScreen';
import PropertyEditScreen from './container/Admin/Properties/Edit/PropertyEditScreen';
import PropertyAddScreen from './container/Admin/Properties/Add/PropertyAddScreen';

import AgenciesLayout from './container/Admin/Agencies/AgenciesLayout';
import AgenciesOverviewScreen from './container/Admin/Agencies/Overview/AgenciesOverviewScreen';
import AgencyAddScreen from './container/Admin/Agencies/Add/AgencyAddScreen';
import AgencyDetailLayout from './container/Admin/Agencies/Detail/AgencyDetailLayout';
import AgencyDetailScreen from './container/Admin/Agencies/Detail/AgencyDetailScreen';
import AgencyEditScreen from './container/Admin/Agencies/Edit/AgencyEditScreen';

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
            <Route
                path={AdminRoutes.Index}
                element={<Navigate to={AdminRoutes.Users} />}
            />
            <Route
              path={AdminRoutes.Users}
              element={<UsersLayout />}>
              <Route index element={<UsersOverviewScreen />} />
              <Route path={AdminRoutes.AddUser} element={<UserAddScreen />} />
              <Route path={AdminRoutes.DetailUser} element={<UserDetailLayout />}>
                <Route index element={<UserDetailScreen />} />
                <Route path={AdminRoutes.EditUser} element={<UserEditScreen />} />
              </Route>
            </Route>
            <Route
              path={AdminRoutes.Properties}
              element={<PropertiesLayout />}>
              <Route index element={<PropertiesOverviewScreen />} />
              <Route path={AdminRoutes.AddProperty} element={<PropertyAddScreen />} />
              <Route path={AdminRoutes.DetailProperty} element={<PropertyDetailLayout />}>
                <Route index element={<PropertyDetailScreen />} />
                <Route path={AdminRoutes.EditProperty}  element={<PropertyEditScreen />} />
              </Route>
            </Route>
            <Route
              path={AdminRoutes.Agencies}
              element={<AgenciesLayout />}>
              <Route index element={<AgenciesOverviewScreen />} />
              <Route path={AdminRoutes.AddAgency} element={<AgencyAddScreen />} />
              <Route path={AdminRoutes.DetailAgency} element={<AgencyDetailLayout />}>
                <Route index element={<AgencyDetailScreen />} />
                <Route path={AdminRoutes.EditAgency} element={<AgencyEditScreen />} />
              </Route>
            </Route>
          </Route>
          
          <Route path={'*'} element={<Navigate to={'/'} />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

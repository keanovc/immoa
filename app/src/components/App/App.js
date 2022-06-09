import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes, HomeRoutes, ProfileRoutes, AgencyRoutes, AdminRoutes } from '../../core/routing';
import AuthProvider from './Auth/AuthProvider';
import { UserRoles } from '../../core/modules/users/constants';

import Home from './Screens/Home/Home';
import Signup from './Auth/Signup/Signup';
import Signin from './Auth/Signin/Signin';
import Buy from './Screens/Buy/Buy';
import Rent from './Screens/Rent/Rent';
import Detail from './Screens/Detail/Detail';

import OnboardingLayout from './Auth/OnboardingLayout';
import ProfileLayout from './Auth/ProfileLayout';
import PublicLayout from './Auth/PublicLayout';
import AdminLayout from './Auth/AdminLayout';
import AgencyLayout from './Auth/AgencyLayout';

import Profile from './Screens/Profile/Profile';
import ProfileEdit from './Screens/Profile/ProfileEdit';
import RoleContainer from './Auth/RoleContainer';

import AgencyPropertiesLayout from './Screens/Agency/Properties/AgencyPropertiesLayout';
import AgencyPropertiesOverviewScreen from './Screens/Agency/Properties/Overview/AgencyPropertiesOverviewScreen';
import AgencyPropertyDetailLayout from './Screens/Agency/Properties/Detail/AgencyPropertyDetailLayout';
import AgencyPropertyDetailScreen from './Screens/Agency/Properties/Detail/AgencyPropertyDetailScreen';
import AgencyPropertyAddScreen from './Screens/Agency/Properties/Add/AgencyPropertyAddScreen';
import AgencyPropertyEditScreen from './Screens/Agency/Properties/Edit/AgencyPropertyEditScreen';

import UsersLayout from './Screens/Admin/Users/UsersLayout';
import UsersOverviewScreen from './Screens/Admin/Users/Overview/UsersOverviewScreen';
import UserDetailLayout from './Screens/Admin/Users/Detail/UserDetailLayout';
import UserDetailScreen from './Screens/Admin/Users/Detail/UserDetailScreen';
import UserEditScreen from './Screens/Admin/Users/Edit/UserEditScreen';
import UserAddScreen from './Screens/Admin/Users/Add/UserAddScreen';

import PropertiesLayout from './Screens/Admin/Properties/PropertiesLayout';
import PropertiesOverviewScreen from './Screens/Admin/Properties/Overview/PropertiesOverviewScreen';
import PropertyDetailLayout from './Screens/Admin/Properties/Detail/PropertyDetailLayout';
import PropertyDetailScreen from './Screens/Admin/Properties/Detail/PropertyDetailScreen';
import PropertyEditScreen from './Screens/Admin/Properties/Edit/PropertyEditScreen';
import PropertyAddScreen from './Screens/Admin/Properties/Add/PropertyAddScreen';

import AgenciesLayout from './Screens/Admin/Agencies/AgenciesLayout';
import AgenciesOverviewScreen from './Screens/Admin/Agencies/Overview/AgenciesOverviewScreen';
import AgencyAddScreen from './Screens/Admin/Agencies/Add/AgencyAddScreen';
import AgencyDetailLayout from './Screens/Admin/Agencies/Detail/AgencyDetailLayout';
import AgencyDetailScreen from './Screens/Admin/Agencies/Detail/AgencyDetailScreen';
import AgencyEditScreen from './Screens/Admin/Agencies/Edit/AgencyEditScreen';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path={HomeRoutes.Index} element={<Home />} />
            <Route path={HomeRoutes.Buy} element={<Buy />} />
            <Route path={HomeRoutes.Rent} element={<Rent />} />
            <Route path={HomeRoutes.Detail} element={<Detail />} />

            
            <Route path={ProfileRoutes.Index} element={<ProfileLayout />}>
              <Route path={ProfileRoutes.Profile} element={<Profile />} />
              <Route path={ProfileRoutes.EditProfile} element={<ProfileEdit />} />
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
          
          <Route
            path={AgencyRoutes.Index}
            element={
                <RoleContainer roles={[UserRoles.Realtor]}>
                    <AgencyLayout />
                </RoleContainer>
            }>
            <Route
                path={AgencyRoutes.Index}
                element={<Navigate to={AgencyRoutes.Properties} />}
            />
            <Route
              path={AgencyRoutes.Properties}
              element={<AgencyPropertiesLayout />}>
              <Route index element={<AgencyPropertiesOverviewScreen />} />
              <Route path={AgencyRoutes.AddProperty} element={<AgencyPropertyAddScreen />} />
              <Route path={AgencyRoutes.DetailProperty} element={<AgencyPropertyDetailLayout />}>
                <Route index element={<AgencyPropertyDetailScreen />} />
                <Route path={AgencyRoutes.EditProperty} element={<AgencyPropertyEditScreen />} />
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

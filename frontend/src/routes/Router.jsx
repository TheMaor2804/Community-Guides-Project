import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import CreateGuidePage from '../guides/pages/CreateGuidePage'
// import ROUTES from './routesModel'
// import LoginPage from '../users/pages/LoginPage'
// import SignupPage from '../users/pages/SignupPage'
// import GuidePage from '../guides/pages/GuidePage'
import ErrorPage from '../pages/ErrorPage'
// import HomePage from '../pages/HomePage'
// import CRMPage from '../crm/pages/CRMPage'
// import ManageFeaturedGuidesPage from '../crm/pages/ManageFeaturedGuidesPage'
// import ManageUsersPage from '../crm/pages/ManageUsersPage'
// import ModPage from '../guides/pages/ModPage'
// import ManageCategoriesPage from '../categories/pages/ManageCategoriesPage'

export default function Router() {

    return (
        <Routes>
            {/* <Route path={ROUTES.ROOT} element={<HomePage />} />
            <Route path={ROUTES.CREATE_GUIDE} element={<CreateGuidePage />} />
            <Route path={ROUTES.ABOUT} element={<div>About</div>} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.MANAGE_CATEGORIES} element={<ManageCategoriesPage />} />
            <Route path={ROUTES.GUIDE + '/:id'} element={<GuidePage />} />
            <Route path={ROUTES.CRM} element={<CRMPage />} />
            <Route path={ROUTES.MANAGE_FEATURED_GUIDES} element={<ManageFeaturedGuidesPage />} />
            <Route path={ROUTES.MANAGE_USERS} element={<ManageUsersPage />} />
            <Route path={ROUTES.MOD_PAGE} element={<ModPage />} />
*/}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

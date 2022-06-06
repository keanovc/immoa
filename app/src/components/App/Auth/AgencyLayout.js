import React from 'react'
import { Outlet } from "react-router-dom";
import AgencyHeader from '../Shared/Header/AgencyHeader';

const AgencyLayout = () => {
    return (
        <>
            <AgencyHeader />

            <Outlet />
        </>
    )
}

export default AgencyLayout
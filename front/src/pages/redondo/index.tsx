import React from "react";
import NavBarDashboard from "@/components/layout/NavBar/NavBarDashboard";
import Dashboard from "@/components/api/dashboard/Dashboard";

export default function DashboardPage(): React.JSX.Element {
    return (
        <>
            <NavBarDashboard />
            <Dashboard />
        </>
    );
}
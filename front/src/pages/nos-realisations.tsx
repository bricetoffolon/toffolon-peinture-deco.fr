import React from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Realization from "@/components/realization";

export default function AchievementPage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Realization/>
            <Footer />
        </>
    );
}
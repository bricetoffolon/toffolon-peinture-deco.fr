import React from "react";

import NavBar from "@/components/layout/NavBar";
import Landing from "@/components/landing/";
import Footer from "@/components/layout/Footer";

function LandingPage(): React.JSX.Element {
    return (
        <div>
            <NavBar />
            <Landing />
            <Footer />
        </div>
    );
}

export default LandingPage;
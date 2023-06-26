import React from "react";

import NavBar from "@/components/layout/NavBar";
import Services from "../components/services";
import Footer from "@/components/layout/Footer";

export default function ServicesPage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Services />
            <Footer />
        </>
    );
}
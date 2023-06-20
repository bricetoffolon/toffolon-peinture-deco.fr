import React from "react";

import NavBar from "@/components/layout/NavBar";
import Prestations from "@/components/prestations";
import Footer from "@/components/layout/Footer";

export default function PrestationsPage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Prestations />
            <Footer />
        </>
    );
}
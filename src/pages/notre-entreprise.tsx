import React from "react";

import NavBar from "@/components/layout/NavBar";
import Enterprise from "../components/enterprise";
import Footer from "@/components/layout/Footer";

export default function EnterprisePage(): React.JSX.Element {
    return (
        <>
            <NavBar />
            <Enterprise />
            <Footer />
        </>
    );
}
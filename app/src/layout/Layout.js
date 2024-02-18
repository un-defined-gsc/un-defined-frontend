
import Navbar from "@/layout/components/Navbar";
import Footer from "@/layout/components/Footer";
import ScrollTop from "@/layout/components/ScrollTop";
// import NextNProgress from "nextjs-progressbar";
import { useState, useEffect, Fragment } from "react";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(88);
    const [footerHeight, setFooterHeight] = useState(290);

    // useEffect(() => {
    //     const navbar = document.getElementById("navbar");
    //     const footer = document.getElementById("footer");

    //     if (navbar) setNavbarHeight(navbar.offsetHeight);
    //     if (footer) setFooterHeight(footer.offsetHeight);
    // }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>

    return (
        <Fragment>
            {/* <NextNProgress
                color="#e11d48"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                options={{ easing: "ease-in-out", speed: 500 }}
            /> */}
            {/* <Navbar /> */}

            <Container maxWidth="xl">
                <Box sx={{ width: '100%', display: 'flex', gap: '32px' }}>
                    <Navbar />

                    <Box
                        sx={{
                            // minHeight: `calc(100vh - ${(navbarHeight || 0) + (footerHeight || 0)}px)`
                            position: 'relative',
                            minHeight: `calc(100vh - 80px)`,
                            maxWidth: '100%',
                            width: '100%',
                            maxWidth: '800px',
                            py: '32px',
                            // ml: '200px'
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Container>

            <Footer />
            {/* Other components */}
            <ScrollTop />
        </Fragment>
    );
};

export default Layout;

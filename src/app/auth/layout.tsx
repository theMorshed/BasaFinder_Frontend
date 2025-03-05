import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default AuthLayout;
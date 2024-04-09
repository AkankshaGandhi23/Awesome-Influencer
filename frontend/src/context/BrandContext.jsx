import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('brand')));

    const [brandLoggedIn, setBrandLoggedIn] = useState(currentUser !== null);

    const brandLogout = () => {
        sessionStorage.removeItem('brand');
        setCurrentUser(null);
        setBrandLoggedIn(false);
        router.push('/brand-login');
    }

    return (
        <BrandContext.Provider value={{
            currentUser,
            setCurrentUser,
            brandLoggedIn,
            setBrandLoggedIn,
            brandLogout
        }}>
            {children}
        </BrandContext.Provider>
    )
}

const useBrandContext = () => useContext(BrandContext);

export default useBrandContext;
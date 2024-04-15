import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {

    const router = useRouter();

    const [currentBrand, setCurrentBrand] = useState(JSON.parse(sessionStorage.getItem('brand')));

    const [brandLoggedIn, setBrandLoggedIn] = useState(currentBrand !== null);

    const brandLogout = () => {
        sessionStorage.removeItem('brand');
        setCurrentBrand(null);
        setBrandLoggedIn(false);
        router.push('/brand-login');
    }

    return (
        <BrandContext.Provider value={{
            currentBrand,
            setCurrentBrand,
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
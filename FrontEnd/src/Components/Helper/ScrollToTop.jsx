import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ()=>{
    const {pathname} = useLocation();

    useEffect( ()=>{
        const scrollPages = ['/ingredients','/recipes', '/features', '/about us'];

        if(scrollPages.includes(pathname)){
            window.scroll({
                top:0,
                left:0,
                behavior:'smooth',
            });
        }
    },[pathname]);
    return null;
};

export default ScrollToTop;
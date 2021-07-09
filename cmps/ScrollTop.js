import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function ScrollTop() {
    const router = useRouter()
    const { pathname } = router

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
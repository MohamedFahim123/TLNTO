'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function RegionPage({ params }: { params: Promise<{ region?: string }> }) {
    const router = useRouter();

    useEffect(() => {
        const resolveParams = async () => {
            const resolvedParams = await params;
            const regionFromUrl = resolvedParams?.region?.toLowerCase();
            const regionFromCookie = Cookies.get('region')?.toLowerCase() || 'riyadh';

            const validRegions : string[] = ["riyadh"];

            const finalRegion = regionFromUrl || regionFromCookie;

            if (!validRegions.includes(finalRegion)) {
                router.replace('/404');
                return;
            };

            if (regionFromCookie !== finalRegion) {
                Cookies.set('region', finalRegion, {
                    path: '/',
                    maxAge: 60 * 60 * 24 * 30,
                    secure: true,
                });
            }

            router.replace(`/${finalRegion}/jobs/home`);
        };

        resolveParams();
    }, [params, router]);

    return null;
}

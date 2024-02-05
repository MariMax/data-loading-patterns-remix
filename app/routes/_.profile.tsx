import { useFetcher, useLoaderData } from "@remix-run/react";
import { ReactNode, useEffect } from "react";

export async function loader() {
    return {
        mainPageContent: "Profile",
    };
}

export default function Profile() {
    const { mainPageContent } = useLoaderData<typeof loader>();
    const fetcher = useFetcher();

    useEffect(() => {
        fetcher.load('/api/profile')
    }, []);

    return <div>
        <div>
            {mainPageContent}
        </div>
        <div>
            {fetcher.data ? fetcher.data as ReactNode : <div>Loading...</div>}
        </div>
    </div >;
}
import { Await, useAsyncValue, useLoaderData } from "@remix-run/react";
import { defer } from "@remix-run/node";
import { Suspense } from "react";

const getUserDetails = () => new Promise((resolve) => {
    setTimeout(() => resolve("User details"), 3000);
});

export async function loader() {
    return defer({
        deferedData: getUserDetails(),
        mainPageContent: "Profile",
    }, {
        headers: {
            "Cache-Control": "public, max-age=3600",
        },
    });
}

const UnderTheFoldContent = () => {
    const resolvedValue = useAsyncValue();
    return <>{resolvedValue}</>;
};

export default function Profile() {
    const { deferedData, mainPageContent } = useLoaderData<typeof loader>();

    return <div>
        <div>
            {mainPageContent}
        </div>
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={deferedData}>
                    <UnderTheFoldContent />
                </Await>
            </Suspense>
        </div>
    </div >;
}
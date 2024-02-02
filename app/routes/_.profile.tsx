import { useLoaderData } from "@remix-run/react";

export async function loader() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Profile"), 3000);
    });
}

export default function Profile() {
    const data = useLoaderData();
    return data;
}
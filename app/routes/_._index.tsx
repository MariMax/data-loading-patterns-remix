import { useNavigation } from "@remix-run/react";

export default function Home() {
    const nav = useNavigation();
    const isLoading = nav.state === 'loading';
    const content = isLoading ? 'Loading...' : "Home page";
    return content;
}
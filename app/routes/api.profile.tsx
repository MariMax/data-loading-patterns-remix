const getUserDetails = () => new Promise((resolve) => {
    setTimeout(() => resolve("User details"), 3000);
});

export async function loader() {
    return await getUserDetails();
}
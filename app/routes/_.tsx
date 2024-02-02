import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Demo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-full">
      <div className="h-full">
        <Navbar />
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div >
  );
}

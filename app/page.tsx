"use client";

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium: boolean;
}
export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);
  return (
    <main>
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data </h1>
          <ul>
            <li>ID : {userData.id}</li>
            <li>Name : {userData.first_name}</li>
            <li>
              Last Name :{" "}
              {userData.last_name ? userData.last_name : "there is not"}
            </li>
            <li>
              Username :{" "}
              {userData.username ? userData.username : "There is not"}
            </li>
            <li>Lang : {userData.language_code}</li>
            <li>Username : {userData.is_premium ? "Yes " : "No"}</li>
          </ul>
        </>
      ) : (
        <h3 className="text-2xl">Loading</h3>
      )}
    </main>
  );
}

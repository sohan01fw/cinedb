import { getAuth } from "firebase/auth";
import { NextResponse } from "next/server";
import { app } from "./utils/config/firebase";

export function middleware(request) {
  let url = process.env.NEXT_PUBLIC_URL;
  const { currentUser } = getAuth(app);
  console.log(currentUser);

  if (!currentUser) {
    // If the user is not logged in, redirect them to the login page
    return NextResponse.redirect(`${url}/login`);
  }

  // If the user is logged in, continue to the requested page
  return NextResponse.next();
}

//to protect route u have to mention route here that u wanna protect.
export const config = {
  matcher: "/genre/:id*",
};

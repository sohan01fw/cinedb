import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NextResponse } from "next/server";
import { auth } from "./utils/config/firebase";
import Cookies from "js-cookie";
export async function middleware(request) {
  let url = process.env.NEXT_PUBLIC_URL;

  // Parse the Cookie header
  const cookies = request.headers
    .get("Cookie")
    ?.split("; ")
    .reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {});

  const getToken = cookies?.auth;

  if (!getToken) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
  return NextResponse.next();
}

// To protect a route, mention the route here that you want to protect.
export const config = {
  matcher: "/genre/:id*",
};

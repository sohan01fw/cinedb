import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NextResponse } from "next/server";
import { app } from "./utils/config/firebase";

export async function middleware(request) {
  let url = process.env.NEXT_PUBLIC_URL;
  const auth = getAuth();
}

// To protect a route, mention the route here that you want to protect.
export const config = {
  matcher: "/genre/:id*",
};

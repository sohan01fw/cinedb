import { useRouter } from "next/router";
import { signInWithGoogle } from "../utils/firebaseAuth";
import { getAuth, signOut } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const handleSignOut = async () => {
    const auth = getAuth(); // Get the authentication instance
    try {
      await signOut(auth); // Sign out the user
      router.push("/"); // Redirect after successful sign-out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  const handleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result) {
      router.push("/");
    }
  };
  return (
    <>
      <button
        className="btn "
        onClick={() => {
          handleSignIn();
        }}
      >
        login
      </button>
      <button
        className="btn bg-gray-500"
        onClick={() => {
          handleSignOut();
        }}
      >
        log out
      </button>
    </>
  );
}

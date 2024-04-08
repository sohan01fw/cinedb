import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useToken from "../utils/hooks/useToken";

function MyApp({ Component, pageProps }) {
  useToken();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

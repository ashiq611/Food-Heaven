import "./App.css";
import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import {useContext} from 'react'
import AuthContextProvider from "./contexts/Auth";
import "./App.css";
import CartProvider from "./contexts/Cart";

const Queryclient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={Queryclient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthContextProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

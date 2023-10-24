import "./App.css";
import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import {useContext} from 'react'
import AuthContextProvider from "./contexts/Auth";
import "./App.css";

const Queryclient = new QueryClient();
function App() {
  return (
    <>
        <AuthContextProvider>
      <QueryClientProvider client={Queryclient}>
        <ReactQueryDevtools initialIsOpen={false} />
          <Router />
      </QueryClientProvider>
        </AuthContextProvider>
    </>
  );
}

export default App;

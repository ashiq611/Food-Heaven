import "./App.css";
import Router from "./router/Router";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import {useContext} from 'react'
import "./App.css";

const Queryclient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={Queryclient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;

import "./styles/variables.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import { LocationSelector } from "./components/LocationSelector/LocationSelector"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationSelector />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

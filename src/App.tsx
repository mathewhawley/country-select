import { useEffect } from "react";
import { fetchContinents } from "./utils/fetch-continents";
import { fetchCountries } from "./utils/fetch-countries";

function App() {
  useEffect(() => {
    fetchContinents().then(console.log);
    fetchCountries().then(console.log);
  }, []);

  return <div>My Code</div>;
}

export default App;

import "./App.css";
import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "users/MaikonSchafranski/repos"
  );
  return (
    <ul>
      {isFetching&&<p>Carregndo...</p>}
      {repositories?.map((respo) => {
        return (
          <li>
            {" "}
            key={respo.full_name}
            <strong>{respo.full_name}</strong>
            <p>{respo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;

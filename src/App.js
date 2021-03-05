import db from "db";
import { Header, Main } from "./components";

console.log(db);

function App() {
  return (
    <div className="flex flex-col font-mono gap-4 text-neon-green">
      <Header />
      <Main />
    </div>
  );
}

export default App;

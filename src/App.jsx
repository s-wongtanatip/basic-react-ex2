import "./App.css";
import { useState } from "react";

//import component
import Header from "./components/header";
import Main from "./components/main";
import UserCard from "./components/userCard";

//mock data
import userData from "./userData";

function App() {
  const [showData, setShowData] = useState(userData);
  const [textSearch, setTextSearch] = useState("");

  const setSearch = e => setTextSearch(e.target.value);

  return (
    <div className="container">
      <Header onSearch={setSearch}/>
      <Main userData={userData} textSearch={textSearch}/>
    </div>
  );
}

export default App;

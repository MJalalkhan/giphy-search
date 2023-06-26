import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/SearchBar";
import Header from "./components/Header";
import GifCards from "./components/GifCards";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">

      <Searchbar />
      <GifCards/>

      </Container>
    </div>
  );
}

export default App;

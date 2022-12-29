import "./App.css";
import Add from "./components/Add";
import Homepage from "./components/Main";
import { Route, Routes, useNavigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HeaderContainer, Title, Button } from "./components/Components.styled";
import { SyntheticEvent } from "react";

const App: React.FC = () => {
  const navigate = useNavigate();
  const handleAddbuttonClick = (e: SyntheticEvent) => {
    e.preventDefault;
    navigate("/add-my-resolution");
  };
  return (
    <>
      <HeaderContainer>
        <Title>2023 Resolutions</Title>
        <Button backgroundColor="white" color="teal" onClick={handleAddbuttonClick}>Add mine</Button>
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-my-resolution" element={<Add />} />
      </Routes>
    </>
  );
};

export default App;

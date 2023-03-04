import "./App.css";
import { MainPage } from "./components/MainPage";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./components/Events";
import { EventsForm } from "./components/EventsForm";
import { Card } from "./components/Card";
import { MusicPlayer } from "./components/MusicPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import tracks from "./track"
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="events">
            <Route path="" element={<Events />} />
            <Route path="new" element={<EventsForm />} />
          </Route>
          <Route path="test">
            <Route path="" element={<Card />} />
          </Route>
          <Route path="music">
            <Route path="" element={<MusicPlayer tracks={tracks}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

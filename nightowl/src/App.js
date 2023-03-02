import "./App.css";
import { MainPage } from "./components/MainPage";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Events } from "./components/Events"
import { EventsForm } from "./components/EventsForm";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

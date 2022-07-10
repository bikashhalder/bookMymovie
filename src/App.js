import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutMovie from "./pages/AboutMovie";
import BookingSummary from "./pages/BookingSummary";
import BookMovie from "./pages/BookMovie";
import SelectingSeat from "./pages/SelectingSeat";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutMovie/:id' element={<AboutMovie />} />
        <Route exact path='/bookingSummary' element={<BookingSummary />} />
        <Route exact path='/bookmovie/:id' element={<BookMovie />} />
        <Route
          exact
          path='/selectingSeat/:id/:time'
          element={<SelectingSeat />}
        />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "Pages/Listing";
import Form from "Pages/Form";
import Navbar from "Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

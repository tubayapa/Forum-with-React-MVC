import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderView from "./components/Header/HeaderView";
import ListController from "./pages/List/ListController";
import CreateController from "./pages/Create/CreateController";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={850} />
      <HeaderView />
      <Routes>
        <Route path="/" element={<ListController />} />
        <Route path="/create" element={<CreateController />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

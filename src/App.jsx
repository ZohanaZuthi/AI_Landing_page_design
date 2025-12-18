import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/layout";
import HomePage from "./pages/Home/home";


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
       

      </Route>
    </Routes>
  );
}

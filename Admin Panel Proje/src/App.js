import { Routes, Route } from "react-router-dom";
import FormCargo from "./FormCargo";
import ListCargo from "./ListCargo";
import FormProduct from "./FormProduct";
import FormCustomer from "./FormCustomer";
import FormOrder from "./FormOrder";
import ListCustomer from "./ListCustomer";
import ListProduct from "./ListProduct";
import ListOrder from "./ListOrder";
import LoginPage from "./LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/formCargo" element={<FormCargo />} />
        <Route path="/listCargo" element={<ListCargo />} />
        <Route path="/formProduct" element={<FormProduct />} />
        <Route path="/formCustomer" element={<FormCustomer />} />
        <Route path="/formOrder" element={<FormOrder />} />
        <Route path="/listCustomer" element={<ListCustomer />} />
        <Route path="/listProduct" element={<ListProduct />} />
        <Route path="/listOrder" element={<ListOrder />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}
export default App;

import {
  Login,
  Hotel,
  Map,
  NotebookPen,
  Plane,
} from "./components/pages/Pages";
import HomePage from "@/components/pages/Pages";
import { Home as H, Plane as P, Map as M, NotebookPen as N, Hotel as Ho } from 'lucide-react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toast } from "radix-ui";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Toast.Provider>
        <BrowserRouter>
          <Routes>
            {/* Login route */}
            {/* <Route path="/" element={<Login />} /> */}

            {/* Layout route with persistent sidebar */}
            <Route path="/home" element={<HomePage />}>
              {/* Nested routes for right-side content */}
              {/* default content */}
              <Route path="airplane" element={<Plane />} />
              <Route path="hotel" element={<Hotel />} />
              <Route path="map" element={<Map />} />
              <Route path="notebookpen" element={<NotebookPen />} />
              <Route path="airplane" element={<Plane />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Toast.Provider>
    </div>
  );
};

export default App;

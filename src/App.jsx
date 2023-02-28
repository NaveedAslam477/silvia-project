import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Protected from "./layouts/protected";
import SilviaAlert from "./widgets/layout/silviaAlert";
import CamapignAdd from "./pages/dashboard/camapignAdd";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Protected Component = {Dashboard} />} />
      <Route path="/auth/*" element={<Auth />} />
      {/* <Route path="/campaignAdd/*" element={<CamapignAdd />} /> */}
      <Route path="/alert/*" element={< SilviaAlert/>} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;

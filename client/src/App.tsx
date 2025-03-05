import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CurlPreviewPage } from "./pages/workouts-preview/CurlPreviewPage";
import { LateralRaisePreviewPage } from "./pages/workouts-preview/LateralRaisePreviewPage";
import { PlankPreviewPage } from "./pages/workouts-preview/PlankPreviewPage";
import { PushupPreviewPage } from "./pages/workouts-preview/PushupPreviewPage";
import { SquatPreviewPage } from "./pages/workouts-preview/SquatPreviewPage";
import { CurlPage } from "./pages/workouts/CurlPage";
import { LateralRaisePage } from "./pages/workouts/LateralRaisePage";
import { PlankPage } from "./pages/workouts/PlankPage";
import { PushupPage } from "./pages/workouts/PushupPage";
import { SquatPage } from "./pages/workouts/SquatPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/curl-preview" element={<CurlPreviewPage />} />
          <Route path="/lateral-raise-preview" element={<LateralRaisePreviewPage/>} />
          <Route path="/plank-preview" element={<PlankPreviewPage/>} />
          <Route path="/pushup-preview" element={<PushupPreviewPage/>} />
          <Route path="/squat-preview" element={<SquatPreviewPage/>} />

          <Route path="/curl" element={<CurlPage />} />
          <Route path="/lateral-raise" element={<LateralRaisePage/>} />
          <Route path="/plank" element={<PlankPage/>} />
          <Route path="/pushup" element={<PushupPage/>} />
          <Route path="/squat" element={<SquatPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  Home,
  Splash,
  InfoAboutLovedOne,
  BasicDetails,
  MoodDetails,
  AdditionalDetails,
  SongLyricsReady,
  LoadingPageAfterResponse,
  FinalPage,
} from "./pages";
import { Navbar } from "./layouts";
import { OTPVerificationModal, TutorialModal } from "./modals";
import { useSelector, useDispatch } from "react-redux";
import { ToastMessage } from "./components";
import { clickToast } from "./features/toastMessage";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //use states
  const [showSplash, setShowSplash] = useState(true);

  //modal states
  const toastMessage = useSelector((state) => state.toastMessage.value);
  const otpModal = useSelector((state) => state.otpModal.value);
  const tutorialVideoModal = useSelector((state) => state.tutorialModal.value);

  //use Effects
  useEffect(() => {
    if (toastMessage?.value || toastMessage) {
      setTimeout(() => {
        dispatch(clickToast({ value: false }));
      }, 5000);
    }
  }, [toastMessage?.value]);

  // Use a useEffect to hide the Splash screen after a delay (e.g., 3 seconds).
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      {showSplash && <Splash />}
      {/* routes */}
      <div className={`${location.pathname !== "/" ? "pt-[70px]" : ""}`}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loved-one-info" element={<InfoAboutLovedOne />}>
            <Route path="basic-details" element={<BasicDetails />} />
            <Route path="mood-details" element={<MoodDetails />} />
            <Route path="additonal-details" element={<AdditionalDetails />} />
          </Route>
          <Route path="/song-ready" element={<SongLyricsReady />} />
          <Route path="/loading" element={<LoadingPageAfterResponse />} />
          <Route path="/final-page" element={<FinalPage />} />
        </Routes>
      </div>

      {/* modals and toast message */}
      {otpModal === true || otpModal.value === true ? (
        <OTPVerificationModal />
      ) : null}
      {tutorialVideoModal === true || tutorialVideoModal.value === true ? (
        <TutorialModal />
      ) : null}
      {toastMessage === true || toastMessage.value === true ? (
        <ToastMessage message={toastMessage.message} />
      ) : null}
    </>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
const App = () => {
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/singup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/notifications" element={<NotificationsPage></NotificationsPage>}></Route>
        <Route path="/call" element={<CallPage></CallPage>}></Route>
        <Route path="/chat" element={<ChatPage></ChatPage>}></Route>
        <Route path="/onboarding" element={<OnboardingPage></OnboardingPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;

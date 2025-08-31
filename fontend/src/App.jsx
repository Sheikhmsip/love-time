import React from "react";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import { Toaster } from "react-hot-toast";
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.jsx";
import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
const App = () => {
  // Theme Store
  const { theme } = useThemeStore();

  // Authentication function
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if (isLoading) {
    return <PageLoader></PageLoader>;
  }
  return (
    <div className="h-screen" data-theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <HomePage></HomePage>
              </Layout>
            ) : (
              <Navigate
                to={!isAuthenticated ? "/login" : "/onboarding"}></Navigate>
            )
          }></Route>
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUpPage></SignUpPage>
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"}></Navigate>
            )
          }></Route>
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage></LoginPage>
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"}></Navigate>
            )
          }></Route>
        <Route
          path="/notifications"
          element={
            isAuthenticated && isOnboarded ? (
              <Layout showSidebar={true}>
                <NotificationsPage></NotificationsPage>
              </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}></Navigate>
            )
          }></Route>
        <Route
          path="/call"
          element={
            isAuthenticated ? (
              <CallPage></CallPage>
            ) : (
              <Navigate to={"/login"}></Navigate>
            )
          }></Route>
        <Route
          path="/chat"
          element={
            isAuthenticated ? (
              <ChatPage></ChatPage>
            ) : (
              <Navigate to={"/login"}></Navigate>
            )
          }></Route>
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <OnboardingPage></OnboardingPage>
              ) : (
                <Navigate to="/"></Navigate>
              )
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }></Route>
      </Routes>

      <Toaster></Toaster>
    </div>
  );
};

export default App;

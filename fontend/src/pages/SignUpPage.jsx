import { ShipWheelIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* SIGNUP FORM - LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary"></ShipWheelIcon>
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Lovetime
            </span>
          </div>
          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Create an Account</h2>
                  <p className="text-sm opacity-70">
                    Join Lovetime and start your lovetime and language learning
                    adventure!
                  </p>
                </div>
                {/* INPUT FIELD */}
                <div className="space-y-3">
                  {/* Full Name */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"> Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Love Time"
                      className="input input-bordered w-full"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      required></input>
                  </div>
                  {/* Email */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"> Email </span>
                    </label>
                    <input
                      type="email"
                      placeholder="emial@gmail.com"
                      className="input input-bordered w-full"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          emial: e.target.value,
                        })
                      }
                      required></input>
                  </div>
                  {/* Password */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text"> Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="*******"
                      className="input input-bordered w-full"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required></input>
                    <p className="text-xs opacity-70 mt-1">
                      Password must be at least 6 characters long
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        required></input>
                      <span className="text-xs leading-tight">
                        I agree to the{" "}
                        <span className="text-primary hover:underline">
                          terms of the service{" "}
                        </span>{" "}
                        and{" "}
                        <span className="text-primary hover:underline">
                          privacy policy
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary w-full" type="submit">
                  Create Account
                </button>
                <div className="text-center mt-4">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      {" "}
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}

        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
        <div className="max-w-md p-8">
          {/* Illustration */}
          <div className="relative aspect-square max-w-sm mx-auto">
            <img src="/signupImg.png" alt="Language connection illustration" className="w-full h-full"></img>
          </div>
          <div className="text-center space-y-3 mt-6">
            <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
            <p className="opacity-70"> Practice conversations, make friends, and improve your language skills with your love one</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

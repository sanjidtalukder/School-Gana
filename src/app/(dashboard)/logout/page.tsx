"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Demo users (for local demo only)
const demoUsers = [
  { id: 1, role: "admin", email: "admin@school.com", password: "admin123" },
  { id: 2, role: "teacher", email: "teacher@school.com", password: "teach123" },
  { id: 3, role: "student", email: "student@school.com", password: "stud123" },
];

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordVisibleHint, setPasswordVisibleHint] = useState("");

  useEffect(() => {
    // restore remembered email
    const saved = localStorage.getItem("sg_remembered_email");
    if (saved) {
      setEmail(saved);
      setRemember(true);
    }
  }, []);

  useEffect(() => {
    // small UX hint: update password strength/visibility text
    if (!password) return setPasswordVisibleHint("");
    if (password.length < 4) setPasswordVisibleHint("Too short");
    else if (password.length < 8) setPasswordVisibleHint("Weak");
    else setPasswordVisibleHint("Strong enough");
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // basic validation
    if (!email) return setError("Please enter your email.");
    if (!password) return setError("Please enter your password.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Please enter a valid email.");

    setLoading(true);

    // simulate API call
    await new Promise((r) => setTimeout(r, 900));

    const user = demoUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      setError("No account found with this email.");
      setLoading(false);
      return;
    }

    if (user.password !== password) {
      setError("Invalid credentials. Try demo credentials shown below.");
      setLoading(false);
      return;
    }

    // success
    setSuccess(`Welcome back — ${user.role}! Redirecting...`);

    if (remember) localStorage.setItem("sg_remembered_email", email);
    else localStorage.removeItem("sg_remembered_email");

    // small delay to show success
    setTimeout(() => {
      setLoading(false);
      // navigate to a demo dashboard page depending on role
      router.push(user.role === "admin" ? "/" : "/");
    }, 700);
  };

  const handleSocialLogin = async (provider: string) => {
    setError("");
    setSuccess("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSuccess(`Logged in with ${provider} (demo).`);
    setTimeout(() => router.push("/"), 700);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left - Illustration + tips (hidden on small) */}
        <div className="hidden md:flex flex-col justify-center items-start gap-6 p-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={48} height={48} />
            <div>
              <h3 className="text-2xl font-bold">School Gana</h3>
              <p className="text-sm opacity-90">Smart school management — demo account</p>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <p className="text-sm leading-relaxed">Quick demo credentials (click to autofill):</p>
            <div className="flex flex-wrap gap-2">
              {demoUsers.map((u) => (
                <button
                  key={u.id}
                  onClick={() => {
                    setEmail(u.email);
                    setPassword(u.password);
                  }}
                  className="px-3 py-2 bg-white bg-opacity-10 rounded-md text-sm hover:bg-opacity-20 transition"
                >
                  {u.role}: {u.email}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto text-sm opacity-90">
            <p>Tip: Use the "Remember me" to save email locally.</p>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to continue to your dashboard</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-700">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="email"
                aria-label="email"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-700 flex justify-between">
                <span>Password</span>
                <span className="text-[11px] text-gray-400">{passwordVisibleHint}</span>
              </label>
              <div className="relative mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full pr-12 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  type={showPassword ? "text" : "password"}
                  aria-label="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm rounded hover:bg-gray-100"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => alert("Demo: open forgot password flow (not implemented).")}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot?
              </button>
            </div>

            {/* Error / Success */}
            {error && <div className="text-sm text-red-600">{error}</div>}
            {success && <div className="text-sm text-green-600">{success}</div>}

            <div>
              <button
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:brightness-105 disabled:opacity-60 transition"
              >
                {loading && (
                  <svg
                    className="w-4 h-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                )}
                <span>{loading ? "Signing in..." : "Sign in"}</span>
              </button>
            </div>

            <div className="pt-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs">or continue with</div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("Google")}
                  className="flex items-center justify-center gap-2 px-3 py-2 border rounded-md hover:shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                    <path fill="#EA4335" d="M24 9.5c3.9 0 7 1.4 9.1 3.2l6.8-6.8C35.8 2.4 30.2 0 24 0 14.7 0 6.9 5.1 3 12.6l7.9 6.1C12.9 13 18 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M46.1 24.5c0-1.5-.1-2.6-.4-3.7H24v7h12.6c-.5 3-2.3 5.3-4.9 6.9l7.5 5.8c4.4-4.1 6.9-10.1 6.9-16z"/>
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("GitHub")}
                  className="flex items-center justify-center gap-2 px-3 py-2 border rounded-md hover:shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.489.5.092.682-.217.682-.483 0-.238-.008-.87-.013-1.71-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.678-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.376.202 2.393.1 2.646.64.698 1.03 1.588 1.03 2.678 0 3.842-2.338 4.687-4.566 4.934.36.31.68.92.68 1.852 0 1.337-.012 2.418-.012 2.747 0 .268.18.58.688.482C19.138 20.165 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>
                  GitHub
                </button>
              </div>
            </div>

            <div className="pt-4 text-xs text-gray-500">
              By continuing you agree to our <button className="underline">Terms</button> and <button className="underline">Privacy</button>.
            </div>
          </form>

          {/* small footer for mobile to show helpful demo info */}
          <div className="mt-6 text-xs text-gray-400 md:hidden">
            Demo accounts are available on the left panel (desktop) or use the sample credentials above.
          </div>
        </div>
      </div>
    </div>
  );
}

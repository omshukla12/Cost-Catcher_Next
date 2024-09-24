import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data = await response.json();
      console.log("User signed in successfully", data);

      // Redirect to /app page on successful login
      navigate("/app");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <a className="font-medium text-primary hover:underline" href="/signup">
              sign up for a new account
            </a>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSignin}>
          <div>
            <label
              className="text-sm font-medium leading-none sr-only"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-10 bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 relative block w-full appearance-none rounded-md border px-3 py-2 text-foreground focus:z-10"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="text-sm font-medium leading-none sr-only"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-10 bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 relative block w-full appearance-none rounded-md border px-3 py-2 text-foreground focus:z-10"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

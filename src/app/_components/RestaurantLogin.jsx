
const ResturantLogin = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-center text-gray-800">
        Login Your Account
      </h2>
      <form className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none "
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="w-4 h-4 text-black border-gray-300 rounded focus:black"
            />
            <label htmlFor="remember_me" className="ml-2 text-sm text-white">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-black hover:text-black">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResturantLogin;

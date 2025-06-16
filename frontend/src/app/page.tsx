export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <header className="w-full p-4 border-b border-emerald-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-emerald-700">Logo</h1>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Shorten Your URLs
            </h2>
            <p className="text-xl text-gray-600 italic tracking-wide">
              Create concise, memorable links with just one click
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-100">
            <form className="w-full">
              <div className="flex w-full overflow-hidden">
                <input
                  type="url"
                  placeholder="https://url.address"
                  className="flex-grow py-4 px-6 text-lg border-2 border-emerald-300 rounded-l-lg "
                  required
                />
                <button
                  type="submit"
                  className="py-4 px-10 font-bold text-lg bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition-colors duration-200 shadow-sm"
                >
                  GO
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full max-w-5xl mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Fast & Reliable
            </h3>
            <p className="text-gray-600">
              High-performance redirects that load instantly
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Secure Links
            </h3>
            <p className="text-gray-600">All URLs are protected</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Analytics
            </h3>
            <p className="text-gray-600">Track clicks and visitor data</p>
          </div>
        </div>
      </main>
    </div>
  );
}

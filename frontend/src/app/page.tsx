import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 text-slate-800">
      <header className="w-full p-4 border-b border-slate-200 bg-white/70 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <span className="text-2xl font-semibold tracking-tight text-indigo-600">Logo</span>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center py-14 px-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              URL Shortener
            </h2>
            <p className="text-lg text-slate-500 tracking-wide">
              Create concise, memorable links with just one click
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <form className="w-full">
              <div className="flex w-full overflow-hidden">
                <input
                  type="url"
                  placeholder="https://url.address"
                  className="flex-grow py-3 px-5 text-md border border-slate-200 focus:border-indigo-400 outline-none rounded-l-lg bg-slate-50 transition"
                  required
                />
                <button
                  type="submit"
                  className="py-3 px-8 font-semibold text-md bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md"
                >
                  Shorten
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-7 px-2">
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Lightning Fast"
            description="Instant redirects for seamless user experience"
          />
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            title="Secure"
            description="Your links are safe and protected"
          />
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            title="Analytics"
            description="Track clicks and traffic with ease"
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-slate-100 flex flex-col items-center transition hover:shadow-lg hover:-translate-y-1">
      <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm text-center">{description}</p>
    </div>
  );
}
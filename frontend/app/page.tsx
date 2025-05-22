// app/page.tsx (Next.js 13+ using App Router)

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h1>
        <p className="text-gray-600 mb-6">
          This is a simple page styled with Tailwind CSS.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}

import React from "react";

export default function App() {
  return (
    <div className="font-sans text-center">
      <header className="bg-red-600 p-4 text-xl font-bold shadow-md">
        جندوبة سبور
      </header>
      <main className="p-6">
        <h1 className="text-3xl text-red-500 mb-4">مرحبا بكم في الموقع الرسمي لجندوبة سبور</h1>
        <p className="text-lg">
          هنا ستجدون آخر الأخبار، المباريات، والنتائج الخاصة بفريق جندوبة سبور.
        </p>
      </main>
      <footer className="bg-gray-900 p-4 mt-6 text-sm">
        © {new Date().getFullYear()} جندوبة سبور - جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

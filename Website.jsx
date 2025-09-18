import React from "react";

export default function Website() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-5xl mx-auto flex items-center justify-between py-6">
        <h1 className="text-2xl font-extrabold">نام برند شما</h1>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">درباره</a>
          <a href="#services" className="hover:underline">خدمات</a>
          <a href="#contact" className="hover:underline">تماس</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="rounded-2xl bg-white p-10 shadow-md">
          <h2 className="text-3xl font-bold mb-4">سلام! من وب‌سایت شما هستم.</h2>
          <p className="text-gray-700 leading-relaxed">
            این یک قالب نمونه است که می‌توانید سریع تغییرش بدید. 
            شامل هِرُو، بخش خدمات، نمونه‌کارها و فرم تماس است.
          </p>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} برند شما — همه حقوق محفوظ است.
      </footer>
    </div>
  );
}

// app/not-found.tsx

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a]">
      <h1 className="text-4xl font-bold text-red-500">
        404 - Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 text-gray-200">Ups! Kayaknya kamu nyasar.</p>
      <a href="/" className="mt-6 text-blue-500 underline">
        Balik ke Beranda
      </a>
    </div>
  );
}

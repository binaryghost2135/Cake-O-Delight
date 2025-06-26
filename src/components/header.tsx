export function Header() {
  return (
    <header className="p-6 shadow-xl rounded-b-[40px] bg-gradient-to-r from-primary via-[#FFC4D6] to-[#FF9FB5] relative z-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white tracking-wide [text-shadow:2px_2px_4px_rgba(0,0,0,0.1)]">
          SweetSlice
        </h1>
      </nav>
    </header>
  );
}

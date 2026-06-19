export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-24 text-center font-sans">

      {/* Primary */}
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </p>

      {/* Secondary / credit */}
      <span className="text-[11px] text-gray-400">
        Built by Full Stack Developer — Wakuma Hailu
      </span>

    </div>
  );
}
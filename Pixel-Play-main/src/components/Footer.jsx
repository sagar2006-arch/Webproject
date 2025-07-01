import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="relative py-6 md:px-8 md:py-6 bg-black text-white border-t border-gray-800">
      {/* Footer text */}
      <div>
        Built by <span className="text-amber-600">Team Pixel</span>. The source code is available on{" "}
        <a
          href="https://github.com/raj761132"
          className="underline text-amber-600"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>.
      </div>

      {/* Help Button pinned inside footer */}
      <button
        onClick={() => navigate("/help")}
        className="absolute right-4 bottom-4 text-white bg-amber-600 hover:bg-amber-700 px-3 py-2 rounded-md text-sm"
      >
        Help & Support
      </button>
    </footer>
  );
};

export default Footer;

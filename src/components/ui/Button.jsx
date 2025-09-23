export function Button({ children, onClick, className, variant = "default" }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-semibold text-white shadow-md transition-all duration-200 ${
        variant === "destructive"
          ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
          : "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700"
      } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 ${className}`}
    >
      {children}
    </button>
  );
}
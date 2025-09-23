export function Badge({ children, className, category }) {
  const categoryStyles = {
    Work: "bg-blue-100 text-blue-800 border-blue-300",
    Personal: "bg-green-100 text-green-800 border-green-300",
    Shopping: "bg-purple-100 text-purple-800 border-purple-300",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${categoryStyles[category] || "bg-gray-100 text-gray-800 border-gray-300"} ${className}`}
    >
      {children}
    </span>
  );
}
export function Card({ children, className }) {
  return (
    <div
      className={`border border-gray-200 rounded-lg p-5 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </div>
  );
}
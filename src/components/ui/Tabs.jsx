export function Tabs({ value, onChange, tabs, className = "" }) {
  return (
    <div className={`flex space-x-6 border-b border-gray-200 ${className}`}>
      {tabs?.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`relative px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
            value === tab.value
              ? "text-indigo-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-600 after:content-['']"
              : "text-gray-600 hover:text-indigo-500"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

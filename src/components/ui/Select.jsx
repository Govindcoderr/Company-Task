export function Select({ value, onChange, options, className }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 text-gray-800 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:border-indigo-300 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23666%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%20/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
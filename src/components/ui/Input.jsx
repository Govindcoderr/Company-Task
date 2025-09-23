export function Input({ value, onChange, placeholder, className, ...props }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 text-gray-800 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:border-indigo-300 ${className}`}
      {...props}
    />
  );
}
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// export function Input({ value, onChange, placeholder, className, ...props }) {
//   return (
//     <div className="flex w-full max-w-sm items-center gap-2">
//       <Input type="email" 
//       value={value}
//       onSumit={onChange}
//       placeholder={placeholder}
//       className={`border border-gray-200 rounded-lg px-4 py-2.5 bg-gray-50 text-gray-800 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:border-indigo-300 ${className}`}
//       {...props} />
//       <Button type="submit" variant="outline">
//         Add Task
//       </Button>
//     </div>
//   )
// }

import { Tabs } from "./ui/Tabs";

function TaskFilters({ filter, setFilter, tabs }) {
  // Log filter change for debugging (remove in production)
  const handleFilterChange = (value) => {
    console.log("Setting filter to:", value);
    setFilter(value);
  }; 

  return <Tabs value={filter} onChange={handleFilterChange} tabs={tabs} className="mb-4" />;
}

export default TaskFilters;

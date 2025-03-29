
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd implement search functionality here
    console.log("Search for:", searchQuery);
    setIsOpen(false);
  };

  const popularSearches = [
    "Web Development", 
    "Python", 
    "Data Science", 
    "JavaScript", 
    "React", 
    "Marketing"
  ];

  return (
    <div className="relative flex-grow max-w-md mx-4">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="search"
          placeholder="Search for anything"
          className="w-full pl-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-education-500 focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Button 
          type="submit" 
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-education-600 hover:bg-education-700 rounded-full h-8 w-8 p-0"
        >
          <Search className="h-4 w-4 text-white" />
        </Button>
      </form>

      <Popover open={isOpen && searchQuery.length > 0} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div />
        </PopoverTrigger>
        <PopoverContent className="w-full p-2 mt-1" align="start">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 px-2">Popular searches</p>
            {popularSearches.map((term) => (
              <div 
                key={term} 
                className="px-2 py-1.5 hover:bg-gray-100 rounded cursor-pointer text-gray-700"
                onClick={() => {
                  setSearchQuery(term);
                  setIsOpen(false);
                }}
              >
                {term}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;

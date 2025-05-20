import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

// create search input component at POS page
export const InputSearchMenu = () => {
  return (
    <div className="flex flex-row w-full bg-background-primary rounded-md h-12 items-center px-sm gap-x-xs">
      <Input
        className="border-0 rounded-md h-full placeholder:text-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Search something sweet on your mind..."
      />
      <Button variant="icon-rounded" size="icon" className="p-sm">
        <Search size={17} />
      </Button>
    </div>
  );
};

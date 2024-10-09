import { Link } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";
import { UserCircle2, UserPlus2 } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="flex justify-evenly">
      <div className="mt-1 self-center">
        <UserCircle2 className="h-6 w-6" />
      </div>

      <div className="mt-1">
        <Link to="/dashboard">
          <Button variant="outline">All Users</Button>
        </Link>
      </div>

      <div className="mt-1">
        <Link to="/dashboard/create-user">
          <Button variant="outline" size="icon">
            <UserPlus2 className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

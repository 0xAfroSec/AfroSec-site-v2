import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  return (
    <div className="">
      <header className="sticky top-0 flex h-16 items-center gap-4  bg-background px-16 md:px-16">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="flex items-center gap-2 text-black font-bold">
            <img src={logo} alt="Logo" className="h-12 rounded-full" />
            <p>0xAfroSec</p>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <div className="flex items-center gap-2 text-black font-bold">
                <img src="" alt="Logo" className="h-6 w-6" />
                <span>0xAfroSec</span>
              </div>
              <NavLink to="/services" className="hover:text-foreground">
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
        <nav
          id="topnav"
          className="flex font-medium items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ml-auto flex-1 sm:flex-initial"
        >
          <NavLink
            to="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            &lt;Home &#47;&gt;
          </NavLink>
          <NavLink
            to="/services"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            &lt;Services &#47;&gt;
          </NavLink>
          <NavLink
            to="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            &lt;Contact &#47;&gt;
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

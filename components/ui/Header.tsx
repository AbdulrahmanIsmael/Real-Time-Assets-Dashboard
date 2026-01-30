import Logo from "@/components/shared/Logo";
import Navbar from "@/components/ui/Navbar";

const Header = () => {
  return (
    <header className="bg-navbar-bg py-3 border-b border-borders drop-shadow">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-y-5 justify-center lg:justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;

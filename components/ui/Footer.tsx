import Logo from "@/components/shared/Logo";

const Footer = () => {
  return (
    <footer className="bg-navbar-bg py-3 border-t border-borders drop-shadow text-center">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <p className="text-lg font-medium">
          &copy; {new Date().getFullYear()} Abdulrahman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Logo from "@/components/shared/Logo";
import { cacheLife } from "next/cache";

const Footer = async () => {
  "use cache";
  cacheLife({ stale: 3600, revalidate: 86400, expire: 86400 });

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

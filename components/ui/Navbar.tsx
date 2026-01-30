"use client";

import { useEffect, useState } from "react";

import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import Link from "next/link";
import darkImg from "@/public/assets/icons/dark.png";
import darkUserImg from "@/public/assets/icons/user-dark.png";
import lightImg from "@/public/assets/icons/light.png";
import useTheme from "@/hooks/useTheme";
import userImg from "@/public/assets/icons/user.png";

const Navbar = () => {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const closeMenuHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn")) {
        if (showMenu) setShowMenu(false);
      }
    };

    document.body.addEventListener("click", closeMenuHandler);
    return () => document.removeEventListener("click", closeMenuHandler);
  }, [showMenu]);

  return (
    <nav>
      <ul className="flex flex-wrap items-center justify-center gap-y-6 gap-x-10">
        <li>
          <Button
            type="button"
            aria-label="dork mode toggler"
            style="p-1.5 border-1 border-borders rounded-4xl"
            onClickHandler={toggleTheme}
          >
            <Icon
              srcLight={darkImg}
              srcDark={lightImg}
              isDark={theme}
              title="Dark mode toggler"
              size={23}
            />
          </Button>
        </li>
        <li>
          <Button
            type="button"
            style="menu-btn relative cursor-pointer flex items-center justify-center gap-x-3 text-center active:scale-100!"
            onClickHandler={(event) => {
              event.stopPropagation();
              setShowMenu((prev) => !prev);
            }}
          >
            <Icon
              srcLight={userImg}
              srcDark={darkUserImg}
              isDark={theme}
              title="User profile"
              size={23}
            />
            <span className="text-lg font-medium">Abdulrahman ismael</span>
            <span className="text-[9px]">&#x25BC;</span>
            {showMenu && (
              <div className="absolute -bottom-32 bg-navbar-bg w-full text-left border border-t-0">
                <ul className="flex flex-col">
                  {["prtfolio", "Settings", "Log out"].map((l, i) => (
                    <li
                      key={i}
                      className="py-2 not-last-of-type:border-b  text-sm font-semibold pl-2 border-borders"
                    >
                      <Link href="/">{l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

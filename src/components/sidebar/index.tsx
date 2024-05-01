"use client";

import { usePathname } from "next/navigation";
import ZapifyLogo from "../global/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="flex h-screen flex-col items-center
    justify-start gap-10 overflow-scroll px-2 py-6  dark:bg-black"
    >
      <div className="flex flex-col items-center justify-center">
        <ZapifyLogo />
      </div>
      <ul className="flex flex-col items-center gap-6">
        {menuOptions.map((menu) => {
          const selected = pathname === menu.href;
          return (
            <TooltipProvider key={menu.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menu.href}
                      className={cn(
                        "group flex h-8 w-8 scale-[1.5] items-center justify-center rounded-lg p-[3px]",
                        selected ? "bg-[#EEE0FF] dark:bg-[#2F006B]" : "",
                      )}
                    >
                      <menu.Component selected={selected} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent>{menu.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;

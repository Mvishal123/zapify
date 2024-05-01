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
import { Separator } from "@/components/ui/separator";
import {
  CloudLightning,
  Database,
  GitBranch,
  MousePointerClick,
} from "lucide-react";
import { ModeToggle } from "../global/theme-toggle";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="flex h-screen flex-col items-center
    justify-between gap-6 overflow-scroll px-2 py-6  dark:bg-black"
    >
      <div className="flex flex-col items-center justify-center">
        <ZapifyLogo className="text-xl" />
      </div>
      <ul className="flex flex-col items-center gap-4">
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
                        "group flex h-8 w-8 scale-[1.2] items-center justify-center rounded-lg p-[3px] md:scale-[1.2]",
                        selected ? "bg-[#EEE0FF] dark:bg-[#2F006B]" : "",
                      )}
                    >
                      <menu.Component selected={selected} />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent side="right">{menu.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </ul>
      <Separator />
      <div className="h-60 overflow-scroll rounded-full px-2 py-2 dark:bg-[#353346]/40">
        <div className="relative rounded-full border-[1px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
          <MousePointerClick className="dark:text-white" size={12} />
          <div className="absolute bottom-[-30px] left-1/2 h-6 -translate-x-1/2 border-l-[1px] dark:border-l-white/30"></div>
        </div>
        <div className="relative mt-[34px] rounded-full border-[-30px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
          <GitBranch className="dark:text-white" size={12} />
          <div className="absolute bottom-[-30px] left-1/2 h-6 -translate-x-1/2 border-l-[1px] dark:border-l-white/30"></div>
        </div>
        <div className="relative mt-[34px] rounded-full border-[-30px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
          <Database className="dark:text-white" size={12} />
          <div className="absolute bottom-[-30px] left-1/2 h-6 -translate-x-1/2 border-l-[1px] dark:border-l-white/30"></div>
        </div>
        <div className="relative mt-[34px] rounded-full border-[-30px] p-2 dark:border-t-[2px] dark:border-t-[#353346] dark:bg-[#353346]/70">
          <CloudLightning className="dark:text-white" size={12} />
        </div>
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Sidebar;

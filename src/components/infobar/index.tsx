"use client";
import React from "react";
import { Input } from "../ui/input";
import { Book, Headphones, Phone, Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Infobar = () => {
  return (
    <div className="flex items-center justify-end gap-6 px-6 py-3 dark:bg-black">
      <div className="relative">
        <Input
          className="w-60 rounded-full border-none bg-muted pl-10"
          placeholder="quick search..."
        />
        <Search className="absolute left-2 top-1/2 -translate-y-1/2" />
      </div>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Phone size={20}/>
          </TooltipTrigger>
          <TooltipContent>Support</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book size={20}/>
          </TooltipTrigger>
          <TooltipContent>Guide</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Infobar;

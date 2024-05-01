import { Menu } from "lucide-react";
import Link from "next/link";
import ZapifyLogo from "./logo";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 z-[100] flex items-center justify-between border-b-[1px] border-neutral-900 bg-black/40 px-6 py-5 backdrop-blur-lg">
      <aside className="flex items-center">
        <ZapifyLogo />
      </aside>
      <nav className="hidden shrink-0 md:flex">
        <ul className="flex gap-3 lg:gap-6">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="max-md:flex max-md:items-center max-md:gap-3">
        <Link
          href={true ? "/dashboard" : "/signup"}
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Border Magic
          </span>
        </Link>
        <Menu className="h-8 w-8 md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;

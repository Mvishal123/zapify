import Image from "next/image";
import Link from "next/link";
import React from "react";

const ZapifyLogo = () => {
  return (
    <Link href="/" className="flex items-center">
      <p className="text-2xl font-semibold">Zapif</p>
      <Image
        src={"/zap.png"}
        alt="zapify-log"
        width={215}
        height={402}
        className="h-6 w-4"
      />
    </Link>
  );
};

export default ZapifyLogo;

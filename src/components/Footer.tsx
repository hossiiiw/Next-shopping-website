import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="p-4 flex flex-col items-center justify-center  font-bold text-white bg-sky-400">
        <h1>Crerate by Hossiiw</h1>
        <Link href="tel:09142983383">09142983383</Link>
        <Link href="https://github.com/hossiiiw">Github</Link>
      </div>
    </footer>
  );
}

export default Footer;

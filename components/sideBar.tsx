import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankSideBar = () => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          rel="stylesheet"
          href="/"
          className="flex mb-6 items-center cursor-pointer gap-1"
        >
          <Image
            src={"icons/logo.svg"}
            alt="logo"
            width={34}
            height={34}
            className="size-8 max-xl:size-12"
          />
          <h1 className="sidebar-logo">
            Horizin
            </h1>
        </Link>
      </nav>
    </section>
  );
};

export default BankSideBar;

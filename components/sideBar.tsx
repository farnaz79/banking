'use client'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BankSideBar = () => {

  const pathName = usePathname()

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
          <h1 className="sidebar-logo">Horizin</h1>
        </Link>
        {sidebarLinks.map((items) => {
          const isActive = pathName === items.route || pathName
          .startsWith(`${items.route}/`)
          return (
            <Link href={items.route} key={items.label} 
            className={cn('sidebar-link' , {'bg-bank-gradient' : isActive})}>
              <div className="relative size-6"> 
                <Image src={items.imgURL} alt={items.label} fill 
                className={cn({'brightness-[3] invert-0' : isActive})}
                />
              </div>
              <p  className={cn('sidebar-lable text-black-1' , {'text-white' : isActive})}>
              {items.label}
              </p>
              <p>
                asklslkd
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default BankSideBar;

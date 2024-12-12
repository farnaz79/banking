import BankSideBar from "@/components/sideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName : 'Farnaz' , lastName : 'zarei'}
  
  return (
   <main className="h-screen w-full flex font-inter">
    <BankSideBar />
    <div className="flex size-full flex-col">
      <div className="root-layout" >
        <Image src='/icons/logo.svg' width={30} height={30} alt='menu' />
        <div>
          
        </div>
      </div>

    </div>
    {children}
   </main>
  );
}

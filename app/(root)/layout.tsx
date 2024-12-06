import BankSideBar from "@/components/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName : 'Farnaz' , lastName : 'zarei'}
  
  return (
   <main className="h-screen w-full flex font-inter">
    <BankSideBar />
    {children}
   </main>
  );
}

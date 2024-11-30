
import HeaderBox from "@/components/HeaderBox";
import TotalBalencBox from "@/components/TotalBalencBox";

const Sidebar = () => {
  const loggedIn = { firstName: "Farnaz" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />
          <TotalBalencBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Sidebar;

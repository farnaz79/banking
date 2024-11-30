import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const TotalBalencBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balence-chart"></div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts : {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>  
          <p className="total-balence-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalencBox;

import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div className="content">
      {/* {accounts.map((table, i) => ( */}
      <Account account={accounts[1]} />
      {/* ))} */}
    </div>
  );
};

export default Accounts;

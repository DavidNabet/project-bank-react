import Account from "./Account";

const Accounts = ({ accounts }) => {
  return (
    <div className="content">
      {accounts.map((table, i) => (
        <Account key={i} account={table} />
      ))}
    </div>
  );
};

export default Accounts;

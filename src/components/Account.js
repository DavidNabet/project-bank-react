const Account = ({ account }) => {
  const { name, balance, color, operations } = account;
  return (
    <>
      <table>
        <thead style={{ backgroundColor: color }}>
          <tr>
            <th>{name}</th>
            <th></th>
            <th>{balance} €</th>
          </tr>
        </thead>
        <tbody>
          {operations.map(({ date, description, amount }, i) => (
            <tr key={i}>
              <td>{date}</td>
              <td>{description}</td>
              <td className="monospace">{`${amount.toFixed(2)}€`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Account;

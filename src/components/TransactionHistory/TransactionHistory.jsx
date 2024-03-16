import  css from"./TransactionHistory.module.css";
const Transaction = ({type, amount, currency}) =>{
    return(
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

const TransactionHistory = ({ items }) => {
    return (
      <table className={css.transactionHistoryTable}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TransactionHistory;
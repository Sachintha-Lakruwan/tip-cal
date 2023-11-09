export function Amount({ bill, onBill }) {
  return (
    <div>
      <h4>How much was the bill?</h4>
      <input
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

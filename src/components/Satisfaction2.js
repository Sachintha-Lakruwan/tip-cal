export function Satisfaction2({ setTip, tip }) {
  return (
    <div>
      <h4>How did you like the service?</h4>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>0%</option>
        <option value={5}>5%</option>
        <option value={10}>10%</option>
        <option value={15}>15%</option>
        <option value={20}>20%</option>
      </select>
    </div>
  );
}

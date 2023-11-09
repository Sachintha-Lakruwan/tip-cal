export function Output({ tip, bill }) {
  return (
    <div className="bottom-text">
      <h3>
        Your bill is ${bill + tip} (${bill} + ${tip})
      </h3>
    </div>
  );
}

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total: {total}</li>
        <li>positive feedback:{positive} %</li>
      </ul>
    </>
  );
};

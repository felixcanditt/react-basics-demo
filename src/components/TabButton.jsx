export default function TabButton({ title, onShowNumber }) {
  return (
    <li>
      <button onClick={onShowNumber}>{title}</button>
    </li>
  );
}

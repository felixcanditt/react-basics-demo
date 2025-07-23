export default function TabButton({ title, onShowNumber, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onShowNumber}>
        {title}
      </button>
    </li>
  );
}

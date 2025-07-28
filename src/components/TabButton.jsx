export default function TabButton({ title, onHandleClick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onHandleClick}>
        {title}
      </button>
    </li>
  );
}

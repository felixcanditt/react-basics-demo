export default function TabButton({ title, onShowNumber, onClickedTab, id }) {
  return (
    <li>
      <button
        className={onClickedTab === id ? 'active' : ''}
        onClick={onShowNumber}
      >
        {title}
      </button>
    </li>
  );
}

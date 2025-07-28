export default function TabButton({ title, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {title}
      </button>
    </li>
  );
}

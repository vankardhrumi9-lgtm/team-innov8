export default function Button({ children, active = false, ...props }) {
  return (
    <button className={`button ${active ? 'button--active' : ''}`} {...props}>
      {children}
    </button>
  );
}

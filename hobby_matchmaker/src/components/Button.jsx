export default function Button({ children, active = false, featured = false, ...props }) {
  return (
    <button
      className={`button ${active ? 'button--active' : ''} ${featured ? 'button--featured' : ''}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

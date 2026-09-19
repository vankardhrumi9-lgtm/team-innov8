import Button from './Button';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'discover', label: 'Discover' },
  { id: 'community', label: 'Community' },
  { id: 'events', label: 'Events' },
  { id: 'my-match', label: 'My Match' },
];

export default function Navbar({ activePage, onNavigate }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate('home')} aria-label="Go to home">
        <span className="brand-mark" aria-hidden="true">
          ✦
        </span>
        <span className="brand-text">Aatmoday</span>
        <span className="brand-pill">match</span>
      </button>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <Button
            key={link.id}
            active={activePage === link.id}
            featured={link.id === 'my-match'}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </Button>
        ))}
      </nav>
    </header>
  );
}

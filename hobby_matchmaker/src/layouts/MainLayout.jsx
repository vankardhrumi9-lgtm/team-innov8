import Navbar from '../components/Navbar';

export default function MainLayout({ activePage, onNavigate, children }) {
  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={onNavigate} />
      <main className="app-content">{children}</main>
    </div>
  );
}

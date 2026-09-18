import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Community from './pages/Community';
import Events from './pages/Events';
import MyMatch from './pages/MyMatch';

const pages = {
  home: Home,
  discover: Discover,
  community: Community,
  events: Events,
  'my-match': MyMatch,
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const Page = pages[activePage];

  return (
    <MainLayout activePage={activePage} onNavigate={setActivePage}>
      <Page />
    </MainLayout>
  );
}

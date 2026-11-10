import { Outlet } from 'react-router-dom';
import AnnouncementBar from '../common/AnnouncementBar';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-h-dvh bg-off-white text-charcoal">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 w-full pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

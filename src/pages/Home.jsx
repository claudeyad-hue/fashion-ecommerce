import HeroSection from '../components/home/HeroSection';
import CategoryGrid from '../components/home/CategoryGrid';
import TrendingSection from '../components/home/TrendingSection';
import BestSellers from '../components/home/BestSellers';
import NewArrivals from '../components/home/NewArrivals';
import FeaturedCollection from '../components/home/FeaturedCollection';
import PromoBanner from '../components/home/PromoBanner';
import Testimonials from '../components/home/Testimonials';
import BrandStory from '../components/home/BrandStory';

const Home = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Campaign */}
      <HeroSection />

      {/* 2. Shop by Category */}
      <CategoryGrid />

      {/* 3. Trending Now */}
      <TrendingSection />

      {/* 4. Best Sellers */}
      <BestSellers />

      {/* 5. Featured Collection Spotlight */}
      <FeaturedCollection />

      {/* 6. New Arrivals */}
      <NewArrivals />

      {/* 7. Promotional Campaign Banner */}
      <PromoBanner />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Brand Philosophy & Craftsmanship */}
      <BrandStory />
    </div>
  );
};

export default Home;

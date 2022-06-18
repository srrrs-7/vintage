import type { NextPage } from 'next';
import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import MovieSlider from '../components/MovieSlider';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <MovieSlider />
      </div>
    </div>
  );
};

export default Home;

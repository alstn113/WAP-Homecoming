import { Contents } from './components/Contents';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Image from './components/Image/Image';
import { MainLayout } from './components/MainLayout';
import { Map } from './components/Map';
import { Schedule } from './components/Schedule';

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Contents />
      <Schedule />
      <Image />
      <Map />
      <Footer />
    </MainLayout>
  );
};

export default App;

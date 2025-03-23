import React, { useState, useEffect } from 'react';
import NavbarProfile from '../components/navbar/NavbarProfile';
import IntroStart from '../components/homeComponent/IntroStart';
import Section from '../components/homeComponent/Section';
import Tabs from '../components/homeComponent/Tabs';
import CardList from '../components/homeComponent/CardList';
import IntroEnd from '../components/homeComponent/IntroEnd';
import Footer from '../components/homeComponent/Footer';
import useAuthStore from '../store/authstore';
import { useNavigate } from 'react-router-dom';


const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {children}
  </div>
);

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subs, setSubs] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe(e);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email harus diisi');
      return
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email tidak valid');
      setSubs('')
      return
    } else {
      setSubs('Terimakasih sudah berlangganan ')
      return
    }
  };

  return (
    <div className="overflow-x-hidden">

      {/* Navbar */}
      <NavbarProfile text="Kategori" imageName="Avatar.png" />

      {/* Main Content */}
      <Container>
        <IntroStart
          title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          desc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          buttonText="Temukan Video Course untuk Dipelajari!"
        />

        <Section
          title="Koleksi Video Pembelajaran Unggulan"
          text="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />

        <Tabs
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
        />

        <div className="flex flex-wrap justify-center gap-6 pb-8">
          <CardList />
        </div>

        <IntroEnd
          title="Mau Belajar Lebih Banyak?"
          text="NEWSLETTER"
          desc="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
          buttonText="Subscribe"
          name='email'
          value={email}
          type={email}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onClick={handleSubscribe}

          error={error}
          subs={subs}
        />
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}
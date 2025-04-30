import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Particles from '../Components/Particles';
import { motion } from 'framer-motion';
import SplitText from '../Components/SplitText';
import DecryptedText from '@/Components/DecryptedText';
import Magnet from '@/Components/Magnet';
import Orb from '../Components/Orb';
import RotatingText from '@/Components/RotatingText';
import CircularGallery from '@/Components/CircullarGallery';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Stepper, { Step } from '@/Components/Stepper';
import InfiniteMenu
  from '@/Components/InfinityMenu';
export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: '#',
      title: 'Rina, Owner Online Shop',
      description: '"Tim WeDev sangat profesional! Website saya selesai tepat waktu dan tampilannya keren banget!"',
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: '#',
      title: 'Budi, Konsultan Bisnis',
      description: '"Puas banget! Mereka bantu dari nol sampai website saya live. Recommended banget!"',
    }

  ];

  const [inView, setInView] = useState(false);

  const observer = (node) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Akan trigger saat 10% elemen terlihat
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    };

    const observerInstance = new IntersectionObserver(callback, options);
    if (node) {
      observerInstance.observe(node);
    }

    return () => {
      if (node) observerInstance.unobserve(node);
    };
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <motion.div className="text-2xl font-bold text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <motion.span className="font-sans" initial={{ x: 0 }} animate={{ x: 10 }} transition={{ type: 'spring', stiffness: 200 }}>
                  WerDev
                </motion.span>
              </motion.div>
              <motion.div className="inline-flex items-center px-3 py-1 bg-cyan-300 text-black rounded-lg font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <RotatingText
                  texts={['Anjay', 'Bits', 'Is', 'Cool!']}
                  mainClassName="text-black font-sans inline-flex items-center px-2 sm:px-2 md:px-3 justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.div>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-blue-400">Home</Link>
              <a href="#layanan" className="text-white hover:text-blue-400">Services</a>
              <a href="#portofolio" className="text-white hover:text-blue-400">Portfolio</a>
              <a href="#kontak" className="text-white hover:text-blue-400">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">☰</button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black text-white px-4 pb-4 space-y-2">
            <Link href="/" className="block hover:text-blue-400">Home</Link>
            <a href="#layanan" className="block hover:text-blue-400">Services</a>
            <a href="#portofolio" className="block hover:text-blue-400">Portfolio</a>
            <a href="#kontak" className="block hover:text-blue-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative h-screen w-full overflow-hidden bg-black">
        <Particles particleColors={['#00d1ff', '#ffffff']} particleCount={200} particleSpread={10} speed={0.2} particleBaseSize={120} moveParticlesOnHover alphaParticles disableRotation={false} />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
          <SplitText
            text="Kami Bangun Website Impian Anda"
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translateY(40px)' }}
            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
          />
          <div className='text-lg md:text-xl text-white/80 mb-6 max-w-xl drop-shadow-md'>
            <DecryptedText text="This text animates when in view" animateOn="view" revealDirection="center" />
          </div>
          <Magnet padding={100} magnetStrength={10}>
            <Link href="#kontak" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-lg inline-block">Hubungi Kami</Link>
          </Magnet>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <Orb hoverIntensity={0.5} rotateOnHover hue={0} forceHoverState={false} style={{ width: '100%', height: '100%' }} />
        </div>
      </header>

      {/* Gallery Section */}
      <section id="layanan" className="bg-black py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Layanan Unggulan Kami</h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <Particles particleColors={['#00d1ff', '#ffffff']} particleCount={200} particleSpread={10} speed={0.2} particleBaseSize={120} moveParticlesOnHover alphaParticles disableRotation={false} />
      </section>

      {/* Stepper Section */}
      <section className="relative pt-12 pb-16 stepper-container">
        <Particles className="stepper-particles" particleColors={['#00d1ff', '#ffffff']} particleCount={200} particleSpread={10} speed={0.2} particleBaseSize={120} moveParticlesOnHover alphaParticles disableRotation={false} />
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Isi Data Project Anda</h2>
          <Stepper initialStep={1}>
            <Step><h2>Welcome to the React Bits stepper!</h2><p>Check out the next step!</p></Step>
            <Step><h2>Step 2</h2><p>Custom step content!</p></Step>
            <Step><h2>Step 3</h2><input placeholder="Your name?" /></Step>
            <Step><h2>Final Step</h2><p>You made it!</p></Step>
          </Stepper>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Paket Harga</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            ref={observer}
            className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-500 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
          >
            <h3 className="text-xl font-bold mb-4">Basic</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">Rp 1.500.000</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>✔ Website Company Profile</li>
              <li>✔ Mobile Responsive</li>
              <li>✔ 3 Halaman</li>
            </ul>
          </div>

          <div
            ref={observer}
            className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-500 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
          >
            <h3 className="text-xl font-bold mb-4">Pro</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">Rp 3.000.000</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>✔ Semua fitur Basic</li>
              <li>✔ SEO Optimization</li>
              <li>✔ 6 Halaman</li>
            </ul>
          </div>

          <div
            ref={observer}
            className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md transition-transform duration-500 ease-in-out ${inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
          >
            <h3 className="text-xl font-bold mb-4">Custom</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">Hubungi Kami</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>✔ Fitur sesuai kebutuhan</li>
              <li>✔ Desain eksklusif</li>
              <li>✔ Konsultasi gratis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kenapa Kami */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Kenapa Memilih Kami?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow-md"><h3 className="text-xl font-semibold mb-2">Fast Development</h3><p className="text-gray-400">Pengerjaan cepat tanpa mengorbankan kualitas.</p></div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md"><h3 className="text-xl font-semibold mb-2">Modern Design</h3><p className="text-gray-400">Desain elegan dan responsif sesuai tren UI/UX.</p></div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md"><h3 className="text-xl font-semibold mb-2">SEO Friendly</h3><p className="text-gray-400">Website mudah ditemukan di mesin pencari.</p></div>
        </div>
      </section>

      {/* Testimoni Section menggunakan InfiniteMenu
        <section className="bg-black text-white py-20 text-center px-4">
          <h2 className="text-3xl font-bold mb-10">Apa Kata Klien Kami</h2>
          <div style={{ height: '600px', position: 'relative' }}>
            <InfiniteMenu items={items} />
          </div>
        </section> */}

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center px-4" id="kontak">
        <h2 className="text-3xl font-bold mb-4">Siap Bangun Website Impian Anda?</h2>
        <p className="mb-6 max-w-2xl mx-auto">Kami siap membantu Anda mulai dari perencanaan hingga website live dan siap digunakan.</p>
        <a href="#kontak" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Konsultasi Gratis</a>
      </section>

      {/* Sosial Media */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Ikuti Kami di Sosial Media</h2>
        <div className="flex justify-center gap-6 text-white text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm">
        © 2025 MyStartup — Jasa Pembuatan Website Profesional.
      </footer>
    </div>
  );
}

// resources/js/Pages/Landing.jsx

// import Layout from '@/Layouts/Layout';
import Particles from '../Components/Particles';
import CircularGallery from '@/Components/CircullarGallery';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Stepper, { Step } from '@/Components/Stepper'; 

export default function Landing() {
  return (
    <Layout>
       
      {/* Circular Gallery Section */}
      <section className="bg-black py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Layanan Unggulan Kami
        </h2>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <Particles
          particleColors={['#00d1ff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </section>

      {/* Keunggulan Kami */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Kenapa Memilih Kami?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
            <p className="text-gray-400">Pengerjaan cepat tanpa mengorbankan kualitas.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-400">Desain elegan dan responsif sesuai tren UI/UX.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">SEO Friendly</h3>
            <p className="text-gray-400">Website mudah ditemukan di mesin pencari.</p>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-black text-white py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-10">Apa Kata Klien Kami</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl mb-6">
            <p className="text-gray-300 italic">
              "Tim WeDev sangat profesional! Website saya selesai tepat waktu dan tampilannya keren banget!"
            </p>
            <p className="mt-4 font-semibold text-blue-400">– Rina, Owner Online Shop</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <p className="text-gray-300 italic">
              "Puas banget! Mereka bantu dari nol sampai website saya live. Recommended banget!"
            </p>
            <p className="mt-4 font-semibold text-blue-400">– Budi, Konsultan Bisnis</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Siap Bangun Website Impian Anda?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Kami siap membantu Anda mulai dari perencanaan hingga website live dan siap digunakan.
        </p>
        <a
          href="#kontak"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Konsultasi Gratis
        </a>
      </section>



      {/* Sosial Media */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Ikuti Kami di Sosial Media</h2>
        <div className="flex justify-center gap-6 text-white text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
        </div>
      </section>




    </Layout>
  );
}

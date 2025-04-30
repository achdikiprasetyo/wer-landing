import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Particles from '../Components/Particles';
import { motion } from 'framer-motion';
import SplitText from '../Components/SplitText';
import DecryptedText from '@/Components/DecryptedText';
import Magnet from '@/Components/Magnet';
import Orb from '../Components/Orb';
import RotatingText from '@/Components/RotatingText';
import Stepper, { Step } from '@/Components/Stepper';



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        {/* Teks "wedev" dengan animasi gerak */}
                        <motion.div
                            className="text-2xl font-bold text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <motion.span
                                className="font-sans" // Sesuaikan font dengan font "wedev"
                                initial={{ x: 0 }}
                                animate={{ x: 10 }} // Menggerakkan "wedev" sedikit saat teks berubah
                                transition={{ type: 'spring', stiffness: 200 }}
                            >
                                WerDev
                            </motion.span>
                        </motion.div>

                        {/* Rotating Text dengan ukuran kotak yang dinamis */}
                        <motion.div
                            className="inline-flex items-center px-3 py-1 bg-cyan-300 text-black rounded-lg font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
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
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-white hover:text-blue-400">Home</Link>
                        <a href="#layanan" className="text-white hover:text-blue-400">Services</a>
                        <a href="#portofolio" className="text-white hover:text-blue-400">Portfolio</a>
                        <a href="#kontak" className="text-white hover:text-blue-400">Contact</a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black text-white px-4 pb-4 space-y-2">
                    <Link href="/" className="block hover:text-blue-400">Home</Link>
                    <a href="#layanan" className="block hover:text-blue-400">Services</a>
                    <a href="#portofolio" className="block hover:text-blue-400">Portfolio</a>
                    <a href="#kontak" className="block hover:text-blue-400">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default function Layout({ children }) {

        return (
            <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
                <Navbar />
    
                {/* Hero Section */}
                <header className="relative h-screen w-full overflow-hidden bg-black">
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
    
                    {/* Text Above the Orb */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
                        <SplitText
                            text="Kami Bangun Website Impian Anda"
                            className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
                            delay={50}
                            animationFrom={{ opacity: 0, transform: 'translateY(40px)' }}
                            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
                        />
                        <div className='text-lg md:text-xl text-white/80 mb-6 max-w-xl drop-shadow-md'>
                            <DecryptedText
                                text="This text animates when in view"
                                animateOn="view"
                                revealDirection="center"
                            />
                        </div>
                        <Magnet padding={100} magnetStrength={10}>
                            <Link
                                href="#kontak"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 shadow-lg inline-block"
                            >
                                Hubungi Kami
                            </Link>
                        </Magnet>
                    </div>
    
                    {/* Orb Section */}
                    <div className="absolute inset-0 flex justify-center items-center z-20">
                        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
                            <Orb
                                hoverIntensity={0.5}
                                rotateOnHover={true}
                                hue={0}
                                forceHoverState={false}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                </header>
    
                <section className="relative pt-12 pb-16 stepper-container">
  {/* Particles for Stepper Section */}
  <Particles
    className="stepper-particles"
    particleColors={['#00d1ff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.2}
    particleBaseSize={120}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={false}
  />

  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-white mb-6">Isi Data Project Anda</h2>
    <Stepper
      initialStep={1}
      onStepChange={(step) => console.log(step)}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      <Step>
        <h2>Welcome to the React Bits stepper!</h2>
        <p>Check out the next step!</p>
      </Step>
      <Step>
        <h2>Step 2</h2>
        <img
          style={{
            height: '100px',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center -70px',
            borderRadius: '15px',
            marginTop: '1em',
          }}
          src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
        />
        <p>Custom step content!</p>
      </Step>
      <Step>
        <h2>How about an input?</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name?" />
      </Step>
      <Step>
        <h2>Final Step</h2>
        <p>You made it!</p>
      </Step>
    </Stepper>
  </div>
</section>

    
    
            


            {/* Konten Dinamis */}
            <main className="flex-grow">{children}</main>


            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 text-center text-sm">
                © 2025 MyStartup — Jasa Pembuatan Website Profesional.
            </footer>
        </div>
    );
}

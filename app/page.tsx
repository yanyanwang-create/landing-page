import Link from 'next/link'
import { MobileNav } from '@/components/MobileNav'

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">Yanyan  Wang</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <Link href="/resume" className="text-gray-300 hover:text-white transition-colors">Resume</Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-blue-400">Yanyan Wang</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              I am a CSTU student learning Artificial Intelligence, Software Development, and Cloud Computing. I enjoy building practical projects and expanding my technical skills.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                Check My Projects
              </a>
              <Link href="/resume" className="px-6 py-3 border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium transition-colors">
                View My Resume
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Services</h2>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          </div>
        </section>

        <footer className="py-10 border-t border-gray-800 bg-black text-center text-gray-400" role="contentinfo">
          <p>© {new Date().getFullYear()} Yanyan Wang. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
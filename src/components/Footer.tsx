import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] border-t border-[#f5f0e8]/5">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#3d4a3d]/10 blur-[100px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3d4a3d] to-[#5a6b5a] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#f5f0e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a9 9 0 1 1 -16.626 0a7.5 7.5 0 0 1 7.92 -12.446c.131 0 .262 0 .393 0z" />
                  <path d="M12 3v18" />
                  <path d="M12 10c-1.5 0 -3 .5 -3 2.5s1.5 2.5 3 2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl text-[#f5f0e8]">MPLS Vegan</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4a574]">Directory</span>
              </div>
            </Link>
            <p className="text-[#f5f0e8]/40 max-w-sm leading-relaxed">
              Your guide to exceptional plant-based dining in Minneapolis and Saint Paul. Discover 100% vegan restaurants, vegan-friendly spots, and everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-6 font-medium">Navigate</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/#restaurants', label: 'Restaurants' },
                { href: '/neighborhoods', label: 'Neighborhoods' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Neighborhoods */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-6 font-medium">Popular Areas</h3>
            <ul className="space-y-3">
              {[
                { href: '/neighborhoods/northeast', label: 'Northeast Minneapolis' },
                { href: '/neighborhoods/uptown', label: 'Uptown' },
                { href: '/neighborhoods/lyn-lake', label: 'Lyn-Lake' },
                { href: '/neighborhoods/cathedral-hill', label: 'Cathedral Hill' },
                { href: '/neighborhoods/powderhorn', label: 'Powderhorn' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#f5f0e8]/50 hover:text-[#d4a574] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-[#d4a574] mb-6 font-medium">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#d4a574] hover:bg-[#3a3a3a] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#d4a574] hover:bg-[#3a3a3a] transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#f5f0e8]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#f5f0e8]/30 text-sm">
            © {new Date().getFullYear()} MPLS Vegan Directory. Made with{' '}
            <span className="text-[#d4a574]">♥</span>
            {' '}in Minneapolis.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#f5f0e8]/20 text-xs uppercase tracking-widest">Plant-based is the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

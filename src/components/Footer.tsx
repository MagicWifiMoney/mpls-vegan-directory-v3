import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌱</span>
              <span className="font-bold text-xl">MPLS Vegan Directory</span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Your guide to the best vegan and plant-based dining in Minneapolis and Saint Paul. 
              Discover 100% vegan restaurants, vegan-friendly spots, and everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#restaurants" className="text-gray-400 hover:text-green-400 transition-colors">
                  All Restaurants
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-gray-400 hover:text-green-400 transition-colors">
                  By Neighborhood
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Neighborhoods */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Neighborhoods</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/neighborhoods/northeast" className="text-gray-400 hover:text-green-400 transition-colors">
                  Northeast Minneapolis
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/uptown" className="text-gray-400 hover:text-green-400 transition-colors">
                  Uptown
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/lyn-lake" className="text-gray-400 hover:text-green-400 transition-colors">
                  Lyn-Lake
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/cathedral-hill" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cathedral Hill
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/powderhorn" className="text-gray-400 hover:text-green-400 transition-colors">
                  Powderhorn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MPLS Vegan Directory. Made with 💚 in Minneapolis.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.131 4.665.333 3.923.63c-.764.303-1.413.71-2.06 1.357C1.216 2.634.81 3.283.507 4.047.21 4.789.008 5.65-.051 6.88-.112 8.113-.125 8.52-.125 12.141c0 3.621.013 4.028.072 5.261.059 1.23.261 2.091.558 2.833.303.764.71 1.413 1.357 2.06.647.647 1.296 1.054 2.06 1.357.742.297 1.603.499 2.833.558 1.233.059 1.64.072 5.261.072 3.621 0 4.028-.013 5.261-.072 1.23-.059 2.091-.261 2.833-.558.764-.303 1.413-.71 2.06-1.357.647-.647 1.054-1.296 1.357-2.06.297-.742.499-1.603.558-2.833.059-1.233.072-1.64.072-5.261 0-3.621-.013-4.028-.072-5.261-.059-1.23-.261-2.091-.558-2.833-.303-.764-.71-1.413-1.357-2.06C21.366 1.216 20.717.81 19.953.507 19.211.21 18.35.008 17.12-.051 15.887-.112 15.48-.125 11.859-.125l.158.125zm0 2.161c3.565 0 3.986.014 5.396.078 1.303.06 2.01.278 2.482.462.624.242 1.07.532 1.537.999.467.467.757.913.999 1.537.184.472.402 1.179.462 2.482.064 1.41.078 1.831.078 5.396 0 3.565-.014 3.986-.078 5.396-.06 1.303-.278 2.01-.462 2.482-.242.624-.532 1.07-.999 1.537-.467.467-.913.757-1.537.999-.472.184-1.179.402-2.482.462-1.41.064-1.831.078-5.396.078-3.565 0-3.986-.014-5.396-.078-1.303-.06-2.01-.278-2.482-.462-.624-.242-1.07-.532-1.537-.999-.467-.467-.757-.913-.999-1.537-.184-.472-.402-1.179-.462-2.482-.064-1.41-.078-1.831-.078-5.396 0-3.565.014-3.986.078-5.396.06-1.303.278-2.01.462-2.482.242-.624.532-1.07.999-1.537.467-.467.913-.757 1.537-.999.472-.184 1.179-.402 2.482-.462 1.41-.064 1.831-.078 5.396-.078z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

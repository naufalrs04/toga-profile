function Footer() {
  return (
    <footer id="kontak" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🌿 Toga Roban Barat</h3>
            <p className="text-gray-300">
              Platform edukasi tanaman obat keluarga untuk kesehatan alami dan berkelanjutan.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#beranda" className="hover:text-green-400 transition-colors">Beranda</a></li>
              <li><a href="#manfaat" className="hover:text-green-400 transition-colors">Manfaat</a></li>
              <li><a href="#caraMerawat" className="hover:text-green-400 transition-colors">Cara Merawat</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 naufalrizkisaputra2004@gmail.com</p>
              <p>📱 +62 812 2571 7674</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Toga Roban Barat</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
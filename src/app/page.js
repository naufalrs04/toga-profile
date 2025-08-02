"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

function App() {

  const manfaatUtama = [
    {
      icon: "🛡️",
      judul: "Meningkatkan Imunitas",
      deskripsi: "Tanaman obat mengandung senyawa aktif yang dapat meningkatkan sistem kekebalan tubuh secara alami.",
      warna: "from-blue-50 to-blue-100"
    },
    {
      icon: "🌱",
      judul: "Pengobatan Alami",
      deskripsi: "Alternatif pengobatan yang lebih aman dengan efek samping minimal dibandingkan obat kimia.",
      warna: "from-green-50 to-green-100"
    },
    {
      icon: "💰",
      judul: "Hemat Biaya",
      deskripsi: "Menanam sendiri tanaman obat dapat menghemat biaya pengobatan dan perawatan kesehatan.",
      warna: "from-yellow-50 to-yellow-100"
    },
    {
      icon: "🏠",
      judul: "Mudah Diakses",
      deskripsi: "Tanaman obat dapat ditanam di pekarangan rumah sehingga mudah diakses kapan saja.",
      warna: "from-purple-50 to-purple-100"
    },
    {
      icon: "🌍",
      judul: "Ramah Lingkungan",
      deskripsi: "Penggunaan tanaman obat mendukung kelestarian lingkungan dan mengurangi polusi.",
      warna: "from-emerald-50 to-emerald-100"
    },
    {
      icon: "⚡",
      judul: "Pencegahan Penyakit",
      deskripsi: "Konsumsi rutin tanaman obat dapat membantu mencegah berbagai penyakit degeneratif.",
      warna: "from-red-50 to-red-100"
    }
  ];

  return (
    <div className="App bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="beranda" className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Tanaman Obat
                <span className="text-green-600"> Keluarga</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Temukan berbagai tanaman obat keluarga (TOGA) yang ditanam di lingkungan Dukuh Roban Barat RT 08, untuk menjaga kesehatan keluarga secara alami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#jenis-tanaman"
                  className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-colors font-semibold text-center"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-3xl p-8 shadow-xl">
                <div className="text-center min-h-[450px] relative rounded-3xl overflow-hidden">
                  <Image
                    src="/assets/cover-img.png"
                    alt="Image of TOGA"
                    fill
                    className="object-cover opacity-60"
                  />

                  <div className="absolute bottom-0 left-0 w-full px-6 py-4 z-10 bg-gradient-to-t from-white/80 via-white/60 to-transparent">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">TOGA - Dukuh Roban Barat RT 08</h3>
                    <p className="text-green-700">Tanaman Obat Keluarga untuk Kesehatan Alami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jenis Tanaman Section */}
      <section id="jenis-tanaman" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Jenis <span className="text-green-600">Tanaman Obat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beragam tanaman obat keluarga yang terdapat di Dukuh Roban Barat RT 08
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* 1. Jahe */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-center">
                <div className="relative w-full h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px]">
                  <Image
                    src="/assets/tanaman/jahe.jpeg"
                    alt="Tanaman Jahe"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Jahe</h3>
                <p className="text-sm text-gray-600 italic mb-3">Zingiber officinale</p>
                <p className="text-gray-700">
                  Rimpang yang berkhasiat untuk menghangatkan tubuh dan mengatasi masalah pencernaan
                </p>
              </div>
            </div>

            {/* 2. Lengkuas */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-center">
                <div className="relative w-full h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px]">
                  <Image
                    src="/assets/tanaman/laos.jpg"
                    alt="Tanaman Laos"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Lengkuas</h3>
                <p className="text-sm text-gray-600 italic mb-3">Alpinia galanga</p>
                <p className="text-gray-700">
                  Digunakan sebagai bumbu dapur dan obat tradisional untuk mengatasi perut kembung dan meningkatkan nafsu makan
                </p>
              </div>
            </div>

            {/* 3. Kunyit */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-center">
                <div className="relative w-full h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px]">
                  <Image
                    src="/assets/tanaman/kunir.jpeg"
                    alt="Tanaman Kunir"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Kunyit</h3>
                <p className="text-sm text-gray-600 italic mb-3">Curcuma longa</p>
                <p className="text-gray-700">
                  Dikenal sebagai anti-inflamasi alami dan sering digunakan untuk meningkatkan daya tahan tubuh
                </p>
              </div>
            </div>

            {/* 5. Serai */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-center">
                <div className="relative w-full h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px]">
                  <Image
                    src="/assets/tanaman/serai.jpg"
                    alt="Tanaman Serai"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Serai</h3>
                <p className="text-sm text-gray-600 italic mb-3">Cymbopogon citratus</p>
                <p className="text-gray-700">
                  Memiliki sifat anti-bakteri dan biasa digunakan dalam teh atau masakan untuk meningkatkan aroma
                </p>
              </div>
            </div>

            {/* 6. Lidah Buaya */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-center">
                <div className="relative w-full h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px]">
                  <Image
                    src="/assets/tanaman/lidah-buaya.jpeg"
                    alt="Tanaman Lidah Buaya"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Lidah Buaya</h3>
                <p className="text-sm text-gray-600 italic mb-3">Aloe vera</p>
                <p className="text-gray-700">
                  Bermanfaat untuk menyembuhkan luka, merawat kulit, dan mengatasi iritasi
                </p>
              </div>
            </div>

            {/* 7. Temulawak */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
              <div className="text-center">
                <div className="relative w-full h-[220px] sm:h-[250px] md:h-[220px] lg:h-[250px]">
                  <Image
                    src="/assets/tanaman/temulawak.jpg" 
                    alt="Tanaman Temulawak"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">Temulawak</h3>
                <p className="text-sm text-gray-600 italic mb-3">Curcuma xanthorrhiza</p>
                <p className="text-gray-700">
                  Rimpang dengan kandungan kurkumin tinggi yang bermanfaat untuk menjaga fungsi hati dan meningkatkan nafsu makan.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Manfaat Section */}
      <section id="manfaat" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Manfaat <span className="text-green-600">Tanaman Obat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kenali berbagai manfaat luar biasa dari tanaman obat keluarga untuk kesehatan dan kehidupan sehari-hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manfaatUtama.map((manfaat, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${manfaat.warna} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-6">{manfaat.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{manfaat.judul}</h3>
                  <p className="text-gray-700 leading-relaxed">{manfaat.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Mulai Hidup Sehat dengan Tanaman Obat
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Bergabunglah dengan komunitas TOGA Dukuh Roban Barat RT 08 dan rasakan manfaat kesehatan alami dari tanaman obat keluarga
            </p>
          </div>
        </div>
      </section>


      {/* Cara Merawat Section */}
      <section id="cara-merawat" className="py-20 bg-green-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Gambar Poster */}
            <div className="w-full max-w-xl mx-auto relative">
              <Image
                src="/assets/poster/cara-merawat.jpg"
                alt="Poster Cara Merawat Tanaman Obat"
                width={1000}
                height={1333} // contoh rasio 3:4
                className="rounded-3xl mx-auto w-full h-auto"
              />
            </div>

            {/* Penjelasan / Ajakan */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Cara <span className="text-green-600">Merawat</span> Tanaman Obat
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Untuk memastikan tanaman obat keluarga tumbuh subur dan memberikan manfaat maksimal, penting untuk melakukan perawatan yang tepat. Berikut adalah tips singkat:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pilih media tanam yang gembur dan kaya nutrisi</li>
                <li>Siram tanaman secara teratur, namun tidak berlebihan</li>
                <li>Letakkan di tempat dengan sinar matahari yang cukup</li>
                <li>Pangkas daun kering untuk merangsang pertumbuhan baru</li>
                <li>Gunakan pupuk organik secara berkala</li>
              </ul>
              <p className="text-gray-600 italic">
                *Lihat poster di samping untuk panduan lengkap perawatan TOGA
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default App;
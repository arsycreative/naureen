"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Award,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Leaf,
  Package,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  const values = [
    {
      icon: Shield,
      title: "Kepercayaan",
      description:
        "Kami berkomitmen untuk selalu memberikan produk yang berkualitas dan sesuai dengan syariat Islam",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Heart,
      title: "Ketulusan",
      description:
        "Setiap produk dibuat dengan penuh ketulusan dan doa untuk keberkahan pelanggan",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Clock,
      title: "Konsistensi",
      description:
        "Konsisten dalam menjaga kualitas dan pelayanan terbaik untuk setiap pelanggan",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Memulai Perjalanan",
      description:
        "Didirikan dengan visi menyediakan garam ruqyah berkualitas untuk keluarga Muslim Indonesia",
    },
    {
      year: "2022",
      title: "Ekspansi Produk",
      description:
        "Mengembangkan berbagai varian kemasan untuk memenuhi kebutuhan yang beragam",
    },
    {
      year: "2023",
      title: "Sertifikasi Halal",
      description:
        "Memperoleh sertifikasi halal dan meningkatkan standar kualitas produksi",
    },
    {
      year: "2024",
      title: "Jangkauan Nasional",
      description:
        "Melayani seluruh Indonesia dengan sistem distribusi yang terpercaya",
    },
  ];

  const itemVariants = {
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  🏢 Tentang Kami
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Mengenal</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                    Naureen
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Naureen garam ruqyah hadir dengan satu tujuan sederhana:
                  menghadirkan garam ruqyah yang bermanfaat secara nyata bagi
                  tubuh, rumah, dan jiwa, sambil menjadikannya sebagai jalan
                  ikhtiar untuk membantu sesama. Bagi kami, produk ini bukan
                  sekadar komoditas, tetapi sarana untuk berbagi manfaat dan
                  kebaikan.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Terpercaya sejak 2021</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Produk Berkualitas</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg"
                        alt="Garam Ruqyah Quality"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="relative h-32 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="https://images.pexels.com/photos/6932280/pexels-photo-6932280.jpeg"
                        alt="Islamic Values"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-4 mt-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="relative h-32 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="https://images.pexels.com/photos/1263313/pexels-photo-1263313.jpeg"
                        alt="Natural Process"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/header-img.webp"
                        alt="Premium Quality"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Floating Background Elements */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-30"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Leaf, label: "Bahan Alami" },
              { icon: ShieldCheck, label: "Halal & Thayyib" },
              { icon: Package, label: "Kemasan Higienis" },
              { icon: Handshake, label: "Komitmen Layanan" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-3 shadow-md">
                  <stat.icon size={24} />
                </div>
                <div className="text-gray-700 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              🎯 Visi & Misi
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Komitmen{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Naureen
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <Card className="border-0 shadow-xl bg-white h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Visi Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Menjadi brand garam ruqyah yang bukan hanya dikenal karena
                    kualitasnya, tapi juga karena komitmen sosialnya. Kami ingin
                    setiap pembelian terasa seperti “membeli manfaat, sekaligus
                    memberi manfaat.”
                  </p>
                  <div className="space-y-3">
                    {[
                      "Kualitas Terjamin",
                      "Pelayanan Prima",
                      "Kepercayaan Pelanggan",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="border-0 shadow-xl bg-white h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Misi Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Menghadirkan produk garam ruqyah berkualitas tinggi yang
                    tidak hanya memberikan manfaat bagi keluarga, tetapi juga
                    menjadi sarana berbagi kebaikan melalui kontribusi sosial.
                    Dengan setiap pembelian, kami berkomitmen menyalurkan
                    sebagian keuntungan untuk membantu sesama.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Produk Berkualitas & Berkah",
                      "Kontribusi Sosial Nyata",
                      "Berbagi Kebaikan Bersama",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              💎 Nilai-Nilai Kami
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Prinsip yang Kami{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Junjung Tinggi
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap langkah perjalanan kami dilandasi oleh nilai-nilai Islam
              yang kuat dan komitmen untuk memberikan yang terbaik
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 ${value.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              📈 Perjalanan Kami
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sejarah{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Naureen
              </span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <span className="text-green-600 font-bold text-lg">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Bergabung dengan Keluarga Besar Naureen
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Rasakan sendiri keberkahan dan manfaat Garam Ruqyah Naureen
                untuk perlindungan dan kesehatan keluarga Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/catalog"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  Lihat Produk Kami
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors inline-block"
                >
                  Hubungi Kami
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Heart,
  Droplets,
  Star,
  CheckCircle,
  Users,
  Zap,
  Home,
  HeartHandshake,
  Globe,
  Eye,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const differentiators = [
    {
      icon: Zap,
      title: "Ikhtiar Holistik",
      description:
        "Garam kami bukan sekadar 'garam dapur.' Diproses secara higienis dan dibacakan ayat-ayat ruqyah, menghadirkan keseimbangan manfaat ilmiah dengan nilai spiritual untuk ketenangan & doa.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      image:
        "https://images.pexels.com/photos/6621190/pexels-photo-6621190.jpeg",
    },
    {
      icon: Home,
      title: "Praktis & Sehat",
      description:
        "Mandi air garam membantu meredakan pegal dan menenangkan pikiran. Untuk rumah, membantu menyerap kelembaban dan menjaga ruang tetap kering. Sarana relaksasi yang mendukung kesehatan fisik & mental.",
      color: "text-green-600",
      bgColor: "bg-green-100",
      image:
        "https://images.pexels.com/photos/6920614/pexels-photo-6920614.jpeg",
    },
    {
      icon: Heart,
      title: "Kesembuhan Milik Allah",
      description:
        "Kami percaya garam ruqyah hanyalah salah satu ikhtiar, bukan jaminan mutlak. Semua hasil dan kesembuhan hanya datang dari Allah SWT.",
      color: "text-red-500",
      bgColor: "bg-red-100",
      image:
        "https://images.pexels.com/photos/7957066/pexels-photo-7957066.jpeg",
    },
    {
      icon: HeartHandshake,
      title: "Beli 1, Berbagi 1",
      description:
        "Setiap pembelian produk langsung mendukung perjuangan kemanusiaan. Setengah keuntungan disalurkan sebagai donasi, prioritas utama untuk membantu Palestina.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      image:
        "https://images.pexels.com/photos/32304399/pexels-photo-32304399.jpeg",
    },
    {
      icon: Eye,
      title: "Amanah & Transparan",
      description:
        "Menjaga kepercayaan dengan transparansi penyaluran donasi, agar setiap konsumen tahu bahwa belanja mereka berarti juga membantu perjuangan dan kehidupan orang lain.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      image:
        "https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg",
    },
  ];

  const benefits = [
    "Untuk mandi atau membersihkan diri",
    "Untuk minuman atau makanan",
    "Untuk media ruqyah",
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { y: 50, opacity: 0 },
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            ✨ Keunggulan Produk
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apa yang Membuat{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Kami Berbeda?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Garam Ruqyah Naureen hadir dengan pendekatan holistik yang
            menggabungkan manfaat ilmiah, nilai spiritual, dan kepedulian sosial
            untuk memberikan keberkahan bagi keluarga Muslim
          </p>
        </AnimatedSection>

        {/* Main Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* First two items - larger cards */}
          {differentiators.slice(0, 2).map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="h-full py-0 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-14 h-14 ${feature.bgColor} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className={`${feature.color} w-7 h-7`} />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Remaining items - smaller cards in 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {differentiators.slice(2).map((feature, index) => (
            <motion.div
              key={index + 2}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full py-0 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className={`${feature.color} w-6 h-6`} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Impact Highlight */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                  🤝 Dampak Sosial
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Belanja dengan <span className="text-orange-600">Makna</span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Setiap produk yang Anda beli tidak hanya memberikan manfaat
                  untuk keluarga, tetapi juga menjadi bagian dari perjuangan
                  kemanusiaan. Bersama-sama kita membangun keberkahan yang lebih
                  luas.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      50%
                    </div>
                    <div className="text-gray-600 text-sm">
                      Keuntungan untuk Donasi
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      🇵🇸
                    </div>
                    <div className="text-gray-600 text-sm">
                      Prioritas untuk Palestina
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/15483667/pexels-photo-15483667.jpeg"
                    alt="Community Impact"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <Globe className="text-blue-600 w-6 h-6" />
                          <div>
                            <h4 className="font-bold text-gray-800">
                              Transparansi Penuh
                            </h4>
                            <p className="text-sm text-gray-600">
                              Laporan donasi tersedia untuk semua pelanggan
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}

        {/* Values Section */}
        <AnimatedSection className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Nilai-Nilai yang Kami Junjung Tinggi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Amanah & Kejujuran
                </h4>
                <p className="text-gray-600 text-sm">
                  Menjaga kepercayaan dengan transparansi dalam setiap aspek
                  bisnis kami
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Kepedulian Sosial
                </h4>
                <p className="text-gray-600 text-sm">
                  Berbagi keberkahan melalui kontribusi nyata untuk sesama
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Kualitas Terbaik
                </h4>
                <p className="text-gray-600 text-sm">
                  Komitmen pada standar tinggi dalam setiap produk yang kami
                  hasilkan
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

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
  ShieldCheck,
  Leaf,
  Handshake,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Perlindungan Spiritual",
      description:
        "Dibacakan ayat-ayat Al-Qur&apos;an pilihan untuk perlindungan dari gangguan makhluk halus",
      color: "text-green-600",
      bgColor: "bg-green-100",
      image:
        "https://images.pexels.com/photos/18054245/pexels-photo-18054245.jpeg",
    },
    {
      icon: Heart,
      title: "Penyembuhan Alami",
      description:
        "Membantu proses penyembuhan secara alami dengan kekuatan doa dan tawakal",
      color: "text-red-500",
      bgColor: "bg-red-100",
      image: "https://images.pexels.com/photos/971077/pexels-photo-971077.jpeg",
    },
    {
      icon: Droplets,
      title: "Garam Murni",
      description:
        "Menggunakan garam laut murni berkualitas tinggi tanpa bahan kimia tambahan",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      image:
        "https://images.pexels.com/photos/2152975/pexels-photo-2152975.jpeg",
    },
    {
      icon: Star,
      title: "Kualitas Premium",
      description:
        "Diproduksi dengan standar kualitas tinggi dan proses yang terjaga kebersihannya",
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      image: "/header-img.webp",
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
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Naureen?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Garam Ruqyah Naureen hadir dengan keunggulan dan manfaat yang telah
            terbukti memberikan berkah dan perlindungan bagi ribuan keluarga
            Muslim
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2 py-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <feature.icon className={`${feature.color} w-6 h-6`} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                🎯 Manfaat Penggunaan
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Cara Penggunaan{" "}
                <span className="text-green-600">Garam Ruqyah</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Garam Ruqyah Naureen memiliki berbagai kegunaan sesuai dengan
                kebutuhan spiritual dan kesehatan Anda. Setiap penggunaan
                disertai dengan doa dan niat yang baik.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">
                      Catatan Penting
                    </h4>
                    <p className="text-green-700 text-sm leading-relaxed">
                      Garam Ruqyah Naureen hanyalah sarana. Kesembuhan dan
                      keberkahan sepenuhnya datang dari Allah SWT. Gunakan
                      dengan penuh keyakinan dan tawakal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/2236674/pexels-photo-2236674.jpeg"
                      alt="Spiritual Protection"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/6932280/pexels-photo-6932280.jpeg"
                      alt="Natural Healing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4 mt-8"
                >
                  <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.pexels.com/photos/1263313/pexels-photo-1263313.jpeg"
                      alt="Pure Salt"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/header-img.webp"
                      alt="Premium Quality"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-400 rounded-full opacity-10 -z-10"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Trust Indicators */}
        <AnimatedSection className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Dukungan & Kepercayaan yang Terus Bertumbuh
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Komunitas Bertumbuh
                </h4>
                <p className="text-gray-600 text-sm">
                  Semakin banyak keluarga yang mulai mengenal dan mempercayai
                  kami.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <Handshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Layanan Bersahabat
                </h4>
                <p className="text-gray-600 text-sm">
                  Kami selalu siap membantu dengan pendekatan yang hangat dan
                  ramah.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Dari Hati
                </h4>
                <p className="text-gray-600 text-sm">
                  Setiap produk dibuat dengan perhatian dan kepedulian terbaik.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

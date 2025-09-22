"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Heart,
  Star,
  Leaf,
  ShieldCheck,
  Package,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    { icon: Shield, text: "Perlindungan Spiritual", color: "text-green-600" },
    { icon: Heart, text: "Penyembuhan Alami", color: "text-red-500" },
    // { icon: Star, text: "Kualitas Premium", color: "text-yellow-500" },
  ];

  return (
    <section className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full blur-xl opacity-60"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-32 h-32 bg-green-300 rounded-full blur-xl opacity-40"
        />
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-green-400 rounded-full blur-xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 z-50">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                🌟 Premium Islamic Product
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                  Naureen
                </span>
                <br />
                <span className="text-gray-800">Garam Ruqyah</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Naureen garam ruqyah hadir dengan satu tujuan sederhana:
                menghadirkan garam ruqyah yang bermanfaat secara nyata bagi
                tubuh, rumah, dan jiwa, sambil menjadikannya sebagai jalan
                ikhtiar untuk membantu sesama. Bagi kami, produk ini bukan
                sekadar komoditas, tetapi sarana untuk berbagi manfaat dan
                kebaikan.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md justify-center"
                >
                  <feature.icon size={18} className={feature.color} />
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/catalog">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Lihat Produk
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>

              <Link href="/profile">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  Tentang Kami
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Product Showcase */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              {/* Main Product Image */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden"
              >
                <Image
                  src="/header-img.webp"
                  alt="Garam Ruqyah Naureen"
                  fill
                  priority
                />

                {/* Overlay Content */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <h3 className="font-bold text-gray-800 mb-2">
                        Premium Quality
                      </h3>
                      <p className="text-sm text-gray-600">
                        Garam murni dengan kualitas terbaik untuk kebutuhan
                        ruqyah Anda
                      </p>
                    </div>
                  </div>
                </div> */}
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -top-10 -left-6 bg-white rounded-2xl p-4 shadow-lg border border-green-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      Bersih & Bernilai
                    </p>
                    <p className="text-xs text-gray-600">
                      Kebaikan alami yang bernilai
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-12 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-green-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="text-red-500" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      Natural
                    </p>
                    <p className="text-xs text-gray-600">100% Alami</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-30"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-green-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

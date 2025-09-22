"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUp,
  Heart,
  Shield,
  Music2,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil Kami", href: "/profile" },
    { name: "Katalog Produk", href: "/catalog" },
    { name: "Hubungi Kami", href: "/contact" },
  ];

  const productLinks = [
    { name: "Garam Ruqyah Premium", href: "/catalog?type=premium" },
    // { name: "Garam Ruqyah Reguler", href: "/catalog?type=regular" },
    // { name: "Family Pack", href: "/catalog?type=family" },
    // { name: "Panduan Penggunaan", href: "/guide" },
  ];

  const contactInfo = [
    // {
    //   icon: Phone,
    //   title: "Telepon",
    //   content: "+62 812-3456-7890",
    //   href: "tel:+6281234567890",
    // },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 851-2471-9269",
      href: "https://wa.me/6285124719269",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@naureen.com",
      href: "mailto:info@naureen.com",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Kalideres, Jakarta Barat, Indonesia",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Music2,
      name: "TikTok",
      href: "https://www.tiktok.com/@naureengaram_?_t=ZS-8zqyWnj4h7a&_r=1",
      color: "hover:text-gray-200",
    },
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://www.facebook.com/share/14JTWtEhWRL/?mibextid=wwXIfr",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-500",
    },
    {
      icon: ShoppingBag,
      name: "Shopee",
      href: "https://id.shp.ee/2KK1nc4",
      color: "hover:text-orange-500",
    },
    {
      icon: ShoppingCart,
      name: "Tokopedia",
      href: "https://tk.tokopedia.com/ZSDf1k7pt/",
      color: "hover:text-green-500",
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40z'/%3E%3Cpath d='m0 40l40-40h-40z' transform='translate(40 0) rotate(90)'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-2">
                <div className="inline-block p-2 bg-green-50 rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="Naureen Logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Menghadirkan garam ruqyah yang bermanfaat secara nyata bagi
                tubuh, rumah, dan jiwa, sambil menjadikannya sebagai jalan
                ikhtiar untuk membantu sesama.
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield size={16} className="text-green-400" />
                  <span>100% Halal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart size={16} className="text-red-400" />
                  <span>Berkah</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">
                Menu Utama
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-white">Jam Pelayanan</h5>
                <div className="flex items-center space-x-2 text-gray-300 text-sm">
                  <Clock size={16} className="text-green-400" />
                  <span>24/7 Online Support</span>
                </div>
              </div>
            </motion.div>

            {/* Products */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">
                Produk Kami
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-white">Keunggulan</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ Garam Laut Murni</li>
                  <li>✓ Dibacakan Ruqyah</li>
                  <li>✓ Kemasan Higienis</li>
                  <li>✓ Pengiriman Cepat</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">
                Hubungi Kami
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <contact.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {contact.title}
                      </p>
                      <p className="text-sm">{contact.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="font-semibold mb-4 text-white">Ikuti Kami</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Naureen Garam Ruqyah. All rights reserved.
              </p>

              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                {/* Scroll to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
                >
                  <ArrowUp size={18} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

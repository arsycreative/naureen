"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/themes";

const navigationItems = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profile" },
  { name: "Katalog", href: "/catalog" },
  { name: "Kontak", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  const itemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-2 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Naureen Logo"
                  width={380} // ukuran asli logo (isi sesuai file)
                  height={200} // ukuran asli logo (isi sesuai file)
                  className="h-12 w-auto"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center space-x-8"
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                    pathname === item.href
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: pathname === item.href ? "100%" : 0,
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info & Mobile Menu */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            {/* Contact Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.a
                href="tel:+6285124719269"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
              >
                <Phone size={18} />
              </motion.a>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-green-600"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 bg-white">
                {/* Wajib ada Title untuk aksesibilitas */}
                <SheetHeader>
                  <VisuallyHidden>
                    <SheetTitle>Menu Navigasi</SheetTitle>
                  </VisuallyHidden>
                </SheetHeader>

                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center space-x-3">
                      <Link
                        href="/"
                        className="flex items-center space-x-3 group"
                      >
                        <div className="p-2 group-hover:scale-110 transition-transform duration-300">
                          <Image
                            src="/logo.png"
                            alt="Naureen Logo"
                            width={380}
                            height={200}
                            className="h-12 w-auto"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 py-6">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg mb-2 ${
                            pathname === item.href
                              ? "bg-green-50 text-green-600 border-l-4 border-green-500"
                              : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t pt-6 pb-4">
                    <div className="flex justify-center space-x-6">
                      <motion.a
                        href="tel:+6285124719269"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 p-3 text-green-600 bg-green-50 rounded-lg"
                      >
                        <Phone size={20} />
                        <span className="text-sm font-medium">Telepon</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

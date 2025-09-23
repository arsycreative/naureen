"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 851-2471-9269",
      description: "Hubungi kami langsung",
      href: "tel:+6285124719269",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+62 851-2471-9269",
      description: "Chat cepat dan mudah",
      href: "https://wa.me/6285124719269?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Garam%20Ruqyah%20Naureen",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Mail,
      title: "Email",
      content: "naureengaram@gmail.com",
      description: "Kirim pertanyaan detail",
      href: "mailto:naureengaram@gmail.com",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content: "Kalideres",
      description: "Indonesia",
      href: "#",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@naureen_garamruqyah",
      href: "https://instagram.com/naureen_garamruqyah",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Naureen Garam Ruqyah",
      href: "https://facebook.com/naureen.garamruqyah",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Globe,
      name: "Website",
      handle: "www.naureen.com",
      href: "https://naureen.com",
      color: "text-gray-600",
      bgColor: "bg-gray-100",
    },
  ];

  const faqItems = [
    {
      question: "Bagaimana cara menggunakan garam ruqyah?",
      answer:
        "Garam ruqyah dapat digunakan untuk berbagai keperluan seperti dicampurkan ke air minum, air mandi, atau ditaburkan di sekitar rumah. Selalu disertai dengan doa dan niat yang baik.",
    },
    {
      question: "Bagaimana cara menyimpan garam ruqyah agar tahan lama?",
      answer:
        "Simpan di wadah tertutup rapat, kering, dan jauh dari sinar matahari langsung agar kualitas tetap terjaga.",
    },
    {
      question: "Berapa lama masa simpan garam ruqyah?",
      answer:
        "Garam ruqyah memiliki masa simpan yang sangat panjang jika disimpan di tempat yang kering dan tertutup rapat. Umumnya dapat bertahan hingga 1 tahun.",
    },
    {
      question: "Apakah ada pengiriman ke seluruh Indonesia?",
      answer:
        "Ya, kami melayani pengiriman ke seluruh Indonesia melalui berbagai ekspedisi terpercaya dengan asuransi pengiriman.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              📞 Hubungi Kami
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Mari</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                Bersilatuhrahim
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap melayani Anda dengan sepenuh hati. Jangan ragu untuk
              menghubungi kami kapan saja untuk konsultasi, pemesanan, atau
              pertanyaan seputar produk kami.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="block group"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-2 bg-white">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className={`w-8 h-8 ${info.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </motion.div>
          </section>

          {/* Main Contact Section - Simplified */}
          <div className="text-center mb-20">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Hubungi Kami Sekarang
                </h2>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Untuk konsultasi, pemesanan, atau pertanyaan seputar produk
                  Garam Ruqyah Naureen, silakan hubungi kami melalui WhatsApp
                  untuk mendapatkan respon yang cepat dan personal.
                </p>

                {/* WhatsApp Button - Enhanced */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  <motion.a
                    href="https://wa.me/6285124719269?text=Assalamu%27alaikum,%20saya%20ingin%20bertanya%20tentang%20Garam%20Ruqyah%20Naureen"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <MessageCircle size={32} className="animate-bounce" />
                    <div className="text-left">
                      <div className="text-2xl font-bold">Chat WhatsApp</div>
                    </div>
                  </motion.a>
                </motion.div>

                <div className="mt-8 text-gray-600">
                  <p className="text-sm">
                    WhatsApp tersedia 24/7 untuk kemudahan Anda
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Business Hours Card */}
          <div className="max-w-2xl mx-auto mb-20">
            <AnimatedSection>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-green-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Jam Pelayanan
                    </h3>
                    <p className="text-gray-600">Waktu Indonesia Barat (WIB)</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Jam Layanan */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-green-200">
                        <span className="font-medium text-gray-700">
                          Setiap Hari
                        </span>
                        <span className="text-green-700 font-semibold">
                          24 Jam Online
                        </span>
                      </div>
                    </div>

                    {/* WhatsApp Info */}
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
                        <p className="text-green-800 font-bold">
                          WhatsApp 24/7
                        </p>
                        <p className="text-green-700 text-sm">
                          Selalu siap melayani
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Social Media */}
          {/* <div className="text-center mb-20">
            <AnimatedSection>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Ikuti Media Sosial Kami
              </h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 ${social.bgColor} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    <social.icon
                      className={`w-8 h-8 ${social.color} group-hover:scale-110 transition-transform`}
                    />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              ❓ Pertanyaan Umum
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban atas pertanyaan yang sering diajukan tentang
              produk dan layanan kami
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Lihat FAQ Lengkap
            </Button>
          </div> */}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="border-0 shadow-xl overflow-hidden bg-white p-0">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="https://barat.jakarta.go.id/ppid/storage/assets/front/img/carousel-1.jpg"
                    alt="Jakarta Location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <MapPin className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Lokasi Kami
                      </h3>
                      <p className="text-gray-600">
                        Kalideres, Jakarta Barat, Indonesia
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Kunjungi Kantor Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Produk kami dikirim langsung dari Kalideres, Jakarta Barat.
                    Silakan hubungi kami untuk konsultasi atau pickup pesanan.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Jakarta Selatan, DKI Jakarta
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Senin - Sabtu: 08:00 - 17:00
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white self-start"
                  >
                    <a
                      href="https://wa.me/6285124719269?text=Assalamu%27alaikum,%20saya%20ingin%20bertanya%20tentang%20Garam%20Ruqyah%20Naureen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <AnimatedSection>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Siap Bersilatuhrahim dengan Kami?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Jangan ragu untuk menghubungi kami. Tim Naureen selalu siap
                melayani dengan sepenuh hati dan memberikan solusi terbaik untuk
                kebutuhan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/6285124719269?text=Halo,%20saya%20ingin%20bertanya%20tentang%20Garam%20Ruqyah%20Naureen"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  WhatsApp Sekarang
                </motion.a>
                <motion.a
                  href="tel:+6285124719269"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors inline-block"
                >
                  Telepon Kami
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

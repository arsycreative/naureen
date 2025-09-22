"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Star, ShoppingCart, Heart, Eye, SortAsc } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState("popular"); // 'popular', 'price', 'name', 'rating'
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Semua Produk", count: 12 },
    { id: "premium", name: "Premium", count: 4 },
    { id: "regular", name: "Reguler", count: 5 },
    { id: "family", name: "Family Pack", count: 3 },
  ];

  const products = [
    {
      id: 1,
      name: "Garam Ruqyah Premium",
      category: "premium",
      price: 25000,
      originalPrice: 35000,
      image: "/produk.webp",
      rating: 4.9,
      reviews: 156,
      sold: 500,
      features: ["Kemasan Premium", "Dibacakan Ruqyah", "Sertifikat Halal"],
      description:
        "Garam ruqyah premium dengan kualitas terbaik, dikemas dalam kemasan yang elegan dan higienis.",
      badge: "Best Seller",
      badgeColor: "bg-green-600",
      inStock: true,
    },
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        return b.sold - a.sold;
    }
  });

  const ProductCard = ({ product, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Card
        className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 h-full bg-white py-0 ${
          viewMode === "list" ? "lg:flex" : ""
        }`}
      >
        <div className={`relative ${viewMode === "list" ? "lg:w-80" : ""}`}>
          <div
            className={`relative overflow-hidden ${
              viewMode === "list" ? "h-48 lg:h-full" : "h-64"
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Stok Habis
                </span>
              </div>
            )}
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <Badge className={`${product.badgeColor} text-white px-3 py-1`}>
              {product.badge}
            </Badge>
          </div>
        </div>

        <CardContent
          className={`p-6 flex flex-col justify-between ${
            viewMode === "list" ? "flex-1" : ""
          }`}
        >
          <div className="py-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {product.name}
              </h3>
              {/* {product.inStock && (
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <span>{product.sold} terjual</span>
                </div>
              )} */}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {product.rating}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features
                .slice(0, viewMode === "list" ? 4 : 3)
                .map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200"
                  >
                    {feature}
                  </span>
                ))}
              {product.features.length > (viewMode === "list" ? 4 : 3) && (
                <span className="px-2 py-0 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{product.features.length - (viewMode === "list" ? 4 : 3)}{" "}
                  lainnya
                </span>
              )}
            </div>
          </div>

          {/* Price */}

          {/* Action Buttons */}
          <div className="flex gap-2">
            {product.inStock ? (
              <motion.a
                href={`https://wa.me/6285124719269?text=Assalamu%27alaikum,%20saya%20ingin%20memesan%20${encodeURIComponent(
                  product.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors bg-green-600 hover:bg-green-700 text-white"
              >
                <ShoppingCart size={18} />
                <span>Pesan via WhatsApp</span>
              </motion.a>
            ) : (
              <motion.button
                disabled
                className="flex-1 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 bg-gray-300 text-gray-500 cursor-not-allowed"
              >
                <ShoppingCart size={18} />
                <span>Stok Habis</span>
              </motion.button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              🛍️ Katalog Produk
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Pilihan</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">
                Garam Ruqyah
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan produk garam ruqyah terbaik dengan berbagai pilihan
              kemasan dan harga yang sesuai dengan kebutuhan keluarga Anda
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-white text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-900"
                >
                  <option value="popular">Terpopuler</option>
                  <option value="price">Harga Terendah</option>
                  <option value="name">Nama A-Z</option>
                  <option value="rating">Rating Tertinggi</option>
                </select>
                <SortAsc
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>

              {/* View Mode */}
              {/* <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-white text-green-600 shadow"
                      : "text-gray-600"
                  }`}
                >
                  <Grid3X3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-white text-green-600 shadow"
                      : "text-gray-600"
                  }`}
                >
                  <List size={20} />
                </button>
              </div> */}

              {/* Filter Toggle */}
              {/* <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Filter size={20} />
                <span>Filter</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    filterOpen ? "rotate-180" : ""
                  }`}
                  size={16}
                />
              </button> */}
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-8"
              >
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Kategori Produk
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${
                          selectedCategory === category.id
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-300 hover:border-green-300 bg-white text-gray-700"
                        }`}
                      >
                        <div className="font-semibold">{category.name}</div>
                        <div className="text-sm text-gray-500">
                          {category.count} produk
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Menampilkan{" "}
              <span className="font-semibold">{sortedProducts.length}</span>{" "}
              produk
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  dalam kategori{" "}
                  <span className="font-semibold">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                  </span>
                </span>
              )}
              {searchTerm && (
                <span>
                  {" "}
                  untuk &quot;
                  <span className="font-semibold">{searchTerm}</span>&quot;
                </span>
              )}
            </p>
          </div>

          {/* Products Grid/List */}
          <motion.div
            layout
            className={`gap-8 ${
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col"
            }`}
          >
            <AnimatePresence mode="wait">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Produk Tidak Ditemukan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tidak ada produk yang sesuai dengan pencarian atau filter
                    Anda
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Reset Filter
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {/* {sortedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4"
              >
                Muat Lebih Banyak
              </Button>
            </motion.div>
          )} */}
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
                Butuh Bantuan Memilih Produk?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Tim ahli kami siap membantu Anda memilih produk garam ruqyah
                yang paling sesuai dengan kebutuhan keluarga
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  Konsultasi Gratis
                </motion.a>
                <motion.a
                  href="https://wa.me/6285124719269"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors inline-block"
                >
                  WhatsApp Kami
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

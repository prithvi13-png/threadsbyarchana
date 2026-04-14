import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ContactCTA from "@/components/home/ContactCTA";
import { Search } from "lucide-react";

const Collections = () => {
  const [searchParams] = useSearchParams();
  const filterNew = searchParams.get("filter") === "new";
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");

  const filtered = useMemo(() => {
    let result = [...products];
    if (filterNew) result = result.filter((p) => p.newArrival);
    if (selectedCategory !== "all") result = result.filter((p) => p.categorySlug === selectedCategory);
    if (search) result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, selectedCategory, sortBy, filterNew]);

  return (
    <>
      {/* Banner */}
      <section className="bg-secondary py-16 md:py-24">
        <Container>
          <SectionHeading
            title={filterNew ? "New Arrivals" : "Our Collections"}
            subtitle={filterNew ? "The latest additions — fresh and exclusive." : "Browse our complete catalogue of curated fashion."}
          />
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-sm text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-card border border-border rounded-sm px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-card border border-border rounded-sm px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="default">Sort By</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-16 font-light">No products found matching your criteria.</p>
          )}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
};

export default Collections;

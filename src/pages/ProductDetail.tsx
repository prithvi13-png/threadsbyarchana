import { useParams, Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/common/ProductCard";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { SITE_CONFIG } from "@/data/siteConfig";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;

  if (!product) {
    return (
      <Container className="py-24 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/collections" className="text-sm font-sans tracking-wider uppercase text-accent-foreground hover:underline">
          Back to Collections
        </Link>
      </Container>
    );
  }

  const related = getRelatedProducts(product);
  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in ${product.name}. Could you share more details?`);

  return (
    <>
      <section className="py-10 md:py-16">
        <Container>
          <Link to="/collections" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Collections
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            {/* Image */}
            <div className="rounded-lg overflow-hidden bg-secondary aspect-[3/4]">
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover object-top" />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">{product.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">{product.name}</h1>

              <p className="text-muted-foreground font-light leading-relaxed mb-8">{product.description}</p>

              {/* Details */}
              <div className="space-y-3 mb-8 text-sm">
                {[
                  { label: "Fabric", value: product.fabric },
                  { label: "Color", value: product.color },
                  { label: "Occasion", value: product.occasion },
                  { label: "Care", value: product.careInstructions },
                ].map((d) => (
                  <div key={d.label} className="flex gap-3">
                    <span className="text-muted-foreground font-medium min-w-[80px]">{d.label}</span>
                    <span className="text-foreground font-light">{d.value}</span>
                  </div>
                ))}
              </div>

              {product.available && (
                <p className="text-xs text-muted-foreground mb-6 border-t border-border pt-4">
                  For details, availability, and orders, contact us directly on WhatsApp.
                </p>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-primary-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  <Phone size={16} /> Call to Order
                </a>
                <a
                  href={`${SITE_CONFIG.whatsappLink}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-3.5 text-sm font-sans tracking-widest uppercase hover:bg-foreground hover:text-primary-foreground transition-colors rounded-sm"
                >
                  <MessageCircle size={16} /> WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 md:py-20 bg-secondary/50">
          <Container>
            <SectionHeading title="You May Also Like" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default ProductDetail;

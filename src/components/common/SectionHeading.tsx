interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, className = "", align = "center" }: SectionHeadingProps) => (
  <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : ""} ${className}`}>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light">
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-px w-16 bg-accent ${align === "center" ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;

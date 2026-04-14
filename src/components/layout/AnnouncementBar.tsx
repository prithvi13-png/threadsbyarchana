import { useState, useEffect } from "react";
import { ANNOUNCEMENTS } from "@/data/siteConfig";

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-foreground text-primary-foreground text-center py-2 px-4 text-xs md:text-sm font-sans tracking-widest uppercase">
      <span className="animate-fade-in" key={index}>
        {ANNOUNCEMENTS[index]}
      </span>
    </div>
  );
};

export default AnnouncementBar;

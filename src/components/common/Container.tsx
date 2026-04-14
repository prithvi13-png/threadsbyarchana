import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`container mx-auto px-5 md:px-8 ${className}`}>
    {children}
  </div>
);

export default Container;

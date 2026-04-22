import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-light border-t border-border mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-center text-muted-foreground text-sm">
        <span>
          © {new Date().getFullYear()} | Chriztelle G. Leonor.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
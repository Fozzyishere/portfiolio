import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-8 mt-auto border-t border-gruvbox-bg1">
      <div className="container mx-auto">
        <p className="text-gruvbox-fg3 text-sm">
          © {currentYear} Quoc Huy Pham. All rights reserved (when needed :D ).
        </p>
      </div>
    </footer>
  );
};

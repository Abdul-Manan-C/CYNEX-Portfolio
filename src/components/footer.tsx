import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t py-6 mt-16">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>
          &copy; {currentYear} Ch Manan // CYNEX. All rights reserved.
        </p>
         <p className="flex items-center justify-center gap-1 mt-2">
          Designed with a cybernetic touch.
        </p>
      </div>
    </footer>
  );
}

'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Inscripciones", href: "/#inscripciones" },
    { name: "Recorrido", href: "/#recorrido" },
    { name: "Categorías", href: "/#categorias" },
    { name: "Galería", href: "/#galeria" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Santa Rosa 10K
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-4 bg-gradient-cta hover:opacity-90 transition-opacity"
            >
              Inscríbete
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button 
                variant="default" 
                className="w-full bg-gradient-cta hover:opacity-90 transition-opacity"
              >
                Inscríbete
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

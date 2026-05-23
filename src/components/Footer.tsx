"use client";

import React from "react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Início", href: "#hero" },
  { name: "Resultados", href: "#results" },
  { name: "Formações", href: "#formations" },
  { name: "Avaliações", href: "#testimonials" },
];

const workAreas = [
  "Performance Esportiva",
  "Reabilitação Funcional",
  "Ciência do Recovery",
  "Biomecânica Avançada",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B] border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Coluna 1: Branding */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter text-[#F5F5F5]">
              RATH<span className="text-[#D62828]">.</span>
            </h2>
            <p className="text-[#F5F5F5]/60 text-sm leading-relaxed max-w-[200px]">
              Laboratório de elite em performance humana e recuperação esportiva.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-6">
            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#F5F5F5]/60 hover:text-[#D62828] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Meios de Trabalho */}
          <div className="space-y-6">
            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-widest text-xs">Especialidades</h4>
            <ul className="space-y-4">
              {workAreas.map((area) => (
                <li key={area} className="text-[#F5F5F5]/60 text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato / Newsletter */}
          <div className="space-y-6">
            <h4 className="text-[#F5F5F5] font-bold uppercase tracking-widest text-xs">Santa Fé do Sul, SP</h4>
            <p className="text-[#F5F5F5]/60 text-sm">Pronto para a evolução?</p>
            <button className="px-6 py-3 bg-[#D62828] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0B0B0B] transition-all duration-300">
              Agendar Avaliação
            </button>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#F5F5F5]/40 text-[10px] uppercase tracking-[0.2em]">
            © 2026 RATH Performance. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <span className="text-[#F5F5F5]/40 text-[10px] uppercase tracking-[0.2em]">Privacidade</span>
            <span className="text-[#F5F5F5]/40 text-[10px] uppercase tracking-[0.2em]">Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
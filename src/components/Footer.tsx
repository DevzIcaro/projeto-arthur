"use client";

import React from "react";
import { MapPin, Mail, ExternalLink, MessageCircle } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5"; 

const links = [
    { name: "Início", href: "#hero" },
    { name: "Resultados", href: "#resultados" },
    { name: "Sobre", href: "#sobre" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Avaliações", href: "#avaliacoes" },
    { name: "Contato", href: "#contatos" },
];

export default function Footer() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="bg-[#0B0B0B] border-t border-white/5 pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-bold tracking-tighter text-[#F5F5F5]">
                            RATH<span className="text-[#D62828]">.</span>
                        </h2>
                        <div className="space-y-1">
                            <p className="text-[#F5F5F5] font-medium text-lg">Performance Humana</p>
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                                Laboratório de Elite
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest">Navegação</h4>
                        <nav className="flex flex-col gap-3">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-white/50 hover:text-[#D62828] text-sm transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <span className="h-px w-0 bg-[#D62828] transition-all duration-300 group-hover:w-3" />
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest">Contato</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://maps.app.goo.gl/ZfhpUM9Z4Ru97JCc6" className="flex items-start gap-3 group hover:text-white transition-colors">
                                <MapPin size={18} className="text-[#D62828] shrink-0 mt-1" />
                                <span className="text-white/60 text-sm leading-relaxed">
                                    Rua 20, 82, Centro.<br /> Santa Fé do Sul - SP
                                </span>
                            </a>
                            <a href="https://wa.me/5517981111087?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação" target="_blank" className="flex items-center gap-3 group hover:text-white transition-colors">
                                <MessageCircle size={18} className="text-[#D62828]" />
                                <span className="text-white/60 text-sm">(17) 98111-1087</span>
                            </a>
                            <a href="https://www.instagram.com/rath_performance?igsh=aHdqaTFuZ29sZzlx" target="_blank" className="flex items-center gap-3 group hover:text-white transition-colors">
                                <IoLogoInstagram size={18} className="text-[#D62828]" />
                                <span className="text-white/60 text-sm">@rathperformance</span>
                            </a>
                            <a href="mailto:contato@rath.com.br" className="flex items-center gap-3 group hover:text-white transition-colors">
                                <Mail size={18} className="text-[#D62828]" />
                                <span className="text-white/60 text-sm break-all">contato@rath.com.br</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-white font-medium text-sm uppercase tracking-widest">Especialidade</h4>
                        <p className="text-white/40 text-sm leading-relaxed italic font-sans">
                            "Ciência pura aplicada ao movimento. Sua melhor versão começa aqui."
                        </p>
                        <div className="h-px w-full bg-gradient-to-r from-[#D62828]/50 to-transparent" />
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-[11px] tracking-wider uppercase">
                        © 2026 RATH Performance. Todos os direitos reservados.
                    </p>

                    <div className="flex items-center gap-2 text-white/30 text-[11px] uppercase tracking-wider">
                        <span>Desenvolvido por</span>
                        <a
                            href="https://wa.me/5517992641230"
                            target="_blank"
                            className="text-white/60 hover:text-[#D62828] transition-colors flex items-center gap-1 font-bold"
                        >
                            Ícaro Carneiro <ExternalLink size={10} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
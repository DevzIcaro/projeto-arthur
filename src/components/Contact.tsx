"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";

const contactOptions = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    label: "+55 (17) 98111-1087",
    href: "https://wa.me/5517981111087?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação",
  },
  {
    name: "Instagram",
    icon: IoLogoInstagram,
    label: "@rathperformance",
    href: "https://www.instagram.com/rath_performance?igsh=aHdqaTFuZ29sZzlx",
  },
  {
    name: "E-mail",
    icon: Mail,
    label: "contato@rath.com.br",
    href: "mailto:contato@rath.com.br",
  },
  {
    name: "Localização",
    icon: MapPin,
    label: "Santa Fé do Sul - SP",
    href: "https://maps.app.goo.gl/ZfhpUM9Z4Ru97JCc6",
  },
];

export default function Contact() {
  return (
    <section className="w-full py-24 bg-[#0B0B0B] text-[#F5F5F5] relative overflow-hidden">

      <div className="absolute bottom-35 right-10 w-187.5 h-125 bg-[#D62828]/20 blur-[150px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Conexão Direta
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Pronto para elevar <br />
              <span className="text-[#F5F5F5]/50">sua performance?</span>
            </h3>

            <div className="grid gap-4">
              {contactOptions.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="group flex items-center p-6 bg-[#111111] border border-white/5 hover:border-[#D62828]/50 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-[#D62828] mr-6" />
                  <div>
                    <p className="text-sm uppercase tracking-widest text-[#F5F5F5]/40">{item.name}</p>
                    <p className="text-lg font-medium">{item.label}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-[#D62828]" />
                </motion.a>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-125 w-full overflow-hidden border border-white/5"
          >
            <div className="absolute inset-0 bg-[#111111] z-0" />
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29954.90254708055!2d-50.96249281068231!3d-20.202238905137985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9499c14d8e677679%3A0xca204176452cd67d!2sSanta%20F%C3%A9%20do%20Sul%2C%20SP%2C%2015775-000!5e0!3m2!1spt-BR!2sbr!4v1779652048786!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.3) invert(0.9) contrast(0.9)"
              }}
              allowFullScreen
              loading="lazy"
              className="relative z-10 opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
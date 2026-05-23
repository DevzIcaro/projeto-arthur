"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";

const contactOptions = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    label: "+55 (17) 9XXXX-XXXX",
    href: "https://wa.me/55179XXXXXXXX",
  },
  {
    name: "Instagram",
    icon: IoLogoInstagram,
    label: "@rathperformance",
    href: "https://instagram.com/rathperformance",
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
    href: "https://maps.app.goo.gl/XXXXXXXX",
  },
];

export default function Contact() {
  return (
    <section className="w-full py-24 bg-[#0B0B0B] text-[#F5F5F5]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Info e Botões */}
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

          {/* Lado Direito: Iframe Estilizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full overflow-hidden border border-white/5"
          >
            <div className="absolute inset-0 bg-[#111111] z-0" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0759082721794!2d-50.57398182416979!3d-20.21397444738586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94961b7f038f4d93%3A0x6a2c3f8e5f8f8b88!2sSanta%20F%C3%A9%20do%20Sul%20-%20SP!5e0!3m2!1sen!2sbr!4v1715876000000!5m2!1sen!2sbr"
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
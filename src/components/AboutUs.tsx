"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Mail } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io";

// Links exatos conforme solicitado
const contactLinks = [
  { icon: IoLogoInstagram, href: "https://www.instagram.com/rath_performance?igsh=aHdqaTFuZ29sZzlx", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/5517981111087", label: "WhatsApp" },
  { icon: MapPin, href: "https://maps.app.goo.gl/ZfhpUM9Z4Ru97JCc6", label: "Local" },
  { icon: Mail, href: "mailto:contato@rath.com.br", label: "E-mail" },
];
interface AboutProps {
    imagePath?: string;
}


export default function AboutSection({imagePath}: AboutProps) {
  return (
    <section className="relative w-full py-24 bg-[#0B0B0B] overflow-hidden text-[#F5F5F5]">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D62828]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D62828]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-[#D62828]/20 mix-blend-overlay z-10" />
            <img
              src={imagePath || "./src/assets/pic1.png"}
              alt="Especialista RATH"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-[#D62828] font-bold tracking-[0.2em] uppercase text-xs mb-4">A Ciência por trás do movimento</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Expertise de Elite para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D62828] to-[#ff4d4d]">Resultados Reais</span>
            </h3>
            <p className="text-[#F5F5F5]/60 text-lg leading-relaxed max-w-lg">
              No RATH Performance, não tratamos sintomas — otimizamos sistemas humanos. Nossa metodologia integra a biomecânica avançada à recuperação ativa.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
            {[ { label: "Anos", value: "10+" }, { label: "Atletas", value: "500+" }, { label: "Protocolos", value: "30+" } ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-[#D62828]">{stat.value}</div>
                <div className="text-[10px] text-[#F5F5F5]/40 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-between gap-4 pt-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center p-4 bg-[#111111] border border-white/10 rounded-lg hover:border-[#D62828]/50 transition-all duration-300 group shadow-lg"
              >
                <link.icon size={22} className="text-[#F5F5F5] group-hover:text-[#D62828] transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
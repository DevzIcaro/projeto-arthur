"use client";

import { motion } from "framer-motion";
import { Activity, Zap, ShieldCheck, Accessibility, Brain, HeartPulse } from "lucide-react";

const specialties = [
  { icon: Zap, title: "Performance Esportiva", desc: "Otimização de potência e explosão para atletas de elite." },
  { icon: Accessibility, title: "Biomecânica", desc: "Análise profunda do movimento para eficiência mecânica." },
  { icon: Brain, title: "Mobilidade", desc: "Restauração de amplitudes e fluidez articular." },
  { icon: ShieldCheck, title: "Prevenção de Lesões", desc: "Protocolos baseados em dados para resiliência física." },
  { icon: Activity, title: "Reabilitação", desc: "Recuperação funcional com foco em retorno seguro ao esporte." },
  { icon: HeartPulse, title: "Recovery", desc: "Tecnologias avançadas para aceleração da regeneração." },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0B0B0B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight mb-4">
            Metodologia <span className="text-[#D62828]">RATH</span>
          </h2>
          <div className="h-1 w-20 bg-[#D62828] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0 opacity-40">
             <defs>
               <filter id="glow">
                 <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                 <feMerge>
                   <feMergeNode in="coloredBlur"/>
                   <feMergeNode in="SourceGraphic"/>
                 </feMerge>
               </filter>
             </defs>
             <motion.path 
                d="M 166 120 L 499 120 M 499 120 L 833 120 M 166 380 L 499 380 M 499 380 L 833 380"
                stroke="#D62828" 
                strokeWidth="2" 
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
             />
          </svg>

          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-[#0B0B0B]/40 backdrop-blur-sm relative z-10 overflow-hidden hover:border-[#D62828]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D62828]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mb-6 inline-block p-3 bg-[#0B0B0B] border border-white/10 group-hover:border-[#D62828] transition-colors">
                <item.icon className="w-8 h-8 text-[#D62828]" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#D62828] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#F5F5F5]/60 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
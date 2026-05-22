"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const formations = [
  {
    year: "2024",
    title: "Mestrado em Biomecânica Aplicada",
    institution: "Instituto de Ciência do Esporte",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "Especialização em Reabilitação Avançada",
    institution: "Centro de Fisioterapia de Elite",
    icon: Award,
  },
  {
    year: "2020",
    title: "Certificação Internacional em Recovery",
    institution: "Global Sports Recovery Academy",
    icon: BookOpen,
  },
];

export default function Formations() {
  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-2">Formação Técnica</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">Autoridade em Performance</h3>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {formations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group p-6 bg-[#111111] border border-white/5 hover:border-[#D62828]/50 transition-all duration-500 flex items-center gap-6"
            >
              <div className="p-4 bg-[#0B0B0B] border border-white/10 group-hover:bg-[#D62828]/10 transition-colors">
                <item.icon className="w-6 h-6 text-[#D62828]" />
              </div>
              
              <div className="flex-1">
                <span className="text-[#D62828] font-bold text-sm">{item.year}</span>
                <h4 className="text-xl font-bold text-[#F5F5F5]">{item.title}</h4>
                <p className="text-[#F5F5F5]/60 text-sm">{item.institution}</p>
              </div>

              <div className="hidden md:block w-px h-12 bg-white/10 group-hover:bg-[#D62828]/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
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
    <section className="w-full py-24 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[#2a0808] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#D62828] text-xl font-bold tracking-[0.3em] uppercase mb-2">Formação Técnica</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#F5F5F5]">Autoridade em Performance</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          {formations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-[#111111] border border-white/5 hover:border-[#D62828]/50 transition-all duration-500 flex items-center gap-6 h-full"
            >
              <div className="p-4 bg-[#0B0B0B] border border-white/10 group-hover:bg-[#D62828]/10 transition-colors shrink-0">
                <item.icon className="w-6 h-6 text-[#D62828]" />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[#D62828] font-bold text-xs">{item.year}</span>
                <h4 className="text-lg font-bold text-[#F5F5F5] leading-tight mt-1">{item.title}</h4>
                <p className="text-[#F5F5F5]/60 text-xs mt-1">{item.institution}</p>
              </div>

              <div className="hidden lg:block w-px h-12 bg-white/10 group-hover:bg-[#D62828]/50 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
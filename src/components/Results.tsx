"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  { value: "500+", label: "Atletas de Elite Atendidos", description: "Protocolos validados em campo." },
  { value: "98%", label: "Retorno ao Esporte", description: "Taxa de sucesso em reabilitação funcional." },
  { value: "15+", label: "Anos de Excelência", description: "Legado em ciência do esporte." },
  { value: "12k", label: "Horas de Recovery", description: "Tecnologia aplicada em regeneração celular." },
];

function Counter({ value, label, description }: { value: string; label: string; description: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group p-8 border-l border-white/10 hover:border-[#D62828] transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-2">{value}</h4>
        <p className="text-[#D62828] font-semibold text-sm uppercase tracking-widest mb-2">{label}</p>
        <p className="text-[#F5F5F5]/40 text-sm font-light max-w-[200px]">{description}</p>
      </motion.div>
    </div>
  );
}

export default function Results() {
  return (
    <section className="py-24 bg-[#0B0B0B] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Conteúdo Esquerdo */}
          <div className="lg:w-1/3">
            <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-4">Impacto Real</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] leading-tight mb-6">
              Resultados mensuráveis, <br />
              <span className="text-[#F5F5F5]/40">performance humana.</span>
            </h3>
            <p className="text-[#F5F5F5]/60 mb-8">
              A eficácia da metodologia RATH é comprovada por dados, não apenas por relatos. Transformamos potencial em resultados concretos.
            </p>
          </div>

          {/* Grid de Resultados */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12">
            {results.map((item, index) => (
              <Counter key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Activity, Target, ShieldCheck, Microscope, Cpu } from "lucide-react";

const benefits = [
  {
    title: "Precisão Biomecânica",
    description: "Utilizamos análise de movimento computacional para identificar ineficiências e otimizar cada padrão motor, elevando seu limite físico a um novo patamar de excelência.",
    side: "left",
    icon: Microscope,
  },
  {
    title: "Recuperação Acelerada",
    description: "Protocolos de elite com tecnologia de ponta para reduzir processos inflamatórios, permitindo que você retorne aos treinos com intensidade total em tempo recorde.",
    side: "right",
    icon: Activity,
  },
  {
    title: "Prevenção Inteligente",
    description: "Monitoramento constante de carga e fadiga. Antecipamos riscos e fortalecemos estruturas vulneráveis para garantir longevidade na sua carreira esportiva.",
    side: "left",
    icon: ShieldCheck,
  },
  {
    title: "Performance Sob Demanda",
    description: "Programação de mobilidade e potência customizada de acordo com as exigências específicas da sua modalidade e do seu momento atual na temporada.",
    side: "right",
    icon: Zap,
  }
];

export default function Benefits() {
  return (
    <section className="w-full py-24 px-6 bg-linear-to-t from-[#111111] to-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D62828]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center mb-20">
        <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-2">Vantagem Competitiva</h2>
        <h3 className="text-[#F5F5F5] text-4xl md:text-6xl font-bold tracking-tight">O Diferencial RATH</h3>
      </div>

      <div className="max-w-5xl mx-auto relative">


        {benefits.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index} className={cn(
              "relative flex flex-col md:flex-row items-center justify-between mb-24",
              step.side === "right" ? "md:flex-row-reverse" : ""
            )}>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] flex justify-center mb-8 md:mb-0"
              >
                <div className="relative w-40 h-40 md:w-56 md:h-56 bg-[#111111] border border-white/5 rounded-2xl flex items-center justify-center group hover:border-[#D62828]/50 transition-all duration-500">
                  <Icon 
                    strokeWidth={1.5} 
                    className="w-16 h-16 md:w-20 md:h-20 text-[#D62828] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                  />

                  <div className="absolute inset-0 bg-[#D62828]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </div>
              </motion.div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#D62828] rounded-full shadow-[0_0_20px_#D62828] z-10 hidden md:block" />

              <motion.div 
                initial={{ opacity: 0, x: step.side === "left" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "w-full md:w-[45%] text-center md:text-left",
                  step.side === "right" ? "md:text-right" : "md:text-left"
                )}
              >
                <h4 className="text-[#F5F5F5] text-2xl font-bold mb-4">{step.title}</h4>
                <p className="text-[#F5F5F5]/60 text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
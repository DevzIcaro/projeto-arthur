"use client";

import { motion } from "framer-motion";
import { Award, Users, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 bg-[#0B0B0B] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D62828]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-[#111111] rounded-2xl overflow-hidden border border-white/5 relative group">

            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B] to-transparent z-10" />
            <img 
              src="./src/assets/pic1.png" 
              alt="Especialista RATH" 
              className="w-full h-full object-cover transition-all duration-700"
            />
            
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-white/80 font-medium uppercase tracking-[0.2em] text-sm">Direção Clínica</p>
              <h4 className="text-2xl font-bold text-white">RATH Performance</h4>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-[#D62828] font-bold tracking-[0.2em] uppercase text-sm mb-4">A Ciência por trás do movimento</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] leading-tight tracking-tight mb-6">
              Expertise de Elite para <br />
              <span className="text-[#D62828]/90">Resultados Reais</span>
            </h3>
            <p className="text-[#F5F5F5]/60 text-lg leading-relaxed max-w-lg">
              No RATH Performance, não tratamos sintomas — otimizamos sistemas humanos. Nossa metodologia integra a biomecânica avançada à recuperação ativa, garantindo que cada atleta alcance seu pico de performance com segurança absoluta.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
            {[
              { label: "Anos de Pista", value: "15+" },
              { label: "Atletas de Elite", value: "500+" },
              { label: "Protocolos", value: "30+" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-[#D62828]">{stat.value}</div>
                <div className="text-xs text-[#F5F5F5]/40 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
            <div className="absolute top-60 right-55 w-[400px] h-[400px] bg-[#D62828]/10 blur-[150px] rounded-full" />
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center bg-[#0B0B0B] overflow-hidden">
            {/* 1. Imagem de Fundo (Camada inferior) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="./src/assets/gym.jpg"
                    alt="Background"
                    className="w-full h-full object-cover blur-[2px] opacity-30 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
            </div>

            {/* Elementos Decorativos "Absolute" (Ocultos em mobile, visíveis em desktops) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="hidden lg:block absolute top-[78%] left-13 w-32 h-32 border-b border-l border-[#D62828]/40 z-20" />
                <div className="hidden lg:block absolute top-[20%] right-12 w-32 h-32 border-t border-r border-[#D62828]/40 z-20" />
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#D62828]/10 blur-[120px]" />
            </div>

            {/* Conteúdo Principal */}
            <div className="container mx-auto px-6 lg:px-16 max-w-8xl flex flex-col items-start justify-center relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8">
                        <Activity className="w-3 h-3 text-[#D62828]" />
                        Performance de Elite
                    </div>

                    <h1 className="text-5xl md:text-8xl xl:text-9xl font-bold tracking-tighter text-[#F5F5F5] leading-[0.9]">
                        RATH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D62828] to-[#ff4d4d]">
                            PERFORMANCE
                        </span>
                    </h1>

                    <p className="text-base md:text-2xl text-[#F5F5F5]/70 max-w-lg mt-8 leading-relaxed font-light">
                        Ciência biomecânica avançada para reabilitação, recovery e prevenção de lesões. O padrão ouro em saúde esportiva.
                    </p>
                </motion.div>

                {/* Botões - Ajustados para empilhar no mobile */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <Button className="bg-[#D62828] hover:bg-[#b92222] text-white px-8 py-6 rounded-none text-sm uppercase tracking-[0.1em] transition-all">
                        Agendar Avaliação <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-white/10 bg-transparent text-[#F5F5F5] hover:bg-white/10 px-8 py-6 rounded-none text-sm uppercase tracking-[0.1em]">
                        Metodologia
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
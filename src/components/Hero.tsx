"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#0B0B0B] overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#D62828]/10 blur-[120px]" />
                <div className="absolute top-[40%] right-0 w-[40%] h-[40%] rounded-full bg-white/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Conteúdo */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs tracking-widest uppercase mb-6">
                            <Activity className="w-3 h-3 text-[#D62828]" />
                            Performance de Elite
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#F5F5F5] leading-[0.9]">
                            RATH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D62828] to-[#ff4d4d]">
                                PERFORMANCE
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#F5F5F5]/60 max-w-lg mt-6 leading-relaxed">
                            Ciência biomecânica avançada para reabilitação, recovery e prevenção de lesões. O padrão ouro em saúde esportiva.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Button className="bg-[#D62828] hover:bg-[#b92222] text-white px-8 py-6 rounded-none text-md uppercase tracking-wider transition-all">
                            Agendar Avaliação <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="border-white/10 bg-transparent text-[#F5F5F5] hover:bg-white/5 px-8 py-6 rounded-none text-md uppercase tracking-wider">
                            Conhecer a Metodologia
                        </Button>
                    </motion.div>
                </div>

                {/* Logo/Imagem Direita (Simbolizada como um elemento visual premium) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative group flex justify-center items-center" // Adicionado a classe 'group' aqui
                >
                    {/* Efeito de Luz atrás (O "Glow") */}
                    <div className="absolute -inset-1 bg-white/20 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                    {/* Container do elemento visual */}
                    <div className="w-full aspect-square max-w-[450px] border border-white/5 bg-gradient-to-br from-[#111111] to-transparent rounded-2xl relative backdrop-blur-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 to-transparent z-10" />

                        <img
                            src="./src/assets/logo.png"
                            alt="RATH Performance"
                            className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                        />

                        <div className="absolute bottom-10 right-10 w-24 h-24 border-t border-r border-[#D62828]/50 z-20" />
                        <div className="absolute top-10 left-10 w-24 h-24 border-b border-l border-[#D62828]/50 z-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
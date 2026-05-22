"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Atleta Profissional de Futebol",
    quote: "A metodologia RATH mudou meu patamar. O nível de precisão na biomecânica me devolveu a confiança após a lesão que ninguém mais conseguia resolver.",
  },
  {
    name: "Beatriz Oliveira",
    role: "Triatleta",
    quote: "Recovery de outro mundo. O laboratório de performance é impecável e a atenção ao detalhe no meu protocolo individualizado foi o diferencial do meu ciclo olímpico.",
  },
  {
    name: "Marcelo Terra",
    role: "Crossfitter Elite",
    quote: "Ciência pura aplicada ao movimento. Nunca me senti tão resiliente e eficiente nas minhas cargas de treino quanto após começar o acompanhamento aqui.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-[#0B0B0B] relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-2">Prova Social</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight">Experiência Real</h3>
          </div>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((t, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="bg-[#111111] border-white/5 p-8 h-full flex flex-col justify-between group hover:border-[#D62828]/30 transition-all duration-500">
                  <CardContent className="p-0">
                    <Quote className="w-10 h-10 text-[#D62828]/20 mb-6" />
                    <p className="text-[#F5F5F5]/80 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                      "{t.quote}"
                    </p>
                    <div className="border-t border-white/5 pt-6">
                      <p className="text-[#F5F5F5] font-bold tracking-wide">{t.name}</p>
                      <p className="text-[#D62828] text-sm uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navegação Customizada */}
          <div className="flex gap-4 mt-12 justify-center lg:justify-start">
            <CarouselPrevious className="relative static bg-[#111111] border-white/10 hover:bg-[#D62828] hover:text-white transition-colors" />
            <CarouselNext className="relative static bg-[#111111] border-white/10 hover:bg-[#D62828] hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
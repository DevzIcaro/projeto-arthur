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
    <section className="w-full py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Glow Cinematográfico de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D62828]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">
        
        {/* Títulos */}
        <div className="mb-16 text-left">
          <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Prova Social
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight">
            Experiência Real
          </h3>
        </div>

        {/* Instância Principal do Carrossel */}
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          {/* Track dos Cards com espaçamento corrigido */}
          <CarouselContent className="-ml-4">
            {testimonials.map((t, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 basis-full md:basis-1/2"
              >
                <Card className="bg-[#111111] border-white/5 p-6 md:p-8 h-full flex flex-col justify-between hover:border-[#D62828]/30 transition-all duration-500 rounded-none select-none">
                  <CardContent className="p-0 flex flex-col h-full justify-between">
                    <div>
                      <Quote className="w-8 h-8 text-[#D62828] opacity-40 mb-6" />
                      <p className="text-[#F5F5F5]/90 text-base md:text-xl leading-relaxed mb-8 font-light italic">
                        "{t.quote}"
                      </p>
                    </div>
                    
                    <div className="border-t border-white/5 pt-6 mt-auto">
                      <p className="text-[#F5F5F5] font-bold tracking-wide text-base md:text-lg">
                        {t.name}
                      </p>
                      <p className="text-[#D62828] text-xs md:text-sm uppercase tracking-widest mt-1 font-semibold">
                        {t.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* CONTROLES DESKTOP: Flutuam perfeitamente para fora dos cards nas extremidades */}
          <CarouselPrevious 
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-14 h-14 items-center justify-center transition-all duration-300 shadow-lg shadow-[#D62828]/10" 
          />
          <CarouselNext 
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-14 h-14 items-center justify-center transition-all duration-300 shadow-lg shadow-[#D62828]/10" 
          />

          {/* CONTROLES MOBILE: Alinhados estritamente na mesma linha, centralizados abaixo do bloco */}
          <div className="flex md:hidden w-full justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-12 h-12 flex items-center justify-center" />
            <CarouselNext className="static translate-x-0 translate-y-0 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-12 h-12 flex items-center justify-center" />
          </div>

        </Carousel>
      </div>
    </section>
  );
}
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
    // Gradiente: Preto no topo (#0B0B0B) para Vermelho Escuro na base (#2a0808)
    <section className="w-full py-24 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[#2a0808] relative overflow-hidden">
      
      {/* Glow Cinematográfico (Mantido sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D62828]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-16 lg:px-24 relative z-10">

        <div className="mb-16 text-left">
          <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Prova Social
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] tracking-tight">
            Experiência Real
          </h3>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 basis-full md:basis-1/2"
              >
                {/* Cards com fundo levemente transparente para interagir com o gradiente */}
                <Card className="bg-[#111111]/80 backdrop-blur-sm border-white/5 p-6 md:p-8 h-full flex flex-col justify-between hover:border-[#D62828]/30 transition-all duration-500 rounded-none select-none">
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

          {/* Controles Desktop */}
          <CarouselPrevious className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-14 h-14 items-center justify-center transition-all duration-300 shadow-lg shadow-[#D62828]/10" />
          <CarouselNext className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-14 h-14 items-center justify-center transition-all duration-300 shadow-lg shadow-[#D62828]/10" />

          {/* Controles Mobile */}
          <div className="flex md:hidden w-full justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-12 h-12 flex items-center justify-center" />
            <CarouselNext className="static translate-x-0 translate-y-0 bg-[#D62828] hover:bg-[#D62828]/90 text-white border-none rounded-full w-12 h-12 flex items-center justify-center" />
          </div>

        </Carousel>
      </div>
    </section>
  );
}
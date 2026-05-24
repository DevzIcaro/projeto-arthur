"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "Como funciona a avaliação biomecânica?",
    answer: "Utilizamos sensores de captura de movimento e análise de força em tempo real para mapear padrões de desequilíbrio e ineficiência técnica, criando um protocolo personalizado para sua performance.",
  },
  {
    question: "Qual o tempo médio de recuperação para lesões?",
    answer: "Cada protocolo é individualizado. Trabalhamos com métricas de carga progressiva, garantindo que o retorno ao esporte ocorra com segurança absoluta e otimização dos tecidos lesionados.",
  },
  {
    question: "Atletas amadores podem passar pelo protocolo RATH?",
    answer: "Sim. A metodologia RATH é aplicada para qualquer indivíduo que busca excelência física, seja para prevenção de lesões, ganho de potência ou longevidade esportiva.",
  },
  {
    question: "Como agendar uma consulta inicial?",
    answer: "O agendamento é feito através de nosso portal de atendimento. Recomendamos uma consulta de triagem inicial para que possamos entender seu histórico e objetivos antes do primeiro atendimento no laboratório.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-24 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B] to-[#2a0808] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-[#D62828] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Dúvidas Frequentes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight">
            Ciência e Clareza
          </h3>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4 cursor-pointer">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-white/10  bg-[#111111] hover:border-[#D62828]/50 transition-colors duration-300 px-6"
            >
              <AccordionTrigger
                className="text-[#F5F5F5] hover:no-underline py-6 text-left text-lg font-medium cursor-pointer transition-all active:scale-[0.99] group"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#F5F5F5]/70 leading-relaxed pb-6 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
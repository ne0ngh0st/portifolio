"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { sectionVariants, viewportOnce } from "@/lib/motion";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="deck-slide section-bg-sobre scroll-mt-16"
      aria-labelledby="sobre-heading"
    >
      <motion.div
        className="mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col justify-center px-5 py-6 md:px-10 md:py-8 lg:px-16"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={sectionVariants}
      >
        <div className="border-l-[3px] border-[color:var(--phosphor-amber-mid)] pl-6 md:pl-8">
          <h2
            id="sobre-heading"
            className="crt-section-title font-display text-2xl font-bold md:text-3xl"
          >
            Sobre mim
          </h2>
          <p className="mt-2 font-display text-[color:var(--phosphor-amber-mid)] [text-shadow:0_0_12px_var(--phosphor-glow-soft)]">
            ne0ngh0st
          </p>
          <p className="mt-1 text-text-muted">
            Desenvolvedor de Sistemas &amp; Integrações · Segurança da Informação
            (em formação)
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            <li>
              <a
                href="https://github.com/ne0ngh0st"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="crt-link-chip inline-flex items-center gap-2 px-3 py-2 font-display text-sm"
              >
                <FaGithub aria-hidden /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/antonioautopel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="crt-link-chip inline-flex items-center gap-2 px-3 py-2 font-display text-sm"
              >
                <FaLinkedin aria-hidden /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:fantasmaneon@gmail.com"
                aria-label="E-mail"
                className="crt-link-chip inline-flex items-center gap-2 px-3 py-2 font-display text-sm"
              >
                <FaEnvelope aria-hidden /> Email
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5511956580191"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="crt-link-chip inline-flex items-center gap-2 px-3 py-2 font-display text-sm"
              >
                <FaWhatsapp aria-hidden /> WhatsApp
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2 border border-dashed border-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_50%,transparent)] px-3 py-2 font-display text-sm text-text-muted">
                <FaMapMarkerAlt aria-hidden /> São Paulo, SP
              </span>
            </li>
          </ul>

          <div className="mt-5 space-y-2.5 text-sm leading-snug text-text-primary md:text-[0.9375rem] md:leading-relaxed">
            <p className="break-inside-avoid">
              Sou desenvolvedor com atuação prática em sistemas internos, integrações
              B2B e análise de dados — experiência construída de dentro para fora,
              resolvendo problemas reais em ambiente corporativo de alta demanda.
            </p>
            <p className="break-inside-avoid">
              No meu principal projeto, projetei e desenvolvi do zero um ecossistema
              interno de gestão comercial utilizado por mais de 200 usuários diários,
              integrando fontes como TOTVS Protheus, marketplaces, meios de pagamento
              e serviços logísticos numa plataforma centralizada.
            </p>
            <p className="break-inside-avoid">
              Paralelamente, venho construindo minha trilha em segurança da informação:
              homelab próprio, prática com ferramentas de pentest em ambiente isolado e
              laboratório controlado, e estudo contínuo com plataformas como TryHackMe
              e PortSwigger. O próximo passo é a certificação eJPT, seguida de
              Security+ e OSCP.
            </p>
            <p className="break-inside-avoid">
              Estou em transição ativa para a área de segurança — buscando
              oportunidades entry-level em SOC, análise de vulnerabilidades ou
              desenvolvimento com visão de segurança — enquanto sigo disponível para
              projetos freelance em desenvolvimento, integrações e infraestrutura
              Linux.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

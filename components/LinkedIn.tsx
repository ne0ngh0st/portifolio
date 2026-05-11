"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { sectionVariants, viewportOnce } from "@/lib/motion";

const openingText = `Desenvolvedor de sistemas e integrações com foco em segurança da informação.
Construí do zero um ecossistema usado por +200 usuários diários.
Buscando oportunidades entry-level em SOC, análise de vulnerabilidades ou desenvolvimento orientado a segurança.`;

const fullAboutText = `Sou desenvolvedor com atuação prática em sistemas internos, integrações B2B e análise de dados — experiência construída de dentro para fora, resolvendo problemas reais em ambiente corporativo de alta demanda.

Meu principal projeto é um ecossistema interno de gestão comercial que projetei e desenvolvi do zero: mais de 200 usuários diários, 11 perfis de permissão, módulos de BI, relatórios, mapa geográfico interativo e integração com TOTVS Protheus. Também construí uma API B2B própria que unifica rastreamento de pedidos cruzando e-commerce, Mercado Livre, PagBank e Correios numa interface operacional única. E um CRM dedicado ao ciclo de licitações públicas, atualmente em fase final.

Paralelamente, venho construindo minha trilha em segurança da informação. Sem certificações formais ainda — e sem fingir que tenho. O que tenho é homelab, prática real e três anos construindo sistemas que agora estudo como quebrar.

Homelab próprio com serviços isolados para estudo. Pentest em instância legada do CRM em laboratório controlado — mapeamento de superfície de ataque, testes de injeção, análise de autenticação. Kali Linux, TryHackMe, PortSwigger, HackTheBox. Cursando Cibersegurança na FIAP.

Próximos passos: eJPT → Security+ → OSCP.

Estou em transição ativa para a área — buscando oportunidades entry-level em SOC, análise de vulnerabilidades ou desenvolvimento com visão de segurança. Também disponível para freelance em desenvolvimento, integrações e infraestrutura Linux.

Se você recruta para segurança ou quer conversar sobre sistemas e integrações — pode chamar.`;

function CopyBlock({
  title,
  text,
  clampPreview,
}: {
  title: string;
  text: string;
  /** Prévia com line-clamp; Copiar envia o texto integral. */
  clampPreview?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  }, [text]);

  return (
    <div className="crt-panel w-full max-w-3xl shrink-0 rounded-lg p-4 transition-[border-color,box-shadow] hover:border-[color:var(--phosphor-amber-mid)] hover:shadow-[0_0_20px_-8px_var(--phosphor-glow-soft)] md:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-xs font-bold text-[color:var(--phosphor-amber-mid)] md:text-sm">
          {title}
        </h3>
        <button
          type="button"
          onClick={copy}
          className="crt-link-chip rounded px-3 py-1.5 font-display text-[11px] text-[color:var(--phosphor-amber)] md:text-xs"
        >
          {status === "copied" ? "Copiado" : status === "error" ? "Erro" : "Copiar"}
        </button>
      </div>
      <p
        className={`whitespace-pre-line text-sm leading-relaxed text-text-muted [overflow-wrap:anywhere] md:text-[0.9375rem] ${
          clampPreview ? "line-clamp-[18]" : ""
        }`}
      >
        {text}
      </p>
      {clampPreview ? (
        <p className="mt-3 font-display text-[10px] text-[color:var(--phosphor-amber-dim)] md:text-[11px]">
          Prévia limitada — &quot;Copiar&quot; envia o texto completo.
        </p>
      ) : null}
    </div>
  );
}

export function LinkedIn() {
  const [tab, setTab] = useState<"open" | "full">("open");

  return (
    <section
      id="linkedin"
      className="deck-slide deck-slide--compact section-bg-linkedin scroll-mt-16"
      aria-labelledby="linkedin-heading"
    >
      <motion.div
        className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-6 md:max-w-5xl md:px-10 md:py-8"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={sectionVariants}
      >
        <h2
          id="linkedin-heading"
          className="crt-section-title w-full max-w-3xl text-center font-display text-xl font-bold md:text-2xl"
        >
          LinkedIn — texto para recrutadores
        </h2>

        <div
          className="mt-5 flex w-full max-w-3xl shrink-0 gap-1 rounded-lg border border-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_35%,transparent)] bg-black/20 p-0.5 font-display text-[11px] uppercase tracking-widest md:text-xs"
          role="tablist"
          aria-label="Escolher bloco de texto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === "open"}
            onClick={() => setTab("open")}
            className={`rounded-md px-4 py-2 transition-colors ${
              tab === "open"
                ? "bg-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_35%,transparent)] text-[color:var(--phosphor-amber)]"
                : "text-text-muted hover:text-[color:var(--phosphor-amber-mid)]"
            }`}
          >
            Abertura
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "full"}
            onClick={() => setTab("full")}
            className={`rounded-md px-4 py-2 transition-colors ${
              tab === "full"
                ? "bg-[color:color-mix(in_srgb,var(--phosphor-amber-dim)_35%,transparent)] text-[color:var(--phosphor-amber)]"
                : "text-text-muted hover:text-[color:var(--phosphor-amber-mid)]"
            }`}
          >
            Sobre completo
          </button>
        </div>

        <div className="mt-5 flex w-full justify-center" role="tabpanel">
          {tab === "open" ? (
            <CopyBlock title="Frase de abertura (≈280 chars)" text={openingText} />
          ) : (
            <CopyBlock
              clampPreview
              title="Seção Sobre completa"
              text={fullAboutText}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}

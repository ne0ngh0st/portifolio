"use client";

import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiDatabase,
  FiFileText,
  FiLayers,
  FiPackage,
} from "react-icons/fi";
import { BulletCard } from "@/components/ui/BulletCard";
import { staggerContainer, sectionVariants, viewportOnce } from "@/lib/motion";

export function Autopel() {
  return (
    <section
      id="autopel"
      className="deck-slide section-bg-autopel scroll-mt-16"
      aria-labelledby="autopel-heading"
    >
      <motion.div
        className="mx-auto flex min-h-0 w-full max-w-[90rem] flex-1 flex-col justify-start gap-7 px-5 py-6 md:gap-8 md:px-12 md:py-8 lg:gap-10 lg:px-16"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={sectionVariants}
      >
        <div className="shrink-0 space-y-2 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:space-y-0">
          <div className="space-y-2">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between lg:justify-start lg:gap-6">
              <img
                src="/autopel-logo.png"
                alt="Logotipo Autopel"
                width={192}
                height={48}
                className="h-9 w-auto shrink-0 md:h-11"
                loading="eager"
              />
              <h2
                id="autopel-heading"
                className="font-display text-xl font-bold text-accent-blue-light md:text-2xl"
              >
                Ecossistema interno
              </h2>
            </div>

            <p className="font-display text-[11px] uppercase tracking-widest text-accent-blue-light/90 md:text-xs">
              Cliente principal · Sistemas e integrações
            </p>
          </div>
          <p className="max-w-none text-sm leading-relaxed text-text-muted md:text-base lg:max-w-[min(42rem,45vw)] lg:text-right xl:max-w-xl">
            Ecossistema interno de tecnologia: full-stack, integrações operacionais e
            camada de dados até a interface dos usuários.
          </p>
        </div>

        <motion.div
          className="grid w-full grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <BulletCard
            dense
            featured
            eyebrow="Sistema principal"
            className="col-span-full"
            icon={<FiLayers />}
            title="CRM Comercial (PALMA)"
            badge="PHP · MySQL · D3.js"
            bullets={[
              "Cadastro comercial, funil e metas no mesmo fluxo usado pelo time no dia a dia",
              "BI e mapa IBGE com filtros por região para leitura geográfica da base",
              "Permissões por perfil, trilhas de auditoria e segregação do que cada papel enxerga",
              "Integração com cadastros e regras vindas do ERP e demais sistemas internos",
              "Base estável com mais de 200 usuários ativos por dia em horário comercial",
              "Evolução contínua em ciclo curto com feedback direto da área comercial",
            ]}
          >
            <>
              <p>
                O PALMA concentra a operação comercial interna: relacionamento com clientes,
                acompanhamento de oportunidades, indicadores e rotinas que antes estavam
                espalhadas em planilhas ou ferramentas desconectadas.
              </p>
              <p>
                Foi construído do zero no ecossistema da empresa, em PHP com MySQL, com
                camadas de permissão explícitas e visualizações em D3.js para mapas e
                painéis que precisam escalar com o volume de dados regional.
              </p>
            </>
          </BulletCard>

          <BulletCard
            dense
            icon={<FiFileText />}
            title="CRM de Licitações"
            badge="Laravel · Next.js · MySQL"
            wip
            bullets={[
              "Acompanhamento do ciclo de licitações públicas",
              "Camada API + front Next em evolução",
              "Integração de bases externas em andamento",
            ]}
          >
            Produto focado no fluxo operacional de compras governamentais.
          </BulletCard>
          <BulletCard
            dense
            icon={<FiPackage />}
            title="Pedidos &amp; tracking"
            badge="Node · MySQL · React"
            bullets={[
              "API B2B: e-commerce, ML, PagBank, Correios",
              "Eventos e status em tempo real na UI React",
              "Contratos e limites por canal integrados",
            ]}
          >
            Orquestração de pedidos e rastreio ponta a ponta.
          </BulletCard>
          <BulletCard
            dense
            icon={<FiDatabase />}
            title="Middleware Protheus"
            badge="TOTVS · ETL"
            bullets={[
              "Camada entre Protheus e CRMs internos",
              "Normalização e deduplicação de cadastros",
              "Jobs e filas para carga incremental",
            ]}
          >
            Dados do ERP expostos de forma consistente aos demais sistemas.
          </BulletCard>
          <BulletCard
            dense
            icon={<FiBarChart2 />}
            title="Power BI"
            badge="Power BI · DAX"
            bullets={[
              "Modelos semânticos alinhados às fontes internas",
              "KPIs comerciais, logística e financeiros",
              "Publicação e refresh no padrão corporativo",
            ]}
          >
            Painéis analíticos consumindo o mesmo ecossistema de dados.
          </BulletCard>
        </motion.div>
      </motion.div>
    </section>
  );
}

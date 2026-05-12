"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "./print.css";

function CurriculoContent() {
  const searchParams = useSearchParams();
  const shouldPrint = searchParams.get("print") === "1";

  useEffect(() => {
    if (!shouldPrint) return;
    const t = window.setTimeout(() => window.print(), 200);
    return () => window.clearTimeout(t);
  }, [shouldPrint]);

  return (
    <main className="curriculo-root">
      <div className="no-print curriculo-actions">
        <a href="/" className="curriculo-link">
          Voltar ao portfólio
        </a>
        <button
          type="button"
          className="curriculo-button"
          onClick={() => window.print()}
        >
          Imprimir / Salvar em PDF
        </button>
      </div>

      <article className="curriculo-paper" aria-label="Currículo em PDF">
        <header className="curriculo-header">
          <div className="curriculo-titleRow">
            <h1 className="curriculo-name">Antonio Pedro Reale Barbosa</h1>
            <p className="curriculo-handle">@ne0ngh0st</p>
          </div>

          <p className="curriculo-subtitle">
            Desenvolvedor de Sistemas &amp; Integrações • Segurança da Informação
            (em formação)
          </p>

          <div className="curriculo-meta">
            <div>
              <strong>Local:</strong> São Paulo, SP
            </div>
            <div>
              <strong>Email:</strong> fantasmaneon@gmail.com
            </div>
            <div>
              <strong>WhatsApp:</strong> +55 11 95658-0191
            </div>
            <div>
              <strong>GitHub:</strong> github.com/ne0ngh0st
            </div>
            <div>
              <strong>LinkedIn:</strong> linkedin.com/in/antonioautopel
            </div>
          </div>
        </header>

        <section className="curriculo-section">
          <h2>Resumo</h2>
          <p className="curriculo-paragraph">
            Atuação prática em sistemas internos, integrações B2B e análise de dados.
            Construí do zero um ecossistema de gestão comercial com +200 usuários
            diários, incluindo CRM, BI, relatórios e integrações com ERP (TOTVS Protheus).
            Em transição para Segurança da Informação: homelab, testes em laboratório isolado
            e estudo contínuo (FIAP).
          </p>
        </section>

        <section className="curriculo-section">
          <h2>Experiência</h2>

          <div className="curriculo-item">
            <h3>Ecossistema interno de gestão comercial (Cliente)</h3>
            <p className="curriculo-role">
              Desenvolvedor full-stack e arquiteto das integrações operacionais
            </p>
            <ul className="curriculo-list">
              <li>
                <strong>CRM Comercial (PALMA)</strong> — PHP + MySQL:
                módulos de BI, relatórios, notificações, mapa geográfico interativo (D3.js + IBGE),
                controle de carteira e <strong>11 perfis de permissão</strong>; utilizado por{" "}
                <strong>+200 usuários diários</strong> em produção.
              </li>
              <li>
                <strong>Integrações de Pedidos &amp; Tracking</strong> — API B2B própria:
                rastreamento e consulta de pedidos cruzando e-commerce do grupo, Mercado Livre,
                PagBank, Correios e parceiros logísticos; interface React para visão operacional em tempo real.
              </li>
              <li>
                <strong>Middleware TOTVS Protheus (ERP/ETL)</strong>:
                camada intermediária entre o ERP e sistemas internos, normalizando exports para alimentar
                dashboards, relatórios e fluxos operacionais.
              </li>
              <li>
                <strong>Power BI &amp; Dashboards</strong>:
                construção de painéis analíticos e KPIs integrados às fontes do ecossistema.
              </li>
            </ul>
          </div>

          <div className="curriculo-item">
            <h3>CRM de Licitações Públicas</h3>
            <p className="curriculo-role">
              Laravel + Next.js + MySQL (em fase final / integração)
            </p>
            <ul className="curriculo-list">
              <li>
                Sistema dedicado ao ciclo de licitações públicas com integração de dados e evolução contínua.
              </li>
            </ul>
          </div>
        </section>

        <section className="curriculo-section">
          <h2>Segurança da Informação (trilha atual)</h2>
          <ul className="curriculo-list">
            <li>
              <strong>Homelab &amp; laboratórios isolados</strong>: serviços dedicados para estudo (ex.: Jellyfin, Pi-hole),
              sem exposição à rede de produção.
            </li>
            <li>
              <strong>Pentest em instância legada</strong> do CRM em laboratório controlado:
              mapeamento de superfície de ataque, testes de injeção, análise de autenticação e hardening.
            </li>
            <li>
              <strong>Ferramentas/ambiente</strong>: Kali Linux, Nmap, Burp Suite, Metasploit,
              TryHackMe, PortSwigger Web Security Academy e HackTheBox.
            </li>
            <li>
              <strong>Roadmap</strong>: eJPT → Security+ → OSCP.
            </li>
            <li>
              <strong>Formação</strong>: Cibersegurança — FIAP (cursando).
            </li>
          </ul>
        </section>

        <section className="curriculo-section">
          <h2>Tecnologias</h2>
          <div className="curriculo-columns">
            <div>
              <h3>Backend</h3>
              <p className="curriculo-paragraphInline">
                PHP, Laravel, Node.js, MySQL, Python
              </p>
            </div>
            <div>
              <h3>Frontend</h3>
              <p className="curriculo-paragraphInline">
                React, Next.js, TypeScript, JavaScript, HTML5, CSS3
              </p>
            </div>
            <div>
              <h3>Dados &amp; BI</h3>
              <p className="curriculo-paragraphInline">
                Power BI (DAX), D3.js, TOTVS
              </p>
            </div>
            <div>
              <h3>Infra &amp; Segurança</h3>
              <p className="curriculo-paragraphInline">
                Linux, Docker, Git, Kali Linux, Nginx, Bash
              </p>
            </div>
          </div>
        </section>

        <section className="curriculo-section">
          <h2>Disponibilidade</h2>
          <p className="curriculo-paragraph">
            Busco oportunidades entry-level em SOC, análise de vulnerabilidades ou desenvolvimento com visão de
            segurança. Também disponível para projetos freelance em desenvolvimento, integrações e infraestrutura Linux.
          </p>
        </section>
      </article>
    </main>
  );
}

export default function CurriculoPage() {
  return (
    <Suspense
      fallback={
        <main className="curriculo-root" aria-busy="true">
          <p className="no-print curriculo-actions">Carregando currículo…</p>
        </main>
      }
    >
      <CurriculoContent />
    </Suspense>
  );
}

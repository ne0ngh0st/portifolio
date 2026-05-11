"use client";

import { motion } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { sectionVariants, viewportOnce } from "@/lib/motion";

const terminalLines = [
  "$ date -u",
  "> UTC · chrony (lab clock, sem drama de leap second)",
  "$ whoami",
  "> ne0ngh0st — dev em transição para security (honesto sobre gaps)",
  "$ cat /etc/issue.lab 2>/dev/null || echo 'homelab'",
  "> VLAN isolada · hosts sem rota default para WAN sensível",
  "$ ls -1 ~/lab/services",
  "> jellyfin  pihole  gitea  vaultwarden  docker-compose stacks",
  "$ make sandwich 2>&1",
  "> make: *** No rule to make target 'sandwich'.  Stop.  (try: sudo make sandwich)",
  "$ cat homelab.txt",
  "> Pi-hole (DNS sink) · scans internos · snapshots antes de mudança",
  "$ head -n 5 ~/notes/thm-progress.txt",
  "> rooms: AD, NetSec basics — foco em fundamentos, não em badge farming",
  "$ grep -E 'burp|zap|nikto' ~/tooling.txt",
  "> Burp Community · OWASP ZAP · nikto (baseline em lab)",
  "$ curl -s https://example.invalid/rfc2549 2>&1 | head -1",
  "> carrier pigeon not responding — IPoAC deferred (RFC 1149 was a joke, this one too)",
  "$ cat roadmap.txt",
  "> eJPT → Security+ → OSCP (ordem realista; tempo de estudo reservado)",
  "$ echo $NEXT_STEPS",
  "> mais PortSwigger · menos tutorial hell · writeups próprios",
  "$ echo hunter2 | sha256sum | cut -c1-8",
  "> a7f3e2b1  # (não é senha real — meme clássico do IRC)",
  "$",
];

/** Arte ASCII da “nota” (clássica; `ne0ngh0st` no lugar do nome da peça original). */
const asciiBillLines = [
  "           . ...::::::::-<:::::.....",
  "         ::<::<???!!:!/!!!!!!!?!!!x+:...",
  "      .:<:xiXuXXX!XX!:<:::XxXXXXXXX??!!x..",
  "    .:<!xiH@*****HtUXnX<<XUW@*!****!XiXXhs.",
  "   .<!Xd*!\"\"\"```\"\"\"#*tbWW@*\"\"\"````\"\"\"*%H?M%s",
  "   ~?tH#\"           `\"\"\"\"\"`          ``!X!?Mk",
  "  ~.SRF`                               '?X??5.",
  "..::XWF\"                                 't!!Xk",
  "<!!t$>                                   ?!!?l",
  "XH!MR                                    )%!XM",
  "4XHtB>                                   x?XHR",
  "`!?%ML                                  .XXX8F",
  "'`!!!%x                ..              .xXHt@\"",
  " '%kX?%x.            .x+x..          ..nXXWWF",
  "  \"%k?!?+x..     ..:x!!!!!+:........xnXXt8**\"",
  "   `!4XX??x+-::::++?!`~`!!!!+++mmmnX?HtH$#\"",
  "     \"\"*tXUXX????!!!>   `!((??XSMMXMW2M*\"",
  "       ^\"!*%MtUUWin<~    xiUWWWW@@M**\"",
  "          `^\"\"\"#***k>   .UN@**#\"\"\"\"",
  "                ``\"?>  :x9$$$$",
  "                   $X  ?X@$$$$",
  "                   $k  !XR$$$$",
  "                   $k  !XQ$$$$",
  "                   $k  !HM$$$$",
  "                   $k  ?XH$$$$",
  "                   $f  !XM$$$$",
  "                   $X  !?9$$$$",
  "                   $H  !?M$$$$",
  "                   $f  ~!*$$$$",
  "                   $&..uUWB$$$",
  "                   $B@***$$$$$",
  "                  :$#\"\"\"\"\"\"*N$",
  "                  <X.. ..::Q$$",
  "                  `%mcxudWN$$#",
  "                   7P*****$$$$",
  "                   $6  HMM$$$$",
  "                   $E  ??9$$$$",
  "                   $B  !XM$$$$",
  "                   $$  !XR$$$$",
  "                   $$  !XM$$$$",
  "                   $$  !?5$$$$",
  "                   $$  !XM$$$$",
  "                   $$  !XI$$$$",
  "                   $$  !XM$$$$",
  "                   $$  !?M$$$$",
  "                   $$  ?XM$$$$",
  "                   $$  !X9$$$$",
  "                   $$  !X9$$$$",
  "                   $$  ??M$$$$",
  "                   $$  !!S$$$$",
  "                   $$  ?XM$$$$",
  "                   $$  !?N$$$$",
  "                   $$  !!$$$$$",
  "                   $$  !!$$$$$",
  "                   $$  !!9$$$$",
  "                   $$  !!9$$$$",
  "                   $$  !!9$$$$",
  "                   $$  !!7$$$$",
  "                   9$  ~!!R$$$",
  "                   M5ULuUuU$$$",
  "                  X)H****!*R$5L",
  "                  xx(\"`` `(7T9bL",
  "                  4iiL.:xuiWW@$%",
  "                  ?RNHWW@NN$$$$",
  "                  :$#\"\"##T$$$$",
  "                   $!!  XX8$$$",
  "                   $!<  !!M$$$",
  "                   $x~  !?t$$$",
  "                   $M>  !!$$$$",
  "                   $M!  ~?R$$$           ...........",
  "                   $t>  `!N$$$     xxx:xnnmmmemmmm@+<",
  "                   $X!  <XM$$$&...u8T?\"?TRT9R$F\"\"????",
  "                   $X!  `?9$$$%!!!!#!<:!9M2MM$!<><<!!",
  "                   $9:  '!9$$$!:?!:<:<<!XN6DM$X?!>!!!",
  "                   $X!  '4M$$$!<!!!!?!:!X8@$P*??!~<`!",
  "                   $X!  `49$$$!!!!!<!?!!X$I$f\"\"``````",
  "                   $X!  <!8$$$X!!!!<!<:>XM8B>  .....",
  "                   $X!  <!M$$$X!!!!?!>!/?H@@kuuemmm+<",
  "                   $X!  <?9$$$X!!!!!!<<>?RRNZ$ZF\"\"?\"?",
  "                   $XX  '!9$$$X!!!!!!:!>SRMM8$k:::<!<",
  "                   $3X  '!M$$$X!()!XX!!!tRRN@$E!<!!!X",
  "                   $4X  '!M$$$&~```4H!!!?###**%!:<!!X",
  "                   $4X  '?M$$$M    ^\"-~~^\"\"\"\"\"\"-~~-~~",
  "                   $4X  '!M$$$R",
  "                   $$X  '!M$$$R",
  "                   $$K: '!X$$$R",
  "                   '$R. '!H$$$R  ne0ngh0st",
  "                    '%L.:XSR$RP",
  "                     \"~!****\"\"",
  "                       \"\"\"\"",
];

const asciiTerminalLines = ["$ cat ~/lab/bill.txt", ...asciiBillLines];

export function Seguranca() {
  return (
    <section
      id="seguranca"
      className="deck-slide section-bg-seguranca scroll-mt-16"
      aria-labelledby="seguranca-heading"
    >
      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 md:px-12 md:py-10 lg:max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={sectionVariants}
      >
        <div className="shrink-0">
          <h2
            id="seguranca-heading"
            className="crt-terminal-glow font-display text-xl font-bold text-accent-green md:text-2xl"
          >
            Segurança — laboratório e trilha
          </h2>
          <p className="mt-2 max-w-3xl text-pretty font-display text-sm leading-relaxed text-[#7bdc8a] md:text-base">
            Terminal com contexto real: homelab isolado, ferramentas que uso e próximos passos
            — sem inventar certificação ou cargo que ainda não existem no CV.
          </p>
        </div>

        <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex h-[min(34rem,68vh)] min-h-[14rem] w-full min-w-0 flex-col sm:h-[min(36rem,70vh)] lg:h-[min(40rem,72vh)]">
            <TerminalWindow
              fillHeight
              windowTitle="ne0ngh0st@lab:~/security"
              lines={terminalLines}
              className="w-full min-h-0"
            />
          </div>
          <div className="flex h-[min(34rem,68vh)] min-h-[14rem] w-full min-w-0 flex-col sm:h-[min(36rem,70vh)] lg:h-[min(40rem,72vh)]">
            <TerminalWindow
              fillHeight
              variant="ascii"
              windowTitle="ne0ngh0st@lab:~/ascii"
              lines={asciiTerminalLines}
              className="w-full min-h-0"
            />
          </div>
        </div>

        <p className="crt-terminal-glow mt-5 text-center font-display text-[10px] uppercase tracking-widest text-[#5edc6b] md:mt-6 md:text-[11px]">
          Status: learning · building · reporting
        </p>

        <motion.blockquote
          className="crt-terminal-glow mx-auto mt-6 max-w-3xl text-pretty text-center font-display text-sm leading-relaxed text-accent-green md:mt-8 md:text-base"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Homelab, prática real e sistemas que agora estudo como quebrar — sem
          certificação formal ainda, sem fingir que tenho.
        </motion.blockquote>
      </motion.div>
    </section>
  );
}

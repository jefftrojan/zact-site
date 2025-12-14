"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  FileText,
} from "lucide-react";
import CinematicBackground from "./CinematicBackground";
import { useMemo, useState } from "react";

export default function FeaturesSection() {
  const [mode, setMode] = useState<"during" | "after">("during");

  const primaryFeatures = [
    {
      icon: Calendar,
      title: "Joins meetings automatically",
      description:
        "Zact shows up on time with meeting context so you don’t have to copy/paste agendas or remind it who’s who.",
      benefits: ["Calendar‑aware", "Prepared from the invite", "Stays relevant"],
    },
    {
      icon: MessageSquare,
      title: "Active in‑meeting participation",
      description:
        "Zact can speak up, ask clarifying questions, and keep the group aligned — not just sit quietly taking notes.",
      benefits: ["Speaks when it matters", "Tracks unresolved threads", "Drives to decisions"],
    },
    {
      icon: FileText,
      title: "Automatic follow‑through",
      description:
        "After the meeting, it converts what happened into execution — tasks, docs, and updates — without you chasing people.",
      benefits: ["Decisions → tasks", "Owners + deadlines", "Syncs to your tools"],
    },
  ];

  const modeLines = useMemo(() => {
    if (mode === "during") {
      return [
        "Uses meeting context (title, agenda, attendees) to stay relevant",
        "Can speak up to clarify owners, deadlines, and open questions",
        "Keeps a real-time memory of what was decided and what’s unresolved",
      ];
    }
    return [
      "Creates a clean recap + decisions (not a raw transcript)",
      "Sends follow‑ups and syncs outcomes into docs + tasks",
      "Maintains history + notifications so nothing slips",
    ];
  }, [mode]);

  return (
    <section className="min-h-[100svh] flex items-center relative overflow-hidden" id="features">
      <CinematicBackground src="/bg-2.png" overlay={0.82} imageClassName="object-cover object-center" />
      
      <div className="container mx-auto px-6 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-semibold mb-4 lg:mb-6 text-foreground">
              Built for real conversations
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Zact is a full‑stack platform for AI meeting assistants that actively participate and automatically sync outcomes to your workspace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="zact-glass-card p-6 sm:p-8"
          >
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Feature rows (no grid of cards) */}
              <div className="lg:col-span-7 space-y-6">
                {primaryFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-chart-2/15 border border-chart-2/30 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-lg font-medium text-foreground">{f.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{f.description}</div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {f.benefits.join(" • ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* During/After toggle (single panel) */}
              <div className="lg:col-span-5 lg:border-l lg:border-border/50 lg:pl-8">
                <div className="text-sm font-medium text-foreground mb-3">What it feels like</div>
                <div className="inline-flex rounded-full border border-border/60 bg-background/35 backdrop-blur-md p-1">
                  <button
                    type="button"
                    onClick={() => setMode("during")}
                    className={[
                      "px-3 py-1.5 rounded-full text-xs transition-colors",
                      mode === "during" ? "bg-chart-2/25 text-foreground" : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    During the call
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("after")}
                    className={[
                      "px-3 py-1.5 rounded-full text-xs transition-colors",
                      mode === "after" ? "bg-chart-2/25 text-foreground" : "text-muted-foreground hover:text-foreground",
                    ].join(" ")}
                  >
                    After the call
                  </button>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {modeLines.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-chart-2 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Also included</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    Syncs to your tools (docs + tasks) • Meeting context awareness (agenda + attendees) • Real‑time memory + history • Notifications & traceability • Approvals when needed • Security‑minded by default
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
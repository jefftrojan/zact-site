"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Database,
  Brain,
  Clock,
  Shield,
  BarChart3,
  Zap,
  Users,
  MessageSquare,
  Target,
  Cpu,
  Lock,
} from "lucide-react";

export default function FeaturesSection() {
  const primaryFeatures = [
    {
      icon: Workflow,
      title: "End-to-End Automation",
      description:
        "From lead generation to customer success, everything flows through one coordinated system with no manual handoffs.",
      benefits: [
        "Zero context switching",
        "Automated workflows",
        "Instant execution",
      ],
    },
    {
      icon: Database,
      title: "Shared Context",
      description:
        "Agents communicate with each other, sharing customer data and insights in real-time across your entire business.",
      benefits: [
        "Unified data layer",
        "Real-time sync",
        "Cross-functional insights",
      ],
    },
    {
      icon: Brain,
      title: "SaaS-Specific Intelligence",
      description:
        "Pre-trained on SaaS metrics, funnels, and growth strategies that actually work for subscription businesses.",
      benefits: [
        "SaaS expertise built-in",
        "Industry best practices",
        "Proven strategies",
      ],
    },
  ];

  const metrics = [
    { label: "Time saved", value: "70%", sub: "per founder", color: "chart-1" },
    { label: "Conversion lift", value: "+40%", sub: "trial → paid", color: "chart-2" },
    { label: "Tools replaced", value: "15+", sub: "avg stack", color: "chart-4" },
  ];

  const featureColors = ["chart-1", "chart-2", "chart-4"] as const;
  const metricFromClasses = ["from-chart-1/40", "from-chart-2/40", "from-chart-4/40"] as const;

  const secondaryFeatures = [
    {
      icon: Clock,
      title: "Real-Time Decisions",
      desc: "Actions triggered instantly",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "SOC 2 compliant & encrypted",
    },
    {
      icon: BarChart3,
      title: "Built-in Analytics",
      desc: "Unified reporting dashboard",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Sub-second response times",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      desc: "Human oversight & approval",
    },
    {
      icon: Target,
      title: "Goal Optimization",
      desc: "AI-driven goal achievement",
    },
  ];

  const comparisonPairs = [
    {
      oldTitle: "Manual handoffs",
      oldDesc: "People pass tasks across apps",
      newTitle: "Automated flows",
      newDesc: "Agents coordinate end‑to‑end",
      color: "chart-1",
    },
    {
      oldTitle: "Siloed tools",
      oldDesc: "Data scattered in 15+ systems",
      newTitle: "Shared context",
      newDesc: "One brain across your stack",
      color: "chart-2",
    },
    {
      oldTitle: "Slow decisions",
      oldDesc: "Wait for weekly reviews",
      newTitle: "Real‑time actions",
      newDesc: "Metrics → action in seconds",
      color: "chart-4",
    },
  ];

  const agentShowcase = [
    {
      name: "Growth Agent",
      icon: Zap,
      tasks: ["Landing pages", "A/B testing", "CAC tracking"],
      color: "chart-1",
    },
    {
      name: "Finance Agent",
      icon: BarChart3,
      tasks: ["Bookkeeping", "Budgets", "Reporting"],
      color: "chart-2",
    },
    {
      name: "Legal Agent",
      icon: Lock,
      tasks: ["Contracts", "Compliance", "NDAs"],
      color: "chart-3",
    },
    {
      name: "Success Agent",
      icon: MessageSquare,
      tasks: ["Onboarding", "Health scores", "Retention"],
      color: "chart-4",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" id="features">
      {/* Glassmorphism background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-chart-1/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-medium mb-6 text-foreground">Example Agents</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Install agents like you’d hire employees — but faster, cheaper, and smarter.</p>
          </motion.div>

          {/* Highlights strip (reference style) */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-card/70 border border-border/40 rounded-xl p-5 backdrop-blur-xl">
              <div className="text-sm font-medium text-foreground mb-1">Regain Focus Time</div>
              <div className="text-muted-foreground text-sm">Stop status meetings. Zact answers what’s moving, what’s stuck, and what’s next.</div>
            </div>
            <div className="bg-card/70 border border-border/40 rounded-xl p-5 backdrop-blur-xl">
              <div className="text-sm font-medium text-foreground mb-1">Spot blockers early</div>
              <div className="text-muted-foreground text-sm">Detect risks, delays, and stalled dependencies in real time — not post‑mortem.</div>
            </div>
          </motion.div>

          {/* Product features with agent examples */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Real-Time Orchestration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              className="bg-card/80 border border-border/50 rounded-xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                <h3 className="text-xl font-medium text-foreground">Real-Time Team Orchestration</h3>
               </div>
               <div className="mt-6 grid sm:grid-cols-2 gap-3">
                 <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                   <div className="text-xs text-muted-foreground mb-1">GrowthAgent</div>
                   <div className="text-sm text-foreground">Builds landing pages, runs ads, A/B tests, tracks CAC</div>
                 </div>
                 <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                   <div className="text-xs text-muted-foreground mb-1">FinanceGPT</div>
                   <div className="text-sm text-foreground">Manages bookkeeping, budgets, and investor updates</div>
                 </div>
                 <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                   <div className="text-xs text-muted-foreground mb-1">LegalBot</div>
                   <div className="text-sm text-foreground">Drafts and sends contracts, handles compliance</div>
                 </div>
                 <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                   <div className="text-xs text-muted-foreground mb-1">InboxAgent</div>
                   <div className="text-sm text-foreground">Replies to sales/support emails and updates CRM</div>
                 </div>
                 <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                   <div className="text-xs text-muted-foreground mb-1">HRAgent</div>
                   <div className="text-sm text-foreground">Manages payroll and onboarding via Deel/Remote APIs</div>
                 </div>
                 <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                   <div className="text-xs text-muted-foreground mb-1">ProductManagerGPT</div>
                   <div className="text-sm text-foreground">Writes PRDs, prioritizes roadmap, monitors analytics</div>
                 </div>
               </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div className="text-xs text-muted-foreground mb-1">Launch Campaign</div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-foreground">Growth</div>
                    <span className="text-xs px-2 py-0.5 rounded bg-chart-1/10 text-chart-1 border border-chart-1/20">On Target</span>
                  </div>
                </div>
                <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div className="text-xs text-muted-foreground mb-1">Pricing Review</div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-foreground">Product</div>
                    <span className="text-xs px-2 py-0.5 rounded bg-chart-2/10 text-chart-2 border border-chart-2/20">Needs Attention</span>
                  </div>
                </div>
                <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div className="text-xs text-muted-foreground mb-1">API Integration</div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-foreground">Engineering</div>
                    <span className="text-xs px-2 py-0.5 rounded bg-destructive/10 text-destructive border border-destructive/20">Blocked</span>
                  </div>
                </div>
                <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div className="text-xs text-muted-foreground mb-1">Mid‑Market Expansion</div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-foreground">Sales</div>
                    <span className="text-xs px-2 py-0.5 rounded bg-chart-1/10 text-chart-1 border border-chart-1/20">On Target</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 40-Hour Productivity Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card/80 border border-border/50 rounded-xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                <h3 className="text-xl font-medium text-foreground">40‑Hour Productivity Analytics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div>
                    <div className="text-xs text-muted-foreground">Execution Time</div>
                    <div className="text-lg font-medium text-foreground">65%</div>
                  </div>
                  <div className="text-xs text-muted-foreground">1% vs 4‑wk avg</div>
                </div>
                <div className="flex items-center justify-between bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div>
                    <div className="text-xs text-muted-foreground">Meeting Time</div>
                    <div className="text-lg font-medium text-foreground">20%</div>
                  </div>
                  <div className="text-xs text-muted-foreground">+5% above target</div>
                </div>
                <div className="flex items-center justify-between bg-muted/20 rounded-lg p-3 border border-border/30">
                  <div>
                    <div className="text-xs text-muted-foreground">Admin Time</div>
                    <div className="text-lg font-medium text-foreground">15%</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Near optimal</div>
                </div>
              </div>
              </motion.div>
          </div>

          {/* Trust & Security strip */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <div className="bg-card/70 border border-border/40 rounded-xl p-4 backdrop-blur-xl text-sm">
              <span className="font-medium text-foreground">Zero Data Retention</span>
              <div className="text-muted-foreground">Your data stays yours.</div>
            </div>
            <div className="bg-card/70 border border-border/40 rounded-xl p-4 backdrop-blur-xl text-sm">
              <span className="font-medium text-foreground">SOC‑2 Minded</span>
              <div className="text-muted-foreground">Enterprise‑grade security.</div>
            </div>
            <div className="bg-card/70 border border-border/40 rounded-xl p-4 backdrop-blur-xl text-sm">
              <span className="font-medium text-foreground">Integrates with your tools</span>
              <div className="text-muted-foreground">Slack, HubSpot, Notion, Google, and more.</div>
            </div>
          </div>

          {/* Secondary Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {secondaryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm hover:bg-card/80"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agent Showcase */}
          <motion.div
            className="bg-card/80 border border-border/50 rounded-2xl p-8 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">Meet Your AI Team</h3>
              <p className="text-muted-foreground">Specialized agents that work together to run your entire business</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agentShowcase.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className={`w-16 h-16 bg-${agent.color}/10 border border-${agent.color}/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm`}>
                    <agent.icon className={`w-8 h-8 text-${agent.color}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">{agent.name}</h4>
                    <ul className="space-y-1">
                      {agent.tasks.map((task) => (
                        <li key={task} className="text-sm text-muted-foreground">{task}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <motion.div
                className="flex items-center justify-center gap-4 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
                <Cpu className="w-6 h-6 text-primary" />
                <span className="font-medium text-foreground">Coordination Engine</span>
              </motion.div>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                All agents share context through our central coordination engine, ensuring seamless collaboration and optimal outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
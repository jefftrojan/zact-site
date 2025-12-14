import Link from "next/link";
import CinematicBackground from "../../components/CinematicBackground";

export const metadata = {
  title: "Privacy Policy — Zact",
  description:
    "How Zact collects, uses, and protects information when you connect calendars, meetings, and workspace tools.",
};

export default function PrivacyPage() {
  return (
    <main className="py-20 sm:py-24 relative overflow-hidden">
      <CinematicBackground
        src="/bg-2.png"
        overlay={0.93}
        imageClassName="object-cover object-center"
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-sm text-muted-foreground">Legal</div>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Effective: 2025</p>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              This Privacy Policy explains what information Zact collects, how we use it, and
              what choices you have when using Zact and connecting third‑party services (like
              Google Calendar, Google Drive/Docs, Notion, Asana, Jira, and Slack).
            </p>
          </div>

          <div className="space-y-10 text-foreground">
            <section id="overview">
              <h2 className="text-xl font-display font-semibold">1. Overview</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zact is an AI meeting assistant that can join meetings with context, participate in
                real time, and help carry outcomes into your workspace. To do that, Zact may process
                meeting context (title/agenda/attendees), content you provide, and data from
                integrations you choose to connect.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                This policy applies to information processed through the Service, including when you connect integrations and when
                Zact participates in meetings.
              </p>
            </section>

            <section id="who-we-are">
              <h2 className="text-xl font-display font-semibold">2. Who we are</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zact is the data controller for information collected directly through our website and application. When you connect
                integrations and sync outcomes to your workspace, we process information to provide the Service under these terms and
                our agreements with you.
              </p>
            </section>

            <section id="what-we-collect">
              <h2 className="text-xl font-display font-semibold">3. Information we collect</h2>
              <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                <div>
                  <div className="font-medium text-foreground">Account & contact</div>
                  <p className="mt-1">
                    Information you provide such as name, email, and basic account settings.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Meeting context</div>
                  <p className="mt-1">
                    Meeting metadata such as meeting title, description/agenda, participants, time,
                    and related links (e.g., conferencing link), as available via your calendar or
                    meeting provider.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Meeting content you choose to share</div>
                  <p className="mt-1">
                    Content shared during meetings and/or content you provide to Zact for the
                    purpose of generating actions (e.g., decisions, owners, tasks, updates). This may
                    include text and other media depending on product configuration.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Workspace & integration data</div>
                  <p className="mt-1">
                    If you connect integrations (e.g., Google Workspace, Notion, Asana, Jira, Slack),
                    Zact may access data necessary to perform the actions you request or enable,
                    such as reading relevant documents or creating tasks/notes where you already work.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Device & usage</div>
                  <p className="mt-1">
                    Basic usage and diagnostic data (e.g., logs, performance, and error reports) to
                    keep the service reliable and secure.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Cookies & similar technologies</div>
                  <p className="mt-1">
                    We may use cookies or similar technologies for essential functionality (e.g., remembering preferences) and, if
                    enabled, analytics to understand usage and improve the Service. See “Cookies & analytics” below.
                  </p>
                </div>
              </div>
            </section>

            <section id="integrations-permissions">
              <h2 className="text-xl font-display font-semibold">4. Integrations & permissions</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zact only connects to third‑party services when you authorize it. The exact scopes
                and permissions shown in the OAuth consent screen (or integration setup) control what
                Zact can access. Below are common categories of permissions Zact may request depending
                on the features you enable:
              </p>

              <div className="mt-4 space-y-5 text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground">Calendar (e.g., Google Calendar)</div>
                  <ul className="mt-2 space-y-2">
                    <li>Access meeting metadata (title, time, attendees, agenda/description)</li>
                    <li>Join meetings you opt in to (using the conferencing link)</li>
                    <li>Create or update events you request (e.g., follow‑up meetings)</li>
                  </ul>
                </div>

                <div>
                  <div className="font-medium text-foreground">Docs & files (e.g., Google Drive/Docs)</div>
                  <ul className="mt-2 space-y-2">
                    <li>Create or update notes/documents (e.g., meeting outcomes)</li>
                    <li>Read documents you explicitly reference or grant access to</li>
                  </ul>
                </div>

                <div>
                  <div className="font-medium text-foreground">Knowledge & docs (e.g., Notion)</div>
                  <ul className="mt-2 space-y-2">
                    <li>Create pages/databases for meeting outcomes</li>
                    <li>Read/update content you’ve authorized for syncing context and outcomes</li>
                  </ul>
                </div>

                <div>
                  <div className="font-medium text-foreground">Tasks & projects (e.g., Asana, Jira)</div>
                  <ul className="mt-2 space-y-2">
                    <li>Create tasks/issues with owners and deadlines from meeting decisions</li>
                    <li>Update status or add comments you request</li>
                  </ul>
                </div>

                <div>
                  <div className="font-medium text-foreground">Messaging (e.g., Slack)</div>
                  <ul className="mt-2 space-y-2">
                    <li>Post meeting outcomes to channels you specify</li>
                    <li>Send reminders or notifications configured by you</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Google API data usage:</span> if you connect Google services, we use the
                data strictly to provide the features you request (e.g., reading meeting metadata, creating follow‑ups, writing notes).
                You can revoke access at any time in your Google account security settings or within Zact settings.
              </p>
            </section>

            <section id="how-we-use">
              <h2 className="text-xl font-display font-semibold">5. How we use information</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>Provide and operate Zact (joining meetings, participating, and executing follow‑through)</li>
                <li>Personalize behavior to your preferences (when to speak up, where to sync outcomes)</li>
                <li>Maintain reliability, prevent abuse, and improve security</li>
                <li>Communicate with you about product updates and support requests</li>
              </ul>
            </section>

            <section id="ai-processing">
              <h2 className="text-xl font-display font-semibold">6. AI processing</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Zact may use machine learning models to understand meeting context, generate suggested decisions, create tasks, and
                draft updates. Depending on configuration, processing may involve trusted service providers that help run model inference.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You control which meetings Zact joins and which integrations are connected. Where possible, we minimize the data used
                for processing to what’s necessary to provide the feature.
              </p>
            </section>

            <section id="sharing">
              <h2 className="text-xl font-display font-semibold">7. Sharing & subprocessors</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may use vetted third‑party vendors (subprocessors) to host infrastructure, provide
                monitoring, and operate core functionality. See{" "}
                <Link href="/subprocessors" className="underline">
                  Subprocessors
                </Link>
                .
              </p>
            </section>

            <section id="retention">
              <h2 className="text-xl font-display font-semibold">8. Data retention</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We retain data only as long as needed to provide the service, comply with legal
                obligations, and resolve disputes. Retention periods may vary by feature and plan.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You can typically limit retention by disconnecting integrations and limiting which meetings Zact joins. If you request
                deletion, we will take steps to delete or de‑identify data as required by applicable law and our contracts.
              </p>
            </section>

            <section id="security">
              <h2 className="text-xl font-display font-semibold">9. Security</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We take security seriously and use safeguards designed to protect your data. For
                more, see{" "}
                <Link href="/security" className="underline">
                  Security
                </Link>
                .
              </p>
            </section>

            <section id="cookies-analytics">
              <h2 className="text-xl font-display font-semibold">10. Cookies & analytics</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may use cookies for essential functionality. If analytics are enabled, we may collect usage events and metadata to
                understand product performance and improve user experience. Analytics providers may set cookies or collect similar signals
                depending on your browser settings.
              </p>
            </section>

            <section id="international">
              <h2 className="text-xl font-display font-semibold">11. International transfers</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Your information may be processed in countries other than where you live, including where our service providers operate.
                Where required, we use appropriate safeguards for cross‑border transfers.
              </p>
            </section>

            <section id="choices">
              <h2 className="text-xl font-display font-semibold">12. Your choices</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
                <li>Disconnect integrations at any time through the third‑party provider or Zact settings</li>
                <li>Limit which meetings Zact joins</li>
                <li>Control where outcomes are synced (docs/tasks/channels)</li>
              </ul>
            </section>

            <section id="children">
              <h2 className="text-xl font-display font-semibold">13. Children</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The Service is not directed to children. If you believe a child has provided personal information, contact us and we will
                take appropriate steps to delete it.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-xl font-display font-semibold">14. Changes to this policy</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will post the updated version and change the effective date above.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-xl font-display font-semibold">15. Contact</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Privacy questions? Email{" "}
                <a className="underline" href="mailto:hello@usezact.com">
                  hello@usezact.com
                </a>
                .
              </p>
              <div className="mt-6">
                <Link href="/" className="underline text-primary">
                  Back to Home
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}



import Nav from "@/components/Nav";
import StatusChip from "@/components/StatusChip";
import { site, stats, projects, pipeline, skills } from "@/data/site";

function SectionHead({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-9 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
      <h2 className="font-serif text-3xl font-medium">{title}</h2>
      <p className="max-w-[38ch] text-[15px] text-[var(--text-mute)] sm:text-right">
        {note}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top">
      <Nav />

      <main>
        <section className="mx-auto max-w-[1040px] px-6 pb-14 pt-20">
          <h1 className="mb-6 max-w-[16ch] font-serif text-4xl font-medium leading-[1.12] tracking-[-0.01em] sm:text-5xl lg:text-[52px]">
            {site.tagline}
          </h1>
          <p className="mb-8 max-w-[58ch] text-lg text-[var(--text-mute)]">
            {site.lede}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={`mailto:${site.email}`}
              className="rounded-sm bg-[var(--text)] px-5 py-2.5 text-[15px] font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
            >
              Email me
            </a>
            <a
              href="#work"
              className="rounded-sm border border-[var(--line)] px-5 py-2.5 text-[15px] font-medium transition-colors hover:border-[var(--text-mute)]"
            >
              See the work
            </a>
          </div>
        </section>

        <section className="bg-[var(--ink-band)] py-10 text-white">
          <div className="mx-auto grid max-w-[1040px] grid-cols-2 gap-5 px-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/15 pl-4 sm:pl-5">
                <span className="mb-1.5 block font-mono text-2xl font-semibold tabular-nums text-[var(--color-signal-bright)] sm:text-3xl">
                  {s.num}
                </span>
                <span className="text-sm leading-snug text-[#C7CBD3]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-[1040px] px-6">
            <SectionHead
              title="Products & ventures"
              note="Each one built end to end — schema to deployment to daily operation."
            />
            <div>
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="grid gap-4 border-t border-[var(--line)] py-9 md:grid-cols-[230px_1fr] md:gap-7"
                >
                  <div>
                    <h3 className="mb-1.5 font-serif text-[22px] font-medium">
                      {p.name}
                    </h3>
                    <p className="mb-2.5 text-sm text-[var(--text-mute)]">
                      {p.role}
                    </p>
                    <StatusChip status={p.status} label={p.statusLabel} />
                  </div>
                  <div>
                    <p className="mb-3.5 max-w-[64ch]">{p.summary}</p>
                    <ul className="mb-4 max-w-[64ch]">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="relative border-t border-[var(--line)] py-2 pl-5 text-[15.5px]"
                        >
                          <span className="absolute left-0 text-[var(--color-signal)]">
                            —
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-sm border border-[var(--line)] px-2.5 py-1 text-[13px] text-[var(--text-mute)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.links.length > 0 && (
                      <div className="flex flex-wrap gap-2.5">
                        {p.links.map((l) =>
                          l.href ? (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noopener"
                              className="rounded-sm border border-[var(--text)] px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-[var(--text)] hover:text-[var(--bg)]"
                            >
                              {l.label}
                            </a>
                          ) : (
                            <span
                              key={l.label}
                              className="rounded-sm border border-[var(--line)] px-3.5 py-1.5 text-sm font-medium text-[var(--text-mute)]"
                            >
                              {l.label}
                            </span>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pipeline" className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-[1040px] px-6">
            <SectionHead
              title="Shipping next"
              note="Public, reproducible projects being cut from the systems above. Links land here as each one ships."
            />
            <div className="grid gap-x-12 md:grid-cols-2">
              {pipeline.map((item) => (
                <div key={item.name} className="border-t border-[var(--line)] py-5">
                  <div className="mb-1.5 flex items-baseline justify-between gap-3.5">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="text-[16.5px] font-semibold underline decoration-[var(--line)] underline-offset-4 hover:decoration-[var(--text)]"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <h3 className="text-[16.5px] font-semibold">{item.name}</h3>
                    )}
                    <StatusChip status={item.status} label={item.statusLabel} />
                  </div>
                  <p className="max-w-[52ch] text-[15px] text-[var(--text-mute)]">
                    {item.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-[var(--line)] py-16">
          <div className="mx-auto max-w-[1040px] px-6">
            <SectionHead
              title="Skills"
              note="What I bring to a quant, data or engineering team."
            />
            <div className="grid gap-9 md:grid-cols-3">
              {skills.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3.5 text-[15px] font-semibold text-[var(--text-mute)]">
                    {group.title}
                  </h3>
                  <ul>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-[var(--line)] py-2 text-[15.5px] last:border-b"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto grid max-w-[1040px] items-start gap-10 px-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="mb-4 max-w-[14ch] font-serif text-3xl font-medium">
                Let&apos;s talk
              </h2>
              <p className="max-w-[48ch] text-[var(--text-mute)]">
                I&apos;m available now and can start immediately. If you need someone
                who&apos;s equally comfortable in a data warehouse and a trade blotter,
                book a call directly or reach me on WhatsApp or email.
              </p>
            </div>
            <div className="rounded border border-[var(--line)] bg-[var(--bg-raised)] p-6">
              <dl>
                <dt className="text-[13px] text-[var(--text-mute)]">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="border-b border-[var(--line)] hover:border-[var(--text)]"
                  >
                    {site.email}
                  </a>
                </dd>
                <dt className="mt-4 text-[13px] text-[var(--text-mute)]">
                  LinkedIn
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="border-b border-[var(--line)] hover:border-[var(--text)]"
                  >
                    {site.linkedin.replace("https://", "")}
                  </a>
                </dd>
                <dt className="mt-4 text-[13px] text-[var(--text-mute)]">GitHub</dt>
                <dd className="mt-0.5">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener"
                    className="border-b border-[var(--line)] hover:border-[var(--text)]"
                  >
                    {site.github.replace("https://", "")}
                  </a>
                </dd>
                <dt className="mt-4 text-[13px] text-[var(--text-mute)]">
                  Location
                </dt>
                <dd className="mt-0.5">{site.location}</dd>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener"
                  className="inline-block rounded-sm bg-[var(--text)] px-4 py-2 text-[15px] font-medium text-[var(--bg)] transition-opacity hover:opacity-85"
                >
                  Book a call
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-block rounded-sm border border-[var(--line)] px-4 py-2 text-[15px] font-medium transition-colors hover:border-[var(--text-mute)]"
                >
                  WhatsApp
                </a>
                <a
                  href={site.resumeFile}
                  download
                  className="inline-block rounded-sm border border-[var(--line)] px-4 py-2 text-[15px] font-medium transition-colors hover:border-[var(--text-mute)]"
                >
                  Download résumé
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-12 pt-4">
        <div className="mx-auto max-w-[1040px] px-6 text-sm text-[var(--text-mute)]">
          © {new Date().getFullYear()} {site.name}.
        </div>
      </footer>
    </div>
  );
}
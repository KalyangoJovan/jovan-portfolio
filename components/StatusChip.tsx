import type { ProjectStatus } from "@/data/site";

export default function StatusChip({
  status,
  label,
}: {
  status: ProjectStatus;
  label: string;
}) {
  const color =
    status === "live"
      ? "text-[var(--color-live)] dark:text-[var(--color-live-bright)]"
      : status === "research"
        ? "text-[var(--color-signal)] dark:text-[var(--color-signal-bright)]"
        : "text-[var(--text-mute)]";

  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--line)] bg-[var(--bg-raised)] px-3 py-1 text-[12.5px] font-medium ${color}`}
    >
      <span className="h-[7px] w-[7px] rounded-full bg-current" />
      {label}
    </span>
  );
}
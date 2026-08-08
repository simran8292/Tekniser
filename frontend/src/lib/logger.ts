export type LogLevel = "info" | "warn" | "error";

export function logEvent(level: LogLevel, event: string, details?: Record<string, unknown>) {
  const timestamp = new Date().toISOString();
  const logPayload = {
    timestamp,
    level,
    event,
    ...details,
  };

  if (level === "error") {
    console.error(`[TAKNISER-LOG]`, JSON.stringify(logPayload));
  } else if (level === "warn") {
    console.warn(`[TAKNISER-LOG]`, JSON.stringify(logPayload));
  } else {
    console.log(`[TAKNISER-LOG]`, JSON.stringify(logPayload));
  }
}

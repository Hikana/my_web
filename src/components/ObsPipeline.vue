<template>
  <figure class="diagram" aria-label="可觀測性管線：eBPF 到 Prometheus、Loki 再到 Grafana">
    <svg viewBox="0 0 560 168" role="img" class="w-full h-auto">
      <title>攻擊行為可觀測性管線</title>
      <rect x="0" y="0" width="560" height="168" rx="12" fill="#0c1016" />
      <rect x="0.5" y="0.5" width="559" height="167" rx="12" fill="none" stroke="#1a222c" />

      <rect x="16" y="44" width="118" height="80" rx="8" fill="#11161e" stroke="rgba(34,211,238,0.35)" />
      <text x="75" y="78" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="IBM Plex Sans, sans-serif" letter-spacing="1.6">HOST</text>
      <text x="75" y="98" text-anchor="middle" fill="#e8edf2" font-size="12" font-family="IBM Plex Sans, sans-serif">eBPF / 節點</text>

      <path d="M140 84 H168" stroke="#22d3ee" stroke-width="1.4" marker-end="url(#arrow)" />

      <rect x="176" y="22" width="128" height="52" rx="8" fill="#11161e" stroke="rgba(34,211,238,0.28)" />
      <text x="240" y="42" text-anchor="middle" fill="#8b98a5" font-size="10" font-family="IBM Plex Sans, sans-serif" letter-spacing="1.4">METRICS</text>
      <text x="240" y="60" text-anchor="middle" fill="#e8edf2" font-size="12" font-family="IBM Plex Sans, sans-serif">Prometheus</text>

      <rect x="176" y="94" width="128" height="52" rx="8" fill="#11161e" stroke="rgba(34,211,238,0.28)" />
      <text x="240" y="114" text-anchor="middle" fill="#8b98a5" font-size="10" font-family="IBM Plex Sans, sans-serif" letter-spacing="1.4">LOGS</text>
      <text x="240" y="132" text-anchor="middle" fill="#e8edf2" font-size="12" font-family="IBM Plex Sans, sans-serif">Loki</text>

      <path d="M304 48 H332" stroke="#22d3ee" stroke-width="1.4" marker-end="url(#arrow)" />
      <path d="M304 120 H332" stroke="#22d3ee" stroke-width="1.4" marker-end="url(#arrow)" />

      <rect x="340" y="44" width="118" height="80" rx="8" fill="#11161e" stroke="rgba(34,211,238,0.45)" />
      <text x="399" y="78" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="IBM Plex Sans, sans-serif" letter-spacing="1.6">VIZ</text>
      <text x="399" y="98" text-anchor="middle" fill="#e8edf2" font-size="12" font-family="IBM Plex Sans, sans-serif">Grafana</text>

      <path d="M458 84 H486" stroke="#22d3ee" stroke-width="1.4" marker-end="url(#arrow)" />

      <rect x="494" y="54" width="50" height="60" rx="8" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.4)" />
      <text x="519" y="82" text-anchor="middle" fill="#22d3ee" font-size="10" font-family="IBM Plex Sans, sans-serif">ALERT</text>
      <text x="519" y="98" text-anchor="middle" fill="#8b98a5" font-size="9" font-family="IBM Plex Sans, sans-serif">規則</text>

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#22d3ee" />
        </marker>
      </defs>
    </svg>
    <figcaption class="sr-only">從主機 eBPF 收集指標與日誌，經 Prometheus 與 Loki 匯入 Grafana 並觸發警示。</figcaption>
  </figure>
</template>

<style scoped>
.diagram {
  margin: 0;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

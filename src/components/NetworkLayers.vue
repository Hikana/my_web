<template>
  <figure class="diagram" aria-label="三層網路架構示意：WAN、DMZ、LAN">
    <svg viewBox="0 0 560 220" role="img" class="w-full h-auto">
      <title>WAN / DMZ / LAN 三層隔離</title>
      <rect x="0" y="0" width="560" height="220" rx="12" fill="#0c1016" />
      <rect x="0.5" y="0.5" width="559" height="219" rx="12" fill="none" stroke="#1a222c" />

      <rect x="16" y="16" width="528" height="52" rx="8" fill="#11161e" stroke="rgba(34,211,238,0.35)" />
      <text x="32" y="38" fill="#22d3ee" font-size="11" font-family="IBM Plex Sans, sans-serif" letter-spacing="2.4">WAN</text>
      <text x="32" y="54" fill="#8b98a5" font-size="11" font-family="IBM Plex Sans, sans-serif">外部網段 · 入口流量</text>
      <rect x="400" y="28" width="124" height="28" rx="6" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.4)" />
      <text x="462" y="46" text-anchor="middle" fill="#e8edf2" font-size="11" font-family="IBM Plex Sans, sans-serif">Internet</text>

      <rect x="16" y="84" width="528" height="52" rx="8" fill="#11161e" stroke="rgba(34,211,238,0.22)" />
      <text x="32" y="106" fill="#22d3ee" font-size="11" font-family="IBM Plex Sans, sans-serif" letter-spacing="2.4">DMZ</text>
      <text x="32" y="122" fill="#8b98a5" font-size="11" font-family="IBM Plex Sans, sans-serif">Gateway · 公開服務暴露層</text>
      <rect x="400" y="96" width="124" height="28" rx="6" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.28)" />
      <text x="462" y="114" text-anchor="middle" fill="#e8edf2" font-size="11" font-family="IBM Plex Sans, sans-serif">LXC / NAT</text>

      <rect x="16" y="152" width="528" height="52" rx="8" fill="#11161e" stroke="#1a222c" />
      <text x="32" y="174" fill="#8b98a5" font-size="11" font-family="IBM Plex Sans, sans-serif" letter-spacing="2.4">LAN</text>
      <text x="32" y="190" fill="#5c6a76" font-size="11" font-family="IBM Plex Sans, sans-serif">Client 實驗網段 · 內網隔離</text>
      <rect x="400" y="164" width="124" height="28" rx="6" fill="#0c1016" stroke="#1a222c" />
      <text x="462" y="182" text-anchor="middle" fill="#e8edf2" font-size="11" font-family="IBM Plex Sans, sans-serif">iptables</text>

      <line x1="280" y1="68" x2="280" y2="84" stroke="#22d3ee" stroke-width="1.2" opacity="0.7" />
      <line x1="280" y1="136" x2="280" y2="152" stroke="#22d3ee" stroke-width="1.2" opacity="0.4" />
    </svg>
    <figcaption class="sr-only">以 Proxmox VE 與 LXC 實作的 WAN、DMZ、LAN 三層隔離架構。</figcaption>
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

export const profile = {
  name: '周聖倫',
  identity: '國立暨南國際大學 資訊管理學系 · 資安與系統架構',
  email: 'k0975377634@gmail.com',
  phoneDisplay: '0975-377-634',
  phoneTel: '+886975377634',
  summary:
    '資訊管理系學生，專注於資安與系統架構，具備 Linux 系統管理、容器化與監控系統實作經驗。曾主導建置資安攻防教學環境，模擬完整攻擊流程並設計多層監控機制，熟悉 Docker、網路架構與系統行為分析，具備從系統部署到觀測分析的實務能力。',
}

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    zh: '語言',
    items: ['JavaScript', 'Python', 'C#'],
  },
  {
    id: 'web',
    label: 'Web',
    zh: '網頁',
    items: ['Vue 3', 'Tailwind', 'Flask', 'Node.js'],
  },
  {
    id: 'infra',
    label: 'Infra',
    zh: '基礎建設',
    items: ['Docker', 'Linux', 'Nginx', 'Proxmox', 'iptables'],
  },
  {
    id: 'obs',
    label: 'Observability',
    zh: '可觀測性',
    items: ['Prometheus', 'Grafana', 'Loki', 'bpftrace'],
  },
] as const

export type Project = {
  year: string
  title: string
  role?: string
  stack: string[]
  bullets: string[]
  diagram?: 'network' | 'obs'
}

export const projects: Project[] = [
  {
    year: '2025',
    title: '虛擬化與網路實驗環境建置（Proxmox VE / PVE）',
    stack: ['Proxmox VE', 'LXC', 'iptables', 'NAT'],
    diagram: 'network',
    bullets: [
      '使用 Proxmox VE 建立標準化虛擬化實驗環境，支援 40+ 學生同時操作',
      '設計三層網路架構（WAN / DMZ / LAN），模擬企業防火牆與內外網隔離場景',
      '以 LXC 容器建置 Gateway / DMZ / Client 架構，提升資源利用效率',
      '實作 NAT（iptables MASQUERADE）與防火牆規則，進行流量控管與網段隔離',
    ],
  },
  {
    year: '2025',
    title: '資安攻防與監控系統開發（CSF-POC）',
    role: '專案負責人',
    stack: ['Prometheus', 'Grafana', 'Loki', 'eBPF'],
    diagram: 'obs',
    bullets: [
      '建立滲透、橫向移動、提權與資料外洩之攻擊模擬環境',
      '設計並部署監控架構（Prometheus + Grafana + Loki、eBPF），提升攻擊行為可觀測性',
      '建立日誌收集與警示規則，追蹤 system / network / process / file change 行為',
      '進行攻擊紀錄彙整與關聯分析，產出教學與改進用技術報告',
    ],
  },
  {
    year: '2025',
    title: '資安教育平台（Web + Game-based Learning）',
    stack: ['Web', 'OWASP Top 10', 'CEH'],
    bullets: [
      '開發結合 OWASP Top 10 與 CEH 知識之資安學習平台',
      '設計理論、實作與挑戰模組，強化攻防概念理解',
      '透過互動式內容提升學習參與度',
    ],
  },
  {
    year: '2024',
    title: 'Honeypot 攻擊偵測與日誌分析系統',
    role: '專案負責人',
    stack: ['ELK Stack', 'Honeypot', 'Discord Bot'],
    bullets: [
      '建置多服務 honeypot 環境，蒐集真實攻擊行為與入侵模式',
      '整合 ELK Stack（Elasticsearch, Logstash, Kibana）進行日誌收集、解析與索引',
      '建立可視化儀表板並設定 Discord Bot 警示機制，加速異常偵測與回應',
      '分析攻擊樣本與行為特徵，提升威脅理解能力',
    ],
  },
  {
    year: '2024',
    title: 'Linux 日誌分析工具（AI-IDS）',
    role: '專案負責人',
    stack: ['Linux', 'cron', 'API'],
    bullets: [
      '開發 Linux 系統日誌分析工具，協助辨識異常行為',
      '撰寫系統服務（cron）進行自動化日誌處理',
      '建立 API 串接機制，提升工具擴展性與實用性',
    ],
  },
  {
    year: '2023',
    title: '偏鄉教學平台（WordPress）',
    role: '專案負責人',
    stack: ['WordPress'],
    bullets: [
      '設計與維運網站架構',
      '協調團隊開發進度並負責系統維護',
    ],
  },
]

export const education = {
  degree: 'B.S. in Information Management',
  school: '國立暨南國際大學 資訊管理學系',
  schoolEn: 'National Chi Nan University (NCNU)',
  years: '2022 – Present',
  notes: [
    'LSA (Linux System Administration): 93 (Top tier)',
    'Mentored 40+ students in system deployment and networking labs',
  ],
}

export const navItems = [
  { href: '#about', label: '關於', en: 'About' },
  { href: '#skills', label: '技能', en: 'Skills' },
  { href: '#projects', label: '專案', en: 'Projects' },
  { href: '#education', label: '學歷', en: 'Education' },
  { href: '#contact', label: '聯絡', en: 'Contact' },
] as const

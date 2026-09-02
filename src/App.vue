<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { education, navItems, profile, projects, skillGroups } from './content'
import NetworkLayers from './components/NetworkLayers.vue'
import ObsPipeline from './components/ObsPipeline.vue'

const menuOpen = ref(false)
const activeId = ref('top')
let sectionIo: IntersectionObserver | undefined
let revealIo: IntersectionObserver | undefined

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const revealEls = document.querySelectorAll('[data-reveal]')
  if (reduce) {
    revealEls.forEach((el) => el.classList.add('is-visible'))
  } else {
    revealIo = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealIo?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    revealEls.forEach((el) => revealIo?.observe(el))
  }

  const sections = document.querySelectorAll('section[id]')
  sectionIo = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      const id = visible[0]?.target.id
      if (id) activeId.value = id
    },
    { rootMargin: '-28% 0px -58% 0px', threshold: [0, 0.2, 0.45, 1] },
  )
  sections.forEach((section) => sectionIo?.observe(section))
})

onUnmounted(() => {
  sectionIo?.disconnect()
  revealIo?.disconnect()
})
</script>

<template>
  <a
    href="#about"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-cyan focus:px-4 focus:py-2 focus:text-canvas"
  >
    跳到主要內容
  </a>

  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-canvas/80 backdrop-blur-md"
  >
    <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
      <a href="#top" class="flex items-center gap-2.5 text-ink" @click="closeMenu">
        <img src="/favicon.svg" alt="" width="28" height="28" class="h-7 w-7" />
        <span class="font-display text-[15px] font-semibold tracking-wide">{{ profile.name }}</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="主要">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-3 py-1.5 text-sm text-mute transition-colors hover:text-ink"
          :class="activeId === item.href.slice(1) ? 'text-cyan' : ''"
        >
          {{ item.label }}
        </a>
        <a
          href="#contact"
          class="ml-2 rounded-full bg-cyan px-4 py-1.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
        >
          聯絡
        </a>
      </nav>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="開啟選單"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">選單</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            v-if="!menuOpen"
            d="M3 5h12M3 9h12M3 13h12"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          />
          <path
            v-else
            d="M4 4l10 10M14 4L4 14"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" id="mobile-nav" class="border-t border-line bg-canvas px-4 py-3 md:hidden">
      <nav class="flex flex-col gap-1" aria-label="行動選單">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="rounded-md px-3 py-2 text-sm text-mute hover:bg-panel hover:text-ink"
          @click="closeMenu"
        >
          {{ item.label }}
          <span class="ml-2 text-xs tracking-widest text-dim uppercase">{{ item.en }}</span>
        </a>
      </nav>
    </div>
  </header>

  <main>
    <section
      id="top"
      class="relative isolate overflow-hidden pt-24 sm:pt-28"
      aria-labelledby="hero-name"
    >
      <div class="pointer-events-none absolute inset-0 grid-texture grid-fade" aria-hidden="true" />
      <div class="pointer-events-none absolute inset-0 glow-cyan" aria-hidden="true" />

      <div class="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <p class="kicker" data-reveal>01 — Identity</p>
        <h1
          id="hero-name"
          class="mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-7xl"
          data-reveal
        >
          {{ profile.name }}
        </h1>
        <p class="mt-4 max-w-2xl text-base text-mute sm:text-lg" data-reveal="delay">
          {{ profile.identity }}
        </p>
        <p class="mt-6 max-w-2xl text-[15px] leading-7 text-mute sm:text-base sm:leading-8" data-reveal="delay">
          {{ profile.summary }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3" data-reveal="delay-2">
          <a
            href="#projects"
            class="inline-flex items-center rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-canvas transition-opacity hover:opacity-90"
          >
            看專案
          </a>
          <a
            href="#contact"
            class="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            聯絡
          </a>
        </div>

        <dl
          class="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4"
          data-reveal="delay-2"
        >
          <div class="bg-panel px-4 py-4 sm:px-5">
            <dt class="text-[11px] tracking-[0.18em] text-dim uppercase">LSA</dt>
            <dd class="mt-1 font-display text-xl text-ink">93 <span class="text-sm text-mute">Top tier</span></dd>
          </div>
          <div class="bg-panel px-4 py-4 sm:px-5">
            <dt class="text-[11px] tracking-[0.18em] text-dim uppercase">Mentored</dt>
            <dd class="mt-1 font-display text-xl text-ink">40+</dd>
          </div>
          <div class="bg-panel px-4 py-4 sm:px-5">
            <dt class="text-[11px] tracking-[0.18em] text-dim uppercase">Projects</dt>
            <dd class="mt-1 font-display text-xl text-ink">6</dd>
          </div>
          <div class="bg-panel px-4 py-4 sm:px-5">
            <dt class="text-[11px] tracking-[0.18em] text-dim uppercase">NCNU IM</dt>
            <dd class="mt-1 font-display text-xl text-ink">2022—</dd>
          </div>
        </dl>
      </div>
    </section>

    <section id="about" class="border-t border-line" aria-labelledby="about-title">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <div class="lg:col-span-4" data-reveal>
          <p class="kicker">02 — About</p>
          <h2 id="about-title" class="mt-3 font-display text-3xl font-bold tracking-tight">關於</h2>
        </div>
        <div class="lg:col-span-8" data-reveal="delay">
          <p class="text-[15px] leading-8 text-mute sm:text-base">
            {{ profile.summary }}
          </p>
        </div>
      </div>
    </section>

    <section id="skills" class="border-t border-line" aria-labelledby="skills-title">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div data-reveal>
          <p class="kicker">03 — Skills</p>
          <h2 id="skills-title" class="mt-3 font-display text-3xl font-bold tracking-tight">技術能力</h2>
        </div>
        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(group, index) in skillGroups"
            :key="group.id"
            class="rounded-2xl border border-line bg-panel p-5"
            :data-reveal="index % 2 === 0 ? 'delay' : 'delay-2'"
          >
            <p class="text-[11px] tracking-[0.2em] text-cyan uppercase">{{ group.label }}</p>
            <h3 class="mt-1 font-display text-lg font-semibold">{{ group.zh }}</h3>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="item in group.items" :key="item">
                <span class="chip">{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" class="border-t border-line" aria-labelledby="projects-title">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div data-reveal>
          <p class="kicker">04 — Projects</p>
          <h2 id="projects-title" class="mt-3 font-display text-3xl font-bold tracking-tight">專案</h2>
          <p class="mt-3 max-w-2xl text-sm text-mute">由新到舊。卡片內容摘自實作經歷，不含虛構截圖。</p>
        </div>

        <ol class="mt-10 space-y-6">
          <li v-for="(project, index) in projects" :key="project.title" data-reveal>
            <article
              class="card-motion rounded-2xl border border-line bg-panel p-5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-cyan/35 sm:p-7"
            >
              <div class="flex flex-wrap items-center gap-2 text-xs text-mute">
                <time class="rounded-full border border-line px-2.5 py-0.5 text-cyan">{{ project.year }}</time>
                <span v-if="project.role" class="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 text-cyan">
                  {{ project.role }}
                </span>
                <span class="text-dim">0{{ index + 1 }}</span>
              </div>
              <h3 class="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">
                {{ project.title }}
              </h3>
              <div class="mt-5 grid gap-6 lg:grid-cols-12">
                <ul class="space-y-2 text-[15px] leading-7 text-mute lg:col-span-7">
                  <li v-for="bullet in project.bullets" :key="bullet" class="flex gap-2">
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
                <div class="lg:col-span-5">
                  <NetworkLayers v-if="project.diagram === 'network'" />
                  <ObsPipeline v-else-if="project.diagram === 'obs'" />
                  <ul class="mt-4 flex flex-wrap gap-2">
                    <li v-for="tag in project.stack" :key="tag">
                      <span class="chip">{{ tag }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </li>
        </ol>
      </div>
    </section>

    <section id="education" class="border-t border-line" aria-labelledby="edu-title">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12">
        <div class="lg:col-span-4" data-reveal>
          <p class="kicker">05 — Education</p>
          <h2 id="edu-title" class="mt-3 font-display text-3xl font-bold tracking-tight">學歷</h2>
        </div>
        <article
          class="rounded-2xl border border-line bg-panel p-6 lg:col-span-8"
          data-reveal="delay"
        >
          <p class="text-sm text-cyan">{{ education.years }}</p>
          <h3 class="mt-2 font-display text-2xl font-semibold">{{ education.school }}</h3>
          <p class="mt-1 text-sm text-mute">{{ education.schoolEn }} · {{ education.degree }}</p>
          <ul class="mt-5 space-y-2 text-[15px] leading-7 text-mute">
            <li v-for="note in education.notes" :key="note" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
              <span>{{ note }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section id="contact" class="border-t border-line" aria-labelledby="contact-title">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p class="kicker" data-reveal>06 — Contact</p>
        <h2 id="contact-title" class="mt-3 font-display text-3xl font-bold tracking-tight" data-reveal>
          聯絡
        </h2>
        <p class="mt-4 max-w-xl text-mute" data-reveal="delay">
          若想討論實驗環境、監控架構或資安教學設計，歡迎來信。
        </p>
        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end" data-reveal="delay-2">
          <a
            :href="`mailto:${profile.email}`"
            class="inline-flex w-fit items-center rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-canvas hover:opacity-90"
          >
            {{ profile.email }}
          </a>
          <p class="text-sm text-dim">
            電話
            <a :href="`tel:${profile.phoneTel}`" class="ml-2 text-mute hover:text-ink">
              {{ profile.phoneDisplay }}
            </a>
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer class="border-t border-line">
    <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p>© 2026 {{ profile.name }}</p>
      <p>資安 · 系統架構 · 可觀測性</p>
    </div>
  </footer>
</template>

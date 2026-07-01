<script setup lang="ts">
import "~/scss/pages/home.scss"

// ── Hero slider ──────────────────────────────────────────────────
const slides = [
  {
    badgeIcon: '/icons/plane.svg',
    badge: 'Seu guia completo de viagem',
    title: 'Explore o mundo\ncom o',
    brand: 'Tripfy',
    desc: 'Encontre os melhores lugares, veja o clima, converta moedas e salve seus favoritos. Tudo que você precisa para viajar com mais praticidade.',
    image: '/images/RJ.jpg',
    imageAlt: 'Rio de Janeiro',
  },
  {
    badgeIcon: '/icons/money.svg',
    badge: 'Conversor de Moedas',
    title: 'Saiba o valor da\nsua moeda no',
    brand: 'destino',
    desc: 'Converta valores em tempo real e planeje seus gastos com precisão antes mesmo de embarcar. Taxas atualizadas diariamente.',
    image: '/images/moneys.jpg',
    imageAlt: 'Conversor de moedas',
  },
  {
    badgeIcon: '/icons/location.svg',
    badge: 'Pontos Turísticos',
    title: 'Descubra o melhor\nde cada',
    brand: 'destino',
    desc: 'Explore atrações, museus, praias e experiências únicas com curadoria feita para você. Salve seus favoritos e leve na viagem.',
    image: '/images/london.jpg',
    imageAlt: 'Londres',
  },
]

const current = ref(0)
let timer: ReturnType<typeof setInterval>

function goTo(index: number) {
  current.value = (index + slides.length) % slides.length
  restartTimer()
}
function next() { goTo(current.value + 1) }
function prev() { goTo(current.value - 1) }
function restartTimer() {
  clearInterval(timer)
  timer = setInterval(next, 6000)
}
onMounted(() => restartTimer())
onUnmounted(() => clearInterval(timer))

const features = [
  {
    icon: '/icons/money.svg',
    title: 'Conversor de Moedas',
    desc: 'Veja taxas atualizadas em tempo real e converta facilmente.',
    color: 'blue',
  },
  {
    icon: '/icons/location.svg',
    title: 'Mapa Interativo',
    desc: 'Encontre restaurantes, farmácias e pontos turísticos próximos a você.',
    color: 'purple',
  },
  {
    icon: '/icons/globe.svg',
    title: 'Clima Local',
    desc: 'Confira a previsão do tempo do seu destino e planeje-se melhor.',
    color: 'orange',
  },
  {
    icon: '/icons/plane.svg',
    title: 'Pontos Turísticos',
    desc: 'Descubra atrações incríveis e salve seus lugares favoritos.',
    color: 'violet',
  },
  {
    icon: '/icons/heart.svg',
    title: 'Favoritos',
    desc: 'Salve lugares, moedas e tudo que for importante para a sua viagem.',
    color: 'pink',
  },
  {
    icon: '/icons/support.svg',
    title: 'Seguro e Confiável',
    desc: 'Seus dados protegidos para você viajar com tranquilidade e segurança.',
    color: 'green',
  },
]

</script>

<template>
  <div class="home">

    <!-- ── HERO SLIDER ──────────────────────────────────────────── -->
    <section class="home__hero">
      <div class="home__slider-viewport">
        <div class="home__slider-track" :style="{ transform: `translateX(-${current * 100}%)` }">

          <div v-for="(slide, i) in slides" :key="i" class="home__slide">
            <div class="container home__hero-inner">

              <!-- Left: copy -->
              <div class="home__hero-content">
                <span class="home__hero-badge">
                  <img :src="slide.badgeIcon" :alt="slide.badge" width="20" height="20" class="home__hero-badge-icon" />
                  {{ slide.badge }}
                </span>

                <h1 class="home__hero-title">
                  <template v-for="(line, li) in slide.title.split('\n')" :key="li">
                    {{ line }}<br v-if="li < slide.title.split('\n').length - 1"/>
                  </template>
                  <span class="home__hero-brand">{{ slide.brand }}</span>
                </h1>

                <p class="home__hero-desc">{{ slide.desc }}</p>

                <div class="home__hero-actions">
                  <NuxtLink to="/register" class="home__btn home__btn--primary">
                    Criar conta grátis
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </NuxtLink>
                  <a href="#features" class="home__btn home__btn--ghost">
                    Explorar recursos
                    <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.8"/><path d="M10 7v3l2 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>

              <!-- Right: image -->
              <div class="home__hero-visual">
                <div class="home__cards-scene">
                  <div class="home__scene-bg">
                    <img :src="slide.image" :alt="slide.imageAlt" />
                  </div>

                  <!-- Cards only on slide 0 -->
                  <template v-if="i === 0">
                    <!-- Weather card -->
                    <div class="home__card home__card--weather">
                      <div class="home__card-header"><span class="home__card-label">São Paulo, BR</span></div>
                      <div class="home__card-weather-body">
                        <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
                          <circle cx="20" cy="20" r="9" fill="#FBBF24"/>
                          <line x1="20" y1="3" x2="20" y2="7" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                          <line x1="20" y1="33" x2="20" y2="37" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                          <line x1="3" y1="20" x2="7" y2="20" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                          <line x1="33" y1="20" x2="37" y2="20" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="home__card-temp">26°C</span>
                      </div>
                      <span class="home__card-sub">Parcialmente nublado</span>
                    </div>

                    <!-- Currency card -->
                    <div class="home__card home__card--currency">
                      <div class="home__card-title">Conversor de Moedas</div>
                      <div class="home__card-row">
                        <span class="home__card-flag">🇺🇸</span>
                        <div>
                          <div class="home__card-currency-name">USD · Dólar Americano</div>
                          <div class="home__card-amount">100,00</div>
                        </div>
                      </div>
                      <div class="home__card-divider">
                        <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M8 2v12M4 10l4 4 4-4M4 6l4-4 4 4" stroke="#6D4CFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div class="home__card-row">
                        <span class="home__card-flag">🇧🇷</span>
                        <div>
                          <div class="home__card-currency-name">BRL · Real Brasileiro</div>
                          <div class="home__card-amount home__card-amount--converted">512,34</div>
                        </div>
                      </div>
                      <div class="home__card-rate">1 USD = 5,1234 BRL <span class="home__card-rate-badge">+0.32%</span></div>
                    </div>

                    <!-- Tourist spot card -->
                    <div class="home__card home__card--spot">
                      <div class="home__card-spot-header">
                        <span class="home__card-title">Pontos Turísticos</span>
                        <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M10 3l1.5 4.5H16l-3.5 2.5 1.5 4.5L10 12l-4 2.5 1.5-4.5L4 7.5h4.5L10 3z" fill="#6D4CFF"/></svg>
                      </div>
                      <div class="home__card-spot-body">
                        <div class="home__card-spot-info">
                          <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" fill="#6D4CFF"/><circle cx="8" cy="6" r="2" fill="white"/></svg>
                          <div>
                            <div class="home__card-spot-name">Cristo Redentor</div>
                            <div class="home__card-spot-loc">Rio de Janeiro, RJ</div>
                          </div>
                        </div>
                        <div class="home__card-spot-rating">
                          <svg viewBox="0 0 12 12" fill="#F59E0B" width="11" height="11"><path d="M6 1l1.1 3.3H11L8.2 6.4l1.1 3.4L6 8l-3.3 1.8 1.1-3.4L1 4.3h3.9L6 1z"/></svg>
                          <span>4.8</span>
                          <span class="home__card-spot-count">(2.143 avaliações)</span>
                        </div>
                      </div>
                      <div class="home__card-spot-img">
                        <img src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=200&q=70" alt="Cristo Redentor"/>
                      </div>
                      <button class="home__card-spot-btn">Ver no mapa</button>
                    </div>

                    <!-- Mobile cards -->
                    <div class="home__card home__card--weather-mobile">
                      <div class="home__card-header">São Paulo, BR</div>
                      <div class="home__card-weather-body">
                        <svg viewBox="0 0 40 40" fill="none" width="22" height="22">
                          <circle cx="20" cy="20" r="9" fill="#FBBF24"/>
                          <line x1="20" y1="3" x2="20" y2="7" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                          <line x1="20" y1="33" x2="20" y2="37" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                          <line x1="3" y1="20" x2="7" y2="20" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                          <line x1="33" y1="20" x2="37" y2="20" stroke="#FBBF24" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="home__card-temp" style="font-size:1.1rem">26°C</span>
                      </div>
                      <span class="home__card-sub">Parcialmente nublado</span>
                    </div>
                    <div class="home__card home__card--currency-mobile">
                      <div class="home__card-title">Conversor de Moedas</div>
                      <div class="home__card-row">
                        <span class="home__card-flag">🇺🇸</span>
                        <div>
                          <div class="home__card-currency-name">USD · Dólar Americano</div>
                          <div class="home__card-amount" style="font-size:0.85rem">100,00</div>
                        </div>
                      </div>
                      <div class="home__card-row" style="margin-top:0.3rem">
                        <span class="home__card-flag">🇧🇷</span>
                        <div>
                          <div class="home__card-currency-name">BRL · Real Brasileiro</div>
                          <div class="home__card-amount home__card-amount--converted" style="font-size:0.85rem">512,34</div>
                        </div>
                      </div>
                      <div class="home__card-rate" style="margin-top:0.35rem">1 USD = 5,1234 BRL <span class="home__card-rate-badge">+0.32%</span></div>
                    </div>
                    <div class="home__card home__card--spot-mobile">
                      <div class="home__card-spot-header">
                        <span class="home__card-title" style="margin:0">Pontos Turísticos</span>
                      </div>
                      <div class="home__card-spot-info" style="margin-top:0.4rem">
                        <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" fill="#6D4CFF"/><circle cx="8" cy="6" r="2" fill="white"/></svg>
                        <div>
                          <div class="home__card-spot-name">Cristo Redentor</div>
                          <div class="home__card-spot-loc">Rio de Janeiro, RJ</div>
                        </div>
                      </div>
                      <div class="home__card-spot-rating" style="margin-top:0.3rem">
                        <svg viewBox="0 0 12 12" fill="#F59E0B" width="10" height="10"><path d="M6 1l1.1 3.3H11L8.2 6.4l1.1 3.4L6 8l-3.3 1.8 1.1-3.4L1 4.3h3.9L6 1z"/></svg>
                        <span>4.8</span>
                        <span class="home__card-spot-count">(2.143)</span>
                      </div>
                    </div>
                  </template>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- Arrows -->
      <button class="home__arrow home__arrow--prev" @click="prev" aria-label="Anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="34" height="34"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="home__arrow home__arrow--next" @click="next" aria-label="Próximo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="34" height="34"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <!-- Dots -->
      <div class="home__dots">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="home__dot"
          :class="{ 'home__dot--active': i === current }"
          @click="goTo(i)"
          :aria-label="`Ir para slide ${i + 1}`"
        />
      </div>

    </section>

    <!-- ── FEATURES STRIP ────────────────────────────────────────── -->
    <section class="home__features" id="features">
      <div class="container">
        <div class="home__features-grid">
          <div v-for="f in features" :key="f.title" class="home__feature-item">
            <div class="home__feature-icon" :class="`home__feature-icon--${f.color}`">
              <img :src="f.icon" :alt="f.title" width="20" height="20" />
            </div>
            <h3 class="home__feature-title">{{ f.title }}</h3>
            <p class="home__feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA BANNER ────────────────────────────────────────────── -->
    <section class="home__cta">
      <div class="container home__cta-inner">
        <div class="home__cta-illustration">
          <svg viewBox="0 0 160 120" fill="none" width="160" height="120">
            <!-- suitcase body -->
            <rect x="30" y="35" width="100" height="72" rx="10" fill="#6D4CFF"/>
            <rect x="30" y="35" width="100" height="72" rx="10" fill="url(#luggage-grad)"/>
            <!-- handle -->
            <rect x="55" y="20" width="50" height="18" rx="6" stroke="#6D4CFF" stroke-width="4" fill="none"/>
            <!-- stripe -->
            <rect x="30" y="68" width="100" height="6" fill="rgba(255,255,255,0.18)"/>
            <!-- latch -->
            <rect x="73" y="58" width="14" height="10" rx="3" fill="rgba(255,255,255,0.35)"/>
            <!-- wheels -->
            <circle cx="50" cy="108" r="6" fill="#4C3ADB"/>
            <circle cx="110" cy="108" r="6" fill="#4C3ADB"/>
            <!-- map -->
            <rect x="85" y="75" width="52" height="38" rx="6" fill="#A5B4FC" transform="rotate(-8 85 75)"/>
            <path d="M90 80 Q100 76 110 80 Q120 84 130 80" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(-8 85 75)"/>
            <path d="M110 72 Q108 82 110 92" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(-8 85 75)"/>
            <!-- pin on map -->
            <circle cx="118" cy="84" r="4" fill="#6D4CFF" transform="rotate(-8 85 75)"/>
            <!-- sunglasses -->
            <rect x="16" y="90" width="30" height="18" rx="5" fill="#1A1E7A" transform="rotate(-15 16 90)"/>
            <rect x="10" y="92" width="30" height="18" rx="5" fill="#1A1E7A" transform="rotate(-15 16 90)"/>
            <defs>
              <linearGradient id="luggage-grad" x1="30" y1="35" x2="130" y2="107" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8B5CF6"/>
                <stop offset="1" stop-color="#6D4CFF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="home__cta-content">
          <h2 class="home__cta-title">Pronto para sua próxima aventura?</h2>
          <p class="home__cta-desc">Crie sua conta gratuita e tenha o mundo na palma da sua mão.</p>
        </div>

        <div class="home__cta-actions">
          <NuxtLink to="/register" class="home__btn home__btn--primary">
            Criar conta grátis
            <svg viewBox="0 0 20 20" fill="none" width="16" height="16"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </NuxtLink>
          <p class="home__cta-login">Já tem uma conta? <NuxtLink to="/login">Entrar</NuxtLink></p>
        </div>
      </div>
    </section>


  </div>
</template>

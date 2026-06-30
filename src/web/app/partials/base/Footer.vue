<script setup lang="ts">
import "../../scss/partials/footer.scss";
</script>

<template>
  <footer class="footer">
    <div class="footer__gradient-bar"></div>

    <div class="container footer__inner">

      <!-- Brand -->
      <div class="footer__brand">
        <NuxtLink to="/home" class="footer__logo-link">
          <img src="~/assets/images/logo_tripfy.png" alt="Tripfy" class="footer__logo" />
        </NuxtLink>
        <p class="footer__tagline">
          Sua plataforma completa para explorar o mundo com praticidade, economia e segurança.
        </p>
        <div class="footer__socials">
          <a href="#" class="footer__social" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" class="footer__social" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" class="footer__social" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.02-.08z"/>
            </svg>
          </a>
          <a href="#" class="footer__social" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A1E7A"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Nav columns -->
      <nav class="footer__nav">

        <div class="footer__col">
          <p class="footer__col-title">Produto</p>
          <ul>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Como funciona</a></li>
            <li><a href="#">Destinos</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">Empresa</p>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Parceiros</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">Suporte</p>
          <ul>
            <li><a href="#">Central de ajuda</a></li>
            <li><a href="#">Fale conosco</a></li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de uso</a></li>
          </ul>
        </div>

      </nav>

      <!-- Newsletter card -->
      <div class="footer__newsletter">
        <div class="footer__newsletter-icon">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.8"/>
            <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <h4 class="footer__newsletter-title">Fique por dentro das melhores ofertas</h4>
        <p class="footer__newsletter-desc">Receba promoções exclusivas e dicas de viagem direto no seu e-mail.</p>
        <input type="email" class="footer__newsletter-input" placeholder="Seu melhor e-mail" />
        <button class="footer__newsletter-btn">Inscrever-se</button>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <div class="footer__lang">
          <svg viewBox="0 0 24 24" fill="none" width="14" height="14"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M2 12h20M12 2C9.5 6 8 9 8 12s1.5 6 4 10M12 2c2.5 4 4 7 4 10s-1.5 6-4 10" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
          Português (BR)
          <svg viewBox="0 0 16 16" fill="none" width="12" height="12"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>

        <p class="footer__copy">© {{ new Date().getFullYear() }} Tripfy. Todos os direitos reservados.</p>

      </div>
    </div>

  </footer>
</template>

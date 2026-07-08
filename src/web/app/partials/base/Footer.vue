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
          <img src="/images/logo_tripfy.png" alt="Tripfy" class="footer__logo" />
        </NuxtLink>
        <p class="footer__tagline">
          Sua plataforma completa para explorar o mundo com praticidade, economia e segurança.
        </p>
        <div class="footer__socials">
          <a href="#" class="footer__social" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="#" class="footer__social" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" class="footer__social" aria-label="YouTube">
            <img src="/icons/youtube.svg" alt="YouTube" />
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

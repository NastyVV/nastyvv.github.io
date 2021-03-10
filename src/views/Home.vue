<template>
    <div class="home-page">
        <div class="home-wrapper">
            <div class="home-offer">
                <div class="title">
                    Физика <br> это просто
                </div>
                <div class="sub-title">
                    Бесплатный курс по физике
                </div>
            </div>
            <div class="home-items">
                <div class="home-item">
                  <a href="/assets/teoriya.pdf">
                    <div class="right">
                        <div class="name"> 90 минут </div>
                        <div class="sub-name"> краткий курс для подготовки к ЕГЭ</div>
                    </div>
                    </a>
                </div>
                <div class="home-item">
                  <a href="/assets/fipistruktura.pdf">
                    <div class="right">
                        <div class="name"> МКТ </div>
                        <div class="sub-name"> все самое важное и полезное</div>
                    </div>
                  </a>
                </div>
                <div class="home-item">
                  <a href="/assets/cpravmat.pdf">
                    <div class="right">
                        <div class="name"> Все </div>
                        <div class="sub-name"> Справочные материалы </div>
                    </div>
                  </a>
                </div>
            </div>
        </div>
      <div class="video-wrapper">
        <div class="video-block">
          <a data-fancybox href="https://youtu.be/17dz86p4Gxc">
            <i class="fas fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
</template>

<script>

import "@/assets/views/home.less"
export default {
    name: 'Home',

}
</script>

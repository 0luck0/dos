---
layout: home

hero:
  name: Yuan的博客
  text: 知识体系笔记
  tagline: 前端 后端 游戏开发 数字孪生
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 开始
      link: /bigFrontEnd/html/
    - theme: alt
      text: GitHub
      link: https://github.com/0luck0
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
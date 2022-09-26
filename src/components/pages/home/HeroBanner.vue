<template>
  <kinesis-container>
    <div class="hero-banner">
      <div class="container">
        <div class="hero-banner__inner">
          <div class="hero-banner__content">
            <h1 class="hero-banner__title mb-20">COVID-19</h1>
            <p class="hero-banner__text">
              КЛИНИЧЕСКИЕ И ЭТИЧЕСКИЕ АСПЕКТЫ ОКАЗАНИЯ ПОМОЩИ
            </p>
            <div class="hero-banner__cta"></div>
          </div>
          <div class="hero-banner__photo">
            <img src="/images/c557cd3caee6fb2e7ad128d5407fbe4f.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer } from "vue-kinesis";
export default {
  name: "HeroBanner",
  components: {
    "kinesis-container": KinesisContainer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero-banner {
  background: radial-gradient(
    58.4% 178.61% at 57.29% 70.69%,
    #002e7a 0%,
    #05113b 100%
  );
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 90px);
    width: 100%;
  }

  &__title {
    font-weight: 700;
    font-size: 74px;
    line-height: 51px;
    color: #fff;
    margin-bottom: 20px;
  }
  &__text {
    font-weight: 400;
    font-size: 48px;
    line-height: 53px;
    color: #fff;
  }

  &__content {
    max-width: calc(50% - 20px);
  }

  &__photo {
    max-width: calc(50% - 20px);
    padding: 20px;

    img {
      max-width: 530px;
      width: 100%;
      object-fit: contain;
      margin-left: auto;
      mix-blend-mode: lighten;
    }
  }

  &__cta {
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    padding: 5px 0;

    .input__block {
      &-wrap {
        border-color: transparent;
        border-radius: 28px !important;
      }

      &-input {
        border-radius: 28px !important;
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        padding-right: 35px !important;
        padding-left: 20px !important;
        height: 56px;
      }

      &-append {
        position: relative;
        left: -20px;
      }
    }

    .a-btn {
      min-height: 56px;
    }
  }
}

@media (max-width: 850px) {
  .hero-banner__inner {
    flex-wrap: wrap;
    padding: 50px 30px;
    justify-content: unset;
  }
  .hero-banner__title {
    font-size: 36px;
    margin-bottom: 0;
  }
  .hero-banner__text {
    font-size: 28px;
    line-height: 30px;
  }
  .hero-banner__content {
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    order: 2;
  }

  .hero-banner__cta {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-banner__photo {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    max-width: 80%;
    padding: 0px;
  }

  @media (max-width: 500px) {
    .hero-banner__inner {
      padding: 30px 10px;
    }

    .hero-banner__photo {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 500px) {
  .hero-banner__inner {
    min-height: calc(100vh - 90px);
  }

  .hero-banner__photo {
    margin-bottom: 0;
  }
}
</style>

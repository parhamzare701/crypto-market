<template>
  <div class="about">
    <div class="about__container">
      <section class="about__container__head">
        <div class="about__container__head__text">
          <h1 class="about__container__head__text--title">
            {{ $t("aboutUsTitle") }}
          </h1>
          <span class="about__container__head__text--description">
            {{ $t("aboutUsDescription") }}
          </span>
        </div>
        <div class="about__container__head__image">
          <img
            src="../../assets/images/developer_about.svg"
            alt="about"
            class="about__container__head__image--img"
          />
        </div>
      </section>
      <section class="about__container__content">
        <div
          class="about__container__content__card"
          :class="$t('aboutUsCardClass')"
        >
          <div class="about__container__content__card__info">
            <img
              src="../../assets/images/John.jpeg"
              alt="about"
              class="about__container__content__card__info__image"
            />
            <span class="about__container__content__card__info__name">
              {{ $t('aboutUsCardName') }}
            </span>
            <span class="about__container__content__card__info__job">{{
              $t("aboutUsCardJob")
            }}</span>
            <span class="about__container__content__card__info__description">{{
              $t("aboutUsCardInfo")
            }}</span>
            <span class="about__container__content__card__info__email"
              >john@example.com</span
            >
            <button class="about__container__content__card__info__contact">
              {{ $t("aboutUsCardContact") }}
            </button>
          </div>
          
        </div>
        <div
        class="about__container__content__card"
        :class="$t('aboutUsCardClass')"
      >
        <div class="about__container__content__card__info">
          <img
            src="../../assets/images/Mike.jpeg"
            alt="about"
            class="about__container__content__card__info__image"
          />
          <span class="about__container__content__card__info__name">
            {{ $t('aboutUsCardName') }}
          </span>
          <span class="about__container__content__card__info__job">{{
            $t("aboutUsCardJob")
          }}</span>
          <span class="about__container__content__card__info__description">{{
            $t("aboutUsCardInfo")
          }}</span>
          <span class="about__container__content__card__info__email"
            >john@example.com</span
          >
          <button class="about__container__content__card__info__contact">
            {{ $t("aboutUsCardContact") }}
          </button>
        </div>
        
      </div>
      <div
      class="about__container__content__card"
      :class="$t('aboutUsCardClass')"
    >
      <div class="about__container__content__card__info">
        <img
          src="../../assets/images/Jane.jpeg"
          alt="about"
          class="about__container__content__card__info__image"
        />
        <span class="about__container__content__card__info__name">
          {{ $t('aboutUsCardName') }}
        </span>
        <span class="about__container__content__card__info__job">{{
          $t("aboutUsCardJob")
        }}</span>
        <span class="about__container__content__card__info__description">{{
          $t("aboutUsCardInfo")
        }}</span>
        <span class="about__container__content__card__info__email"
          >john@example.com</span
        >
        <button class="about__container__content__card__info__contact">
          {{ $t("aboutUsCardContact") }}
        </button>
      </div>
      
    </div>
      </section>
    </div>
  </div>
</template>
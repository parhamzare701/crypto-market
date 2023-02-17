import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            aboutUsTitle: 'ABOUT US',
            aboutUsDescription: "This demo page describe my Crypto app, and It will be release after a f few days.",
            aboutUsCardClass: "about__container__content__card--en",
            aboutUsCardName: "Pep Guardiola",
            aboutUsCardJob : "Developer",
            aboutUsCardInfo : "Some text that describes me lorem ipsum ipsum lorem.",
            aboutUsCardContact : "Contact",
            aboutLink : "About",
            marketLink : "Market",
            companyName :"Crypto Market",
            coinDataValues : 'en-EN',
            langSwitcher : "fa",
            switcherClass : "switcher--en"
        },
        fa: {

            aboutUsTitle: "درباره ما",
            aboutUsDescription: ".این یک صفحه موقت درباره رمزارز است ، شایان ذکر است که نسخه کامل این صفحه پس از چند روز منتشر خواهد شد",
            aboutUsCardClass: "about__container__content__card--fa",
            aboutUsCardName : "پپ گواردیولا",
            aboutUsCardJob : "برنامه نویس",
            aboutUsCardInfo: ".لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
            aboutUsCardContact :"ارتباط",
            aboutLink: "درباره ما",
            marketLink : "بازار",
            companyName : "بازار رمزارز",
            coinDataValues : "fa-FA",
            langSwitcher : "en",
            switcherClass : "switcher--fa"
        },

    },

})



export default i18n
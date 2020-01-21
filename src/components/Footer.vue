<template>
    <footer class="site-footer">
        <h2 class="site-footer__title">Stop by &amp; say hi</h2>

        <div class="site-footer__inner-wrap">
            <div class="site-footer__info-wrap">
                <span class="site-footer__copyright text_small">Copyright © {{ new Date().getFullYear() }}. </span>
                <span class="site-footer__links text_small">Made by love. Powered by <a href="//gridsome.org"> Gridsome</a>. Deployed by <a href="//gridsome.org"> netlify</a>. Hostted on <a href="//gridsome.org"> github </a></span>
            </div>
            <div class="site-footer__image-wrap">
                <g-image src="~/assets/images/hessamKhoobkar.jpg"/>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {

    }
}
</script>

<style lang="scss">
    .site-footer {
        position: relative;
        margin: 0 auto;
        margin-bottom: 2rem;
        padding-top: 0;
        width: 1504px;
        background: #005C69;

        &__title {
            position: absolute;
            margin: 0;
            top: 0;
            margin-top: -0.9em;
            font-size: 5.610rem;
        }
        &__inner-wrap {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        &__info-wrap {
            width: 50%;
            padding: 32px;
            color: #fff;
        }
        &__image-wrap {
            width: 50%;
        }
    }
</style>

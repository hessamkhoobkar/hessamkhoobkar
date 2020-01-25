<template>
	<div id="website_header" class="header container">

        <div id="site_logo" class="header__logo">
            <p class="h3">hessam khoobkar</p>
        </div>

        <nav id="main-navigation">
            <g-link class="header__navItem navItem" to="/" exact>Index</g-link>
            <g-link class="header__navItem navItem" to="/Work/">Work</g-link>
            <g-link class="header__navItem navItem" to="/Builds/">Builds</g-link>
            <g-link class="header__navItem navItem" to="/Blog-Posts/">Blog</g-link>
            <g-link class="header__navItem navItem" to="/About-Me/">about me</g-link>
        </nav>
        
        <div id="header_socialLinks" class="socialLinks">
            <a id="behance" class="header__socialLink" href="https://www.behance.net/hessamkhoobkar" aria-label="behance" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0 0 32 32" style=" fill:inherit;"><path d="M 1 6.75 L 1 25.25 L 9.9375 25.25 C 10.765625 25.25 16.46875 25.082031 16.46875 19.875 C 16.46875 16.621094 14.230469 15.515625 13.09375 15.1875 C 13.929688 14.792969 15.59375 13.855469 15.59375 11.34375 C 15.59375 9.945313 15.394531 6.75 9.6875 6.75 Z M 21.375 8.46875 L 21.375 10.15625 L 28.28125 10.15625 L 28.28125 8.46875 Z M 5.0625 9.90625 L 8.875 9.90625 C 9.234375 9.90625 11.65625 9.714844 11.65625 12.03125 C 11.65625 14.011719 9.90625 14.21875 9.1875 14.21875 L 5.0625 14.21875 Z M 25 11.6875 C 19.777344 11.6875 18.6875 16.222656 18.6875 18.1875 C 18.6875 24.019531 23.46875 24.6875 25 24.6875 C 29.128906 24.6875 30.300781 22.015625 30.78125 20.53125 L 27.78125 20.53125 C 27.664063 20.914063 26.789063 22.15625 25.125 22.15625 C 22.335938 22.15625 22.09375 19.976563 22.09375 19 L 30.96875 19 C 31.148438 15.625 29.671875 11.6875 25 11.6875 Z M 24.90625 14.21875 C 25.738281 14.21875 26.410156 14.460938 26.8125 14.90625 C 27.214844 15.355469 27.511719 16.011719 27.59375 16.875 L 22.09375 16.875 C 22.109375 16.636719 22.164063 16.363281 22.25 16.0625 C 22.335938 15.753906 22.46875 15.460938 22.6875 15.1875 C 22.90625 14.917969 23.210938 14.683594 23.5625 14.5 C 23.921875 14.3125 24.367188 14.21875 24.90625 14.21875 Z M 5.0625 17 L 9.46875 17 C 10.34375 17 12.40625 17.136719 12.40625 19.65625 C 12.40625 22.097656 9.808594 22.09375 9.40625 22.09375 L 5.0625 22.09375 Z"></path></svg>
            </a>
            <a id="linkedin" class="header__socialLink" href="https://www.linkedin.com/in/hessam-khoobkar" aria-label="linkedin" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0 0 32 32" style=" fill:inherit;"><path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path></svg>
            </a>
            <a id="instagram" class="header__socialLink" href="https://www.instagram.com/hessam_khoobkar/" aria-label="instagram" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0 0 32 32" style=" fill:inherit;"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path></svg>
            </a>
            <a id="dribbble" class="header__socialLink" href="https://dribbble.com/hessam_khoobkar" aria-label="dribbble" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0 0 32 32" style=" fill:inherit;"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 18.535156 6 20.832031 6.953125 22.59375 8.5 C 22.40625 8.761719 22.152344 9.078125 21.75 9.46875 C 20.894531 10.296875 19.527344 11.292969 17.4375 12.0625 C 16.023438 9.449219 14.636719 7.484375 13.71875 6.25 C 14.449219 6.082031 15.214844 6 16 6 Z M 11.75 6.9375 C 12.570313 8.011719 14.03125 10.003906 15.5 12.65625 C 11.433594 13.734375 7.703125 13.871094 6.21875 13.875 C 6.882813 10.785156 8.960938 8.242188 11.75 6.9375 Z M 23.96875 9.96875 C 25.1875 11.582031 25.945313 13.578125 26 15.75 C 25.109375 15.550781 23.796875 15.355469 22.09375 15.34375 C 21.207031 15.339844 20.203125 15.402344 19.125 15.53125 C 18.875 14.960938 18.605469 14.410156 18.34375 13.875 C 20.585938 13.015625 22.113281 11.882813 23.125 10.90625 C 23.46875 10.570313 23.738281 10.261719 23.96875 9.96875 Z M 16.40625 14.46875 C 16.636719 14.933594 16.871094 15.410156 17.09375 15.90625 C 12.820313 17.089844 9.75 20.714844 8.4375 22.53125 C 6.925781 20.78125 6 18.5 6 16 C 6 15.957031 6 15.917969 6 15.875 C 7.351563 15.890625 11.648438 15.796875 16.40625 14.46875 Z M 22.09375 17.3125 C 23.878906 17.3125 25.113281 17.5625 25.84375 17.75 C 25.378906 20.414063 23.875 22.699219 21.75 24.1875 C 21.351563 21.796875 20.695313 19.523438 19.90625 17.4375 C 20.695313 17.359375 21.441406 17.3125 22.09375 17.3125 Z M 17.875 17.78125 C 18.773438 20.0625 19.527344 22.566406 19.90625 25.21875 C 18.710938 25.722656 17.382813 26 16 26 C 13.707031 26 11.589844 25.230469 9.90625 23.9375 C 10.933594 22.53125 13.953125 18.789063 17.875 17.78125 Z"></path></svg>
            </a>
            <a id="header-email-link" @click="mailto" @mouseleave="cleanMailToast" class="header__socialLink" tooltip="Click to copy email address" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0 0 32 32" style=" fill:inherit;"><path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z"></path></svg>
            </a>
        </div>
	</div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        mailto () {
            document.getElementById("header-email-link").setAttribute("tooltip", "Email address copied to clipboard");

            let dummy = document.createElement("textarea");

            document.body.appendChild(dummy);
            dummy.value = "amirhessam.dev@gmail.com";
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        },
        cleanMailToast () {
            document.getElementById("header-email-link").setAttribute("tooltip", "Click to copy email address");
        }
    }
}
</script>

<style lang="scss">

.header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    top:0;
    z-index: 10;
    margin-bottom: var(--layout-4x);

    &__logo {
        width: 100%;
    }

    &__navItem {
        font-size: var(--text-0-75);
        color: var(--natural-50);
        padding: var(--spacing-0-5) var(--spacing-0-75);
        color: var(--natural-50);

        &:first-child {
            padding-inline-start: 0;
        }
        &:hover {
            color: var(--primary);
        }
        &.active {
            color: var(--primary);
            font-weight: bold;
        }
    }

    &__socialLink {
        color: var(--natural-50);
        fill: var(--natural-50);
        padding: var(--spacing-0-5) var(--spacing-0-75);
        transition: all .2s ease;
        
        &:hover {
            color:  var(--primary);
            fill:   var(--primary);
        }
        svg {
            vertical-align: sub;
        }
    }
}

*[tooltip] {
    position: relative;
}

*[tooltip]:hover:before {
    content: attr(tooltip);
    background-color: #071232;
    color: #fff;
    font-size: 0.65rem;
    top: -1.5em;
    right: 0;
    padding: 0.1em 0.35em;
    border-radius: 0.15em;
    position: absolute;
    white-space: nowrap;
} 

</style>

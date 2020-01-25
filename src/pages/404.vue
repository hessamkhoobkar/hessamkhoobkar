<template>
    <Layout>
        <div class="error">
            <div class="error__info">
                <h1 class="error__info__title">404</h1>
                <p class="error__info__lead">Page not found</p>
                <p>The Page you are you looking for does not exist.<br>                
                Go back, or head over to <g-link to="/" exact>Index</g-link></p>
            </div>
        </div>

    </Layout>
</template>

<style lang="scss">
    .error {
        display: flex;
        justify-content: center;
        align-content: center;

        &__info {
            padding: var(--spacing-3x) 0;

            &__title{
                color: var(--primary);
                font-size: var(--text-6x-5);
                margin-bottom: var(--spacing-0-5);        
            }
            &__lead{
                color: var(--natural-50);
                font-size: var(--text-2x);       
                margin-top: 0;        
                margin-bottom: var(--spacing-1x);        
            }
        }
    }
</style>

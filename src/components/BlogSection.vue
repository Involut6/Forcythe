<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue';
</script>

<template>
    <div class="px-5 md:px-10 lg:px-[56px] xl:px-[112px]">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            <div class="">
                Read our articles, news and product blog
            </div>
            <PrimaryButton text="Visit Blog" :hasIcon="true" />
            
        </div>
        <div class="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"><a
                class="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
                href="/blog/will-ai-take-over-art">
                <div class="h-60 sm:h-56 relative mb-6">
                    <div
                        class="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse">
                    </div><img alt="Will AI take over Art?" loading="lazy"
                        class="absolute inset-0 object-cover w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                        sizes="100vw"
                        src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=3840&q=75"
                        >
                </div>
                <div
                    class="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                    <p class="text-lg font-semibold mb-1">Blog</p>
                    <div class="text-base text-darkGrey flex items-center mb-6"><span>The Reformist</span>
                        <div class="h-2 w-2 rounded-full bg-white mx-[6px] "></div><span>May 29th, 2024</span>
                    </div>
                    <h6 class="text-xl md:text-2xl font-semibold line-clamp-2">Will AI take over Art?</h6>
                </div>
            </a><a
                class="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
                href="/blog/cryptocurrency-vs-tokens">
                <div class="h-60 sm:h-56 relative mb-6">
                    <div
                        class="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse">
                    </div><img alt="Cryptocurrency vs Tokens" loading="lazy"
                        class="absolute inset-0 object-cover w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                        sizes="100vw"
                        src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=3840&q=75"
                        >
                </div>
                <div
                    class="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                    <p class="text-lg font-semibold mb-1">Blog</p>
                    <div class="text-base text-darkGrey flex items-center mb-6"><span>The Reformist</span>
                        <div class="h-2 w-2 rounded-full bg-white mx-[6px] "></div><span>May 29th, 2024</span>
                    </div>
                    <h6 class="text-xl md:text-2xl font-semibold line-clamp-2">Cryptocurrency vs Tokens</h6>
                </div>
            </a><a
                class="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500"
                href="/blog/cryptocurrency-and-crypto-asset">
                <div class="h-60 sm:h-56 relative mb-6">
                    <div
                        class="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse">
                    </div>
                    <img alt="Cryptocurrency and Crypto asset" loading="lazy"
                        class="absolute inset-0 object-cover w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                        sizes="100vw"
                        src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=3840&q=75"
                        >
                </div>
                <div
                    class="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                    <p class="text-lg font-semibold mb-1">Blog</p>
                    <div class="text-base text-darkGrey flex items-center mb-6"><span>The Reformist</span>
                        <div class="h-2 w-2 rounded-full bg-white mx-[6px] "></div><span>May 29th, 2024</span>
                    </div>
                    <h6 class="text-xl md:text-2xl font-semibold line-clamp-2">Cryptocurrency and Crypto asset</h6>
                </div>
            </a></div>
    </div>
</template>
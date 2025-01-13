<script setup lang="ts"></script>

<template>
    <div class="px-5 md:px-10 lg:px-[56px] xl:px-[112px] py-10 bg-[#071626] ">
        <div class="lg:grid lg:grid-cols-3 my-10">
            <div class="max-w-lg mb-10 lg:mb-0">
                <div class="w-full grid grid-cols-4"><input
                        class="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
                        placeholder="Your Email Address" type="text"><button
                        class="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">Subscribe</button>
                </div>
                <div class="flex gap-3 mt-5 items-center">
                    <div
                        class="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                        <input class="hidden" id="agreement" type="checkbox" name="agreement"></div><label
                        for="agreement" class="text-sm cursor-pointer">I agree to receive other notifications from
                        Forcythe</label>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
                <div class="lg:pl-14 md:col-span-2 md:pr-10">
                    <img src="https://forcythe.com/images/forcythe%20logo.svg" class="w-auto md:w-20 lg:w-auto mb-5 md:mb-8" alt="Forcythe logo" />
                    <p class="text-base text-darkGray leadin font-normal">We are the growth company for businesses
                        looking to scale. We are dedicated to transforming businesses with bespoke digital solutions
                        that drive growth.</p>
                    <div class="mt-10 hidden md:flex items-center gap-2"><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.facebook.com/forcythe/"><img alt="social" loading="lazy" width="20"
                                height="20" src="https://forcythe.com/images/facebook.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.instagram.com/forcythe"><img alt="social" loading="lazy" width="20"
                                height="20" src="https://forcythe.com/images/instagram.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://twitter.com/forcythe_"><img alt="social" loading="lazy" width="20" height="20"
                                src="https://forcythe.com/images/x.svg"></a><a
                            target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.linkedin.com/company/forcythe/"><img alt="social" loading="lazy"
                                width="20" height="20" src="https://forcythe.com/images/linkedin.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.youtube.com/@forcythe"><img alt="social" loading="lazy" width="20"
                                height="20" src="https://forcythe.com/images/youtube.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://podcasters.spotify.com/pod/show/the-future-insight"><img alt="social"
                                loading="lazy" width="20" height="20" decoding="async" data-nimg="1"
                                src="https://forcythe.com/images/Icon.svg"></a></div>
                </div>
                <div class="lg:pl-10">
                    <h3 class="mb-8 text-2xl font-bold">Company</h3>
                    <ul class="flex flex-col gap-2">
                        <li class="text-base text-accent3 font-medium"><a href="/about"><span>About</span></a></li>
                        <li class="text-base text-accent3 font-medium"><a href="/services"><span>Services</span></a>
                        </li>
                        <li class="text-base text-accent3 font-medium"><a
                                href="/services#portfolio"><span>Portfolio</span></a></li>
                        <li class="text-base text-accent3 font-medium"><a href="/studio"><span>Studio</span></a></li>
                        <li class="text-base text-accent3 font-medium"><a href="/foundation"><span>Foundation</span></a>
                        </li>
                        <li class="text-base text-accent3 font-medium"><a href="/career"><span>Careers</span></a></li>
                        <li class="text-base text-accent3 font-medium"><a href="/blog"><span>Blog</span></a></li>
                    </ul>
                    <div class="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto"><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.facebook.com/forcythe/"><img alt="social" loading="lazy" width="20"
                                height="20" src="https://forcythe.com/images/facebook.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.instagram.com/forcythe"><img alt="social" loading="lazy" width="20"
                                height="20" src="https://forcythe.com/images/instagram.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://twitter.com/forcythe_"><img alt="social" loading="lazy" width="20" height="20"
                                src="https://forcythe.com/images/x.svg"></a><a
                            target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.linkedin.com/company/forcythe/"><img alt="social" loading="lazy"
                                width="20" height="20" src="https://forcythe.com/images/linkedin.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://www.youtube.com/@forcythe"><img alt="social" loading="lazy" width="20"
                                height="20" src="https://forcythe.com/images/youtube.svg"></a><a target="_blank"
                            class="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                            href="https://podcasters.spotify.com/pod/show/the-future-insight"><img alt="social"
                                loading="lazy" width="20" height="20" decoding="async" data-nimg="1"
                                src="https://forcythe.com/images/Icon.svg"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright border-t-[1px] border-accent">
            <p class="text-accent3 text-sm mt-5 text-center md:text-left">Copyright © 2024 Forcythe. All rights
                reserved.</p>
        </div>
    </div>
</template>
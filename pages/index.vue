<template>
    <div class="container mx-auto p-8 bg-gray-900 text-white min-h-screen">
        <h1 class="text-3xl font-extrabold text-center mb-6">Paid PWA Component Generator</h1>

        <Adsbygoogle :ad-full-width-responsive="true" ad-slot="6833537473" />
        <!-- SEO-optimized Aside -->
        <aside class="mb-8 p-4 bg-gray-800 border-l-4 border-blue-500 rounded text-gray-200 shadow-md">
            <p>
                The <strong>Paid PWA Component Generator</strong> is a powerful tool for web developers to monetize
                Progressive
                Web Applications (PWAs) by charging for downloads. Utilizing Stripe and the Payment Request API, this
                tool makes
                it easy to create secure, customizable components that handle payments and integrate seamlessly into any
                web or
                Vue application.
            </p>
        </aside>

        <!-- Instructions Section -->
        <section class="mb-8 p-4 bg-gray-800 border-l-4 border-green-500 rounded text-gray-200 shadow-md">
            <h2 class="text-xl font-bold mb-2">How to Use Paid PWA</h2>
            <p>To use the <strong>Paid PWA</strong> package, you have two options (click the code to copy to clipboard):
            </p>
            <ul class="list-disc list-inside mb-4">
                <li>
                    <strong>Option 1:</strong> Add the following script tag to your HTML to load the package:
                    <pre class="bg-gray-700 p-4 rounded relative mt-2">
            <code @click="copyToClipboard('&lt;script type=module src=https://cdn.jsdelivr.net/gh/mastashake08/paid-pwa@main/src/paid-pwa.js&gt;&lt;/script&gt;')" class="cursor-pointer text-green-300 hover:text-green-400 text-center">&lt;script type="module" src="https://cdn.jsdelivr.net/gh/mastashake08/paid-pwa@main/src/paid-pwa.js"&gt;&lt;/script&gt;</code>
          </pre>
                </li>
                <li>
                    <strong>Option 2:</strong> Install via npm by running the following command in your terminal:
                    <pre class="bg-gray-700 p-4 rounded relative mt-2">
            <code @click="copyToClipboard('npm install @mastashake08/paid-pwa')" class="cursor-pointer text-green-300 hover:text-green-400 text-center">npm install @mastashake08/paid-pwa</code>
          </pre>
                </li>
            </ul>
        </section>

        <!-- Input Form -->
        <form class="space-y-4 bg-gray-800 p-6 rounded shadow-md">

            <Adsbygoogle />
            <div>
                <label for="stripePublicKey" class="block font-medium text-gray-300">Stripe Public Key:</label>
                <input type="text" id="stripePublicKey" v-model="form.stripePublicKey" required
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="currency" class="block font-medium text-gray-300">Currency:</label>
                <input type="text" id="currency" v-model="form.currency" required
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="amount" class="block font-medium text-gray-300">Amount (in smallest currency unit):</label>
                <input type="number" id="amount" v-model="form.amount" required
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="serverEndpoint" class="block font-medium text-gray-300">Server Endpoint:</label>
                <input type="text" id="serverEndpoint" v-model="form.serverEndpoint" required
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="googleMerchId" class="block font-medium text-gray-300">Google Pay Merchant ID:</label>
                <input type="text" id="googleMerchId" v-model="form.googleMerchId" required
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="serviceWorkerUrl" class="block font-medium text-gray-300">Service Worker URL:</label>
                <input type="text" id="serviceWorkerUrl" v-model="form.serviceWorkerUrl" required
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="supportedNetworks" class="block font-medium text-gray-300">Supported Networks (comma
                    separated):</label>
                <input type="text" id="supportedNetworks" v-model="form.supportedNetworks"
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <label for="supportedTypes" class="block font-medium text-gray-300">Supported Types (comma
                    separated):</label>
                <input type="text" id="supportedTypes" v-model="form.supportedTypes"
                    class="w-full p-2 border border-gray-700 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </form>

        <!-- Side-by-Side Output -->
        <div v-if="generatedWebComponent && generatedVueComponent" class="flex flex-wrap md:flex-nowrap gap-8 mt-8">
            <!-- Web Component Output -->
            <div class="w-full md:w-1/2 bg-gray-800 p-4 rounded relative shadow-md">
                <h2 class="text-xl font-bold mb-2 text-white">Generated Web Component (Click Code To Copy):</h2>
                <pre class="overflow-x-auto bg-gray-900 p-4 rounded text-green-300">
          <code @click="copyToClipboard(generatedWebComponent)">{{ generatedWebComponent }}</code>
        </pre>
            </div>

            <!-- Vue Component Output -->
            <div class="w-full md:w-1/2 bg-gray-800 p-4 rounded relative shadow-md">
                <h2 class="text-xl font-bold mb-2 text-white">Generated Vue Component (Click Code To Copy):</h2>
                <pre class="overflow-x-auto bg-gray-900 p-4 rounded text-green-300">
          <code @click="copyToClipboard(generatedVueComponent)">{{ generatedVueComponent }}</code>
        </pre>
            </div>
        </div>

        <!-- Social Media Links -->
        <footer class="mt-12 text-center">
            <h2 class="text-xl font-bold mb-4">Connect with Jyrone Parker</h2>
            <Adsbygoogle :ad-full-width-responsive="true" ad-slot="6833537473" />
            <div class="flex justify-center space-x-4">
                <a href="https://jyroneparker.com" target="_blank" class="text-white hover:text-blue-400">
                    <Icon name="mdi:earth" />
                </a>
                <a href="https://twitter.com/jyroneparker" target="_blank" class="text-white hover:text-blue-400">
                    <Icon name="mdi:twitter" />
                </a>
                <a href="https://instagram.com/mastashake08" target="_blank" class="text-white hover:text-pink-500">
                    <Icon name="mdi:instagram" />
                </a>
                <a href="https://github.com/mastashake08" target="_blank" class="text-white hover:text-gray-400">
                    <Icon name="mdi:github" />
                </a>
                <a href="https://patreon.com/mastashake08" target="_blank" class="text-white hover:text-red-400">
                    <Icon name="mdi:patreon" />
                </a>
                <a href="https://linkedin.com/in/jyroneparker" target="_blank" class="text-white hover:text-blue-600">
                    <Icon name="mdi:linkedin" />
                </a>
                <a href="https://open.spotify.com/artist/1nQuAaO8h98RiBdzfMhlSu" target="_blank"
                    class="text-white hover:text-green-500">
                    <Icon name="mdi:spotify" />
                </a>
                <a href="https://music.apple.com/us/artist/mastashake/1520124797" target="_blank"
                    class="text-white hover:text-red-500">
                    <Icon name="mdi:apple" />
                </a>
                <a href="https://www.youtube.com/c/jyroneparker" target="_blank" class="text-white hover:text-red-600">
                    <Icon name="mdi:youtube" />
                </a>
            </div>
        </footer>
        <ClientOnly>
            <PaidPwa stripe-public-key="pk_test_vOqDwDXTRiUp8s6NODjI1R1z" :amount=300 currency="usd"
                :supported-networks="['visa', 'mastercard', 'amex', 'discover']" :supported-types="['CARD']"
                server-endpoint="" service-worker-url="" apple-merchant-id="merchant.com.bestbudz"
                google-merchant-id="BCR2DN4T6OI6TCIY" google-merchant-name="Jyrone Parker" />
        </ClientOnly>

    </div>
</template>

<script>
import { ref, computed } from 'vue';
import PaidPwa from '@mastashake08/paid-pwa/vue';
export default {
    components: {
        PaidPwa,
    },
    setup() {
        useJsonld({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Paid PWA",
            "description": "Paid PWA is a versatile tool for web developers to monetize Progressive Web Applications using Stripe and the Payment Request API. It provides both Web and Vue 3 components for seamless integration.",
            "applicationCategory": "WebApplication",
            "applicationSubCategory": "Web Development Tool",
            "operatingSystem": ["Windows", "macOS", "Linux"],
            "url": "https://github.com/mastashake08/paid-pwa-generator",
            "image": "https://github.com/mastashake08/paid-pwa-generator/tree/main/public/logo.svg",
            "softwareVersion": "1.0.0",
            "softwareHelp": "https://github.com/mastashake08/paid-pwa-generator#readme",
            "releaseNotes": "Added Vue 3 support and enhanced SEO features in version 1.0.0.",
            "creator": {
                "@type": "Person",
                "name": "Jyrone Parker",
                "alternateName": "Mastashake",
                "image": "https://avatars.githubusercontent.com/u/1226096?s=400&u=332d5795dc817b9d4b551ebe3dd9fe00b4b3f2ae&v=4",
                "sameAs": [
                    "https://jyroneparker.com",
                    "https://twitter.com/jyroneparker",
                    "https://instagram.com/mastashake08",
                    "https://github.com/mastashake08",
                    "https://patreon.com/mastashake08",
                    "https://linkedin.com/in/jyroneparker",
                    "https://open.spotify.com/artist/1nQuAaO8h98RiBdzfMhlSu",
                    "https://music.apple.com/us/artist/mastashake/1520124797",
                    "https://www.youtube.com/c/jyroneparker",
                    "https://www.youtube.com/channel/UCe02WN6KvevQNQw9DruDqmQ"
                ],
                "email": "mailto:jyrone.parker@gmail.com",
                "jobTitle": "Software Developer and Entrepreneur",
                "knowsAbout": [
                    "JavaScript",
                    "Web Development",
                    "Progressive Web Apps",
                    "Stripe Payment Integration",
                    "Vue.js",
                    "SEO Optimization",
                    "Music Production"
                ],
                "awards": [
                    "Best Developer of the Year 2022",
                    "Top Influencer in Tech 2021"
                ]
            },
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "url": "https://github.com/mastashake08/paid-pwa-generator",
                "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "25"
            },
            "review": [
                {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Xavier Hilton"
                    },
                    "datePublished": "2023-09-01",
                    "reviewBody": "Paid PWA has made it easy for us to monetize our web applications seamlessly. Highly recommend!",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                    }
                }
            ],
            "keywords": [
                "PWA",
                "Progressive Web App",
                "Monetize PWA",
                "Stripe Integration",
                "Web Component",
                "Vue 3 Component",
                "JavaScript",
                "Open Source",
                "Music",
                "Mastashake"
            ],
            "datePublished": "2023-09-06",
            "dateModified": "2023-09-06",
            "publisher": {
                "@type": "Person",
                "name": "Jyrone Parker",
                "url": "https://jyroneparker.com"
            },
            "potentialAction": {
                "@type": "UseAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://jyroneparker.com"
                },
                "name": "Learn More About Jyrone Parker"
            },
            "featureList": [
                "Monetize PWAs with Stripe",
                "Integrates with Payment Request API",
                "Supports Web and Vue 3 components",
                "Dynamic PWA Installation",
                "Customizable for different use cases"
            ],
            "audience": {
                "@type": "Audience",
                "audienceType": "Web Developers, Vue.js Developers, PWA Developers"
            },
            "license": "https://opensource.org/licenses/MIT",
            "additionalType": [
                "http://schema.org/WebApplication",
                "http://schema.org/CreativeWork"
            ],
            "isAccessibleForFree": "True",
            "funding": {
                "@type": "MonetaryGrant",
                "funder": {
                    "@type": "Person",
                    "name": "Jyrone Parker",
                    "sameAs": [
                        "https://patreon.com/mastashake08",
                        "https://github.com/sponsors/mastashake08",
                        "https://cash.me/$mastashake08"
                    ]
                }
            },
            "video": {
                "@type": "VideoObject",
                "name": "How to Use Paid PWA",
                "description": "A tutorial on how to use Paid PWA to monetize Progressive Web Applications.",
                "thumbnailUrl": "https://jyroneparker.com/path/to/thumbnail.jpg",
                "uploadDate": "2023-08-15",
                "contentUrl": "https://www.youtube.com/watch?v=your_video_id",
                "embedUrl": "https://www.youtube.com/embed/your_video_id"
            },
            "screenshot": [
                "https://jyroneparker.com/path/to/screenshot1.png",
                "https://jyroneparker.com/path/to/screenshot2.png"
            ],
            "softwareRequirements": "Compatible with modern browsers (Chrome, Firefox, Safari, Edge)",
            "award": [
                "Best Developer Tool of the Year 2023",
                "Innovative Web Application Award 2022"
            ],
            "faq": {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Paid PWA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Paid PWA is a tool that helps web developers monetize Progressive Web Applications by charging users for PWA downloads. It simplifies payment integration using Stripe and the Payment Request API."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I use this tool?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simply fill in the required details in the form above, such as your Stripe Public Key, currency, and amount, and the tool will generate the necessary code for your web component or Vue component."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, the Paid PWA Component Generator is free to use for developers looking to monetize their PWAs."
                        }
                    }
                ]
            }
        })
        const form = ref({
            stripePublicKey: '',
            currency: 'usd',
            amount: '',
            serverEndpoint: '',
            serviceWorkerUrl: '',
            supportedNetworks: 'visa,mastercard,amex,discover',
            supportedTypes: 'credit,debit',
            googleMerchId: 'test'
        });

        const generatedWebComponent = computed(() => {
            return `
<paid-pwa
  stripe-public-key="${form.value.stripePublicKey}"
  currency="${form.value.currency}"
  amount="${form.value.amount}"
  supported-networks="${form.value.supportedNetworks}"
  supported-types="${form.value.supportedTypes}"
  server-endpoint="${form.value.serverEndpoint}"
  service-worker-url="${form.value.serviceWorkerUrl}"
  google-merchant-id="${form.value.googleMerchId}">
</paid-pwa>`;
        });

        const generatedVueComponent = computed(() => {
            const supportedNetworksArray = form.value.supportedNetworks.split(',').map((n) => `'${n.trim()}'`);
            const supportedTypesArray = form.value.supportedTypes.split(',').map((t) => `'${t.trim()}'`);
            return `
<PaidPwa
  stripe-public-key="${form.value.stripePublicKey}"
  :amount="${form.value.amount}"
  currency="${form.value.currency}"
  :supported-networks="[${supportedNetworksArray.join(', ')}]"
  :supported-types="[${supportedTypesArray.join(', ')}]"
  server-endpoint="${form.value.serverEndpoint}"
  service-worker-url="${form.value.serviceWorkerUrl}"
  google-merchant-id="${form.value.googleMerchId}"/>`;
        });

        const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text).then(() => {
                alert('Copied to clipboard!');
            }, (err) => {
                console.error('Failed to copy: ', err);
            });
        };

        return { form, generatedWebComponent, generatedVueComponent, copyToClipboard };
    },
};
</script>

<style>
body {
    background-color: #1a1a1a;
}
</style>

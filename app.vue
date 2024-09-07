<template>
  <div class="container mx-auto p-8">
    <h1 class="text-2xl font-bold mb-4">Paid PWA Component Generator</h1>

    <!-- Input Form -->
    <form class="space-y-4">
      <div>
        <label for="stripePublicKey" class="block font-medium">Stripe Public Key:</label>
        <input type="text" id="stripePublicKey" v-model="form.stripePublicKey" required
          class="w-full p-2 border rounded" />
      </div>

      <div>
        <label for="currency" class="block font-medium">Currency:</label>
        <input type="text" id="currency" v-model="form.currency" required class="w-full p-2 border rounded" />
      </div>

      <div>
        <label for="amount" class="block font-medium">Amount (in smallest currency unit):</label>
        <input type="number" id="amount" v-model="form.amount" required class="w-full p-2 border rounded" />
      </div>

      <div>
        <label for="serverEndpoint" class="block font-medium">Server Endpoint:</label>
        <input type="text" id="serverEndpoint" v-model="form.serverEndpoint" required
          class="w-full p-2 border rounded" />
      </div>

      <div>
        <label for="serviceWorkerUrl" class="block font-medium">Service Worker URL:</label>
        <input type="text" id="serviceWorkerUrl" v-model="form.serviceWorkerUrl" required
          class="w-full p-2 border rounded" />
      </div>

      <div>
        <label for="supportedNetworks" class="block font-medium">Supported Networks (comma separated):</label>
        <input type="text" id="supportedNetworks" v-model="form.supportedNetworks" class="w-full p-2 border rounded" />
      </div>

      <div>
        <label for="supportedTypes" class="block font-medium">Supported Types (comma separated):</label>
        <input type="text" id="supportedTypes" v-model="form.supportedTypes" class="w-full p-2 border rounded" />
      </div>
    </form>

    <!-- Output -->
    <div v-if="generatedWebComponent" class="mt-8">
      <h2 class="text-xl font-bold mb-2">Generated Web Component:</h2>
      <pre class="bg-gray-100 p-4 rounded"><code>{{ generatedWebComponent }}</code></pre>
    </div>

    <div v-if="generatedVueComponent" class="mt-8">
      <h2 class="text-xl font-bold mb-2">Generated Vue Component:</h2>
      <pre class="bg-gray-100 p-4 rounded"><code>{{ generatedVueComponent }}</code></pre>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
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
      "softwareVersion": "1.1.0",
      "softwareHelp": "https://github.com/mastashake08/paid-pwa-generator#readme",
      "releaseNotes": "Added Vue 3 support and enhanced SEO features in version 1.1.0.",
      "creator": {
        "@type": "Person",
        "name": "Jyrone Parker",
        "alternateName": "Mastashake",
        "image": "https://jyroneparker.com/path/to/jyrone-parker-profile.jpg",
        "sameAs": [
          "https://jyroneparker.com",
          "https://twitter.com/jyroneparker",
          "https://instagram.com/mastashake08",
          "https://",
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
      ]
    })
    const form = ref({
      stripePublicKey: '',
      currency: 'usd',
      amount: '',
      serverEndpoint: '',
      serviceWorkerUrl: '',
      supportedNetworks: 'visa,mastercard,amex,discover',
      supportedTypes: 'credit,debit',
    });

    // Computed properties to generate component code dynamically
    const generatedWebComponent = computed(() => {
      return `
<paid-pwa
  stripe-public-key="${form.value.stripePublicKey}"
  currency="${form.value.currency}"
  amount="${form.value.amount}"
  supported-networks="${form.value.supportedNetworks}"
  supported-types="${form.value.supportedTypes}"
  server-endpoint="${form.value.serverEndpoint}"
  service-worker-url="${form.value.serviceWorkerUrl}">
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
  service-worker-url="${form.value.serviceWorkerUrl}" />`;
    });

    return { form, generatedWebComponent, generatedVueComponent };
  },
};
</script>

<style>
/* Add any additional styles here */
</style>

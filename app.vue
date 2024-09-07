<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-extrabold text-center mb-6">Paid PWA Component Generator</h1>

    <!-- SEO-optimized Aside -->
    <aside class="mb-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-gray-800">
      <p>
        The <strong>Paid PWA Component Generator</strong> is a powerful tool for web developers to monetize Progressive
        Web Applications (PWAs) by charging for downloads. Utilizing Stripe and the Payment Request API, this tool makes
        it easy to create secure, customizable components that handle payments and integrate seamlessly into any web or
        Vue application.
      </p>
    </aside>

    <!-- Instructions Section -->
    <section class="mb-8 p-4 bg-green-50 border-l-4 border-green-400 rounded text-gray-800">
      <h2 class="text-xl font-bold mb-2">How to Use Paid PWA</h2>
      <p>To use the <strong>Paid PWA</strong> package, you have two options:</p>
      <ul class="list-disc list-inside mb-4">
        <li>
          <strong>Option 1:</strong> Add the following script tag to your HTML to load the package:
          <pre
            class="bg-gray-100 p-4 rounded"><code>&lt;script type="module" src="https://cdn.jsdelivr.net/gh/mastashake08/paid-pwa@main/src/paid-pwa.js"&gt;&lt;/script&gt;</code></pre>
        </li>
        <li>
          <strong>Option 2:</strong> Install via npm by running the following command in your terminal:
          <pre class="bg-gray-100 p-4 rounded"><code>npm install @mastashake08/paid-pwa</code></pre>
        </li>
      </ul>
    </section>

    <!-- Input Form -->
    <form class="space-y-4 bg-white p-6 rounded shadow-md">
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

    <!-- FAQ Section -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <div class="bg-white p-4 rounded shadow-md">
          <h3 class="font-semibold">What is Paid PWA?</h3>
          <p>
            Paid PWA is a tool that helps web developers monetize Progressive Web Applications by charging users for PWA
            downloads. It simplifies payment integration using Stripe and the Payment Request API.
          </p>
        </div>
        <div class="bg-white p-4 rounded shadow-md">
          <h3 class="font-semibold">How do I use this tool?</h3>
          <p>
            Simply fill in the required details in the form above, such as your Stripe Public Key, currency, and amount,
            and the tool will generate the necessary code for your web component or Vue component.
          </p>
        </div>
        <div class="bg-white p-4 rounded shadow-md">
          <h3 class="font-semibold">Is this tool free to use?</h3>
          <p>
            Yes, the Paid PWA Component Generator is free to use for developers looking to monetize their PWAs.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
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
body {
  background-color: #f0f4f8;
}
</style>

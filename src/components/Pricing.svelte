<script lang="ts">
  import PricingCard from "./PricingCard.svelte";
</script>

<div
  class="pricing self-center grid grid-cols-3 justify-items-center gap-6 pb-12"
>
  <h2 class="col-span-3 w-full text-center text-4xl text-scape-blue-3 p-4">
    Our Process
  </h2>
  <PricingCard
    url="./images/design.svg"
    title="Design"
    price="We make it our number 1 priority to collaborate with you and ensure we understand and can meet your needs."
  />
  <PricingCard
    url="./images/iterate.svg"
    title="Iterate"
    price="We keep iterating based on your feedback to create the best experience for you."
  />
  <PricingCard
    url="./images/deploy.svg"
    title="Deploy"
    price="We deploy quickly on the cloud using Vercel, the fastest available deployment software available."
  />
</div>

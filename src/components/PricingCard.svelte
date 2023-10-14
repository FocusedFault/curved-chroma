<script lang="ts">
  export let url: String, title: String, price: String;
</script>

<div class="max-w-lg w-full lg:flex">
  <div
    class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style="background-image: url('{url}')"
    title="Company Logo"
  />
  <div
    class="border-r border-b border-l border-scape-blue-4 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
  >
    <div class="mb-8">
      <div class="text-scape-blue-3 font-bold text-xl mb-2">
        {title}
      </div>
      <p class="text-gray-600 text-base">
        {price}
      </p>
    </div>
  </div>
</div>

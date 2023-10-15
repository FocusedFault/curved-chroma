<script lang="ts">
  export let url: String, title: String, price: String;
</script>

<div
  class="max-w-lg w-full lg:flex border-scape-blue-4 bg-scape-blue-2 rounded-lg p-4 text-scape-white"
>
  <div
    class="h-60 w-60 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style="background-image: url('{url}')"
    title="Company Logo"
  />
  <div class="flex flex-col justify-between leading-normal p-4">
    <div class="mb-8">
      <div class=" font-bold text-xl mb-2">
        {title}
      </div>
      <p class="">
        {price}
      </p>
    </div>
  </div>
</div>

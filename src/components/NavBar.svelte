<script>
  let links = [
    { url: "./", active: true, label: "About" },
    { url: "./", active: true, label: "Services" },
    { url: "./", active: true, label: "Contact" },
  ];
</script>

<nav class="flex flex-row-reverse bg-scape-blue-2 p-4">
  <ul>
    {#each links as link}
      <li>
        <a href={link.url} class:active={link.active}>{link.label}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: #fcfcfc;
    padding: 5px;
  }

  .active {
    font-weight: bold;
  }
</style>

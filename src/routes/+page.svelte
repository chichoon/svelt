<script>
  import { getGitHubData } from '@/services/getGitHubData';

  import MainComponent from '@/components/MainComponent.svelte';
</script>

<svelte:head
  ><link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="use-credentials" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@800&family=Noto+Sans+KR:wght@500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#await getGitHubData()}
  <div class="loading" />
{:then data}
  <MainComponent {data} />
{:catch error}
  <p>{error.message}</p>
{/await}

<style lang="scss">
  .loading {
    width: 100vw;
    height: 100vh;
    background: no-repeat url('@/assets/images/loading.jpg');
    background-size: cover;
  }
</style>

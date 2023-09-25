<script>
  import NavButtonSection from "@/components/NavButtonSection/NavButtonSection.svelte";

  import LeftStatusSection from "@/components/LeftStatusSection/LeftStatusSection.svelte";
  import RightStatusSection from "@/components/RightStatusSection/RightStatusSection.svelte";
  
  import operatorImg from "@/assets/test.png";
  import ReactIcon from "@/assets/ReactIcon.svelte";

  import { getGitHubData } from "@/services/getGitHubData";

</script>

<svelte:head
  ><link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="use-credentials"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@800&family=Noto+Sans+KR:wght@500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#await getGitHubData()}
  <p>loading...</p>
{:then data} 
  <main class="statPageBackgroundWrapper">
    <NavButtonSection />
    <div class="groupIconWrapper">
      <ReactIcon />
    </div>
    <img src={operatorImg} alt="operator" class="characterImage" />
    <LeftStatusSection />
    <RightStatusSection />
  </main>
{:catch error}
  <p>{error.message}</p>
{/await}

<style lang="scss">
  @use "@/styles/colors";
  @use "@/styles/levels";
  @use "@/styles/sizes";

  .statPageBackgroundWrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    box-shadow: inset colors.$BG_SHADOW;
    background: no-repeat url("@/assets/test_bg.png");
    background-size: cover;
    font-family: "Noto Sans KR", sans-serif;
  }

  .groupIconWrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 220px;
    height: 220px;
    z-index: levels.$LEVEL_GROUP_IMAGE;
  }

  .groupIconWrapper :global(svg) {
    width: 220px;
    height: 220px;
    fill: colors.$GROUP_ICON;
  }

  .characterImage {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    z-index: levels.$LEVEL_CHAR_IMAGE;
  }
</style>

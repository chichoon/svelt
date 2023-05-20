<script>
  import NavButtonSection from "@/components/NavButtonSection/NavButtonSection.svelte";

  import operatorImg from "@/assets/test.png";
  import ReactIcon from "@/assets/ReactIcon.svelte";
  import LeftStatusSection from "@/components/LeftStatusSection/LeftStatusSection.svelte";
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

<main class="statPageBackgroundWrapper">
  <NavButtonSection />
  <div class="groupIconWrapper">
    <ReactIcon />
  </div>
  <img src={operatorImg} alt="operator" class="characterImage" />
  <LeftStatusSection />
</main>

<style lang="scss">
  @use "@/styles/colors";
  @import "./+page.scss";

  .groupIconWrapper :global(svg) {
    width: 220px;
    height: 220px;
    fill: colors.$GROUP_ICON;
  }
</style>

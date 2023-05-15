<script>
  import GoHomeButton from "@/components/NavButtonSection/GoHomeButton.svelte";
  import FileIcon from "@/components/NavButtonSection/FileIcon.svelte";
  import NavButtonSection from "@/components/NavButtonSection/NavButtonSection.svelte";

  import operatorImg from "@/assets/test.png";
  import ReactIcon from "@/assets/ReactIcon.svelte";
</script>

<main class="statPageBackgroundWrapper">
  <NavButtonSection />
  <div class="groupIconWrapper">
    <ReactIcon />
  </div>
  <img src={operatorImg} alt="operator" class="characterImage" />
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

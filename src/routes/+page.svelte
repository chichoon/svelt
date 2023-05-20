<script>
  import NavButtonSection from "@/components/NavButtonSection/NavButtonSection.svelte";

  import operatorImg from "@/assets/test.png";
  import ReactIcon from "@/assets/ReactIcon.svelte";
  import LeftStatusSection from "@/components/LeftStatusSection/LeftStatusSection.svelte";
</script>

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

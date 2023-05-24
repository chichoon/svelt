<script>
  import EliteStats from "./EliteStats/EliteStats.svelte";
</script>

<section class="rightStatSection">
  <EliteStats />
</section>

<style lang="scss">
  @use "@/styles/levels";

  .rightStatSection {
    max-width: 50vw;
    padding: 20px;
    padding-right: 0;
    z-index: levels.$LEVEL_UI;
  }
</style>

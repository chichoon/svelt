<script>
  import NameArea from "./NameArea/NameArea.svelte";
  import NumeralStats from "./NumeralStats/NumeralStats.svelte";
</script>

<section class="leftStatSection">
  <NumeralStats />
  <NameArea />
</section>

<style lang="scss">
  @use "@/styles/levels";

  .leftStatSection {
    max-width: 50vw;
    padding: 20px;
    z-index: levels.$LEVEL_UI;
  }
</style>

<script>
  import EliteStats from "./EliteStats/EliteStats.svelte";
  import ExpStats from "./ExpStats.svelte";
  import SkillStats from "./SkillStats/SkillStats.svelte";
  import TalentStats from "./TalentStats.svelte";
</script>

<section class="rightStatSection">
  <ExpStats />
  <EliteStats />
  <SkillStats />
  <TalentStats />
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

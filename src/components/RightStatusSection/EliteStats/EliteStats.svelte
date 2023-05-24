<script>
  import EliteIcon from "./EliteIcon.svelte";
  import PotentialIcon from "./PotentialIcon.svelte";
</script>

<div class="eliteStatsWrapper">
  <div class="eliteWrapper">
    <EliteIcon />
    <div class="eliteInnerBar">
      <span>정예화</span>
      <div>
        <span>MAX</span>
      </div>
    </div>
  </div>
  <div class="eliteWrapper">
    <PotentialIcon />
    <div class="eliteInnerBar">
      <span>잠재능력</span>
      <div>
        <span>MAX</span>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./eliteStats.scss";
</style>

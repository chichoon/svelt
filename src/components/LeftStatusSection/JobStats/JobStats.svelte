<script>
  import FrontIcon from "@/assets/FrontIcon.svelte";
  import RangeIcon from "./RangeIcon.svelte";
</script>

<div class="jobStatWrapper">
  <div class="jobStatDiv jobIcon">
    <FrontIcon />
  </div>
  <div class="jobStatDiv rangeWrapper">
    <RangeIcon />
    <span>커밋 범위</span>
  </div>
  <div class="keywordWrapper">
    <div class="jobStatDiv keywordInner">
      <span>
        Original UI Design & Background
        <br />ⓒ Hypergryph
      </span>
    </div>
  </div>
</div>

<style lang="scss">
  @use "@/styles/colors";
  @import "./jobStats.scss";

  .jobIcon :global(svg) {
    width: 50px;
    height: 50px;
    fill: colors.$BUTTON_ICON;
    transform: rotate(-45deg);
  }
</style>

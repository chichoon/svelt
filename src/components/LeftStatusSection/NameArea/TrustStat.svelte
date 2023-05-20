<script lang="ts">
  import FastForwardIcon from "@/assets/FastForwardIcon.svelte";

  export let trustPercentage: number;
</script>

<div class="trustWrapper">
  <div class="trustTextWrapper">
    <div class="trustLeftText">
      <span class="trustText">신뢰도</span>
      <FastForwardIcon />
    </div>
    <span class="trustText">{trustPercentage}</span>
  </div>
  <div
    class="progressBar"
    style={`background: linear-gradient(to right, #ffaf6d 0 ${trustPercentage}%, #d8d8d8 ${trustPercentage}% 100%)`}
  />
</div>

<style lang="scss">
  @use "@/styles/colors";
  @import "./trustStat.scss";

  .trustLeftText :global(svg) {
    width: 10px;
    height: 10px;
    fill: colors.$BUTTON_ICON_DARK;
    margin-left: 5px;
  }
</style>

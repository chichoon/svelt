<script lang="ts">
  export let value: number | string;
  export let maxValue: number | null = null;
  export let hoverText: string = "";
  export const percentage =
    typeof value === "number" && typeof maxValue === "number"
      ? Math.floor((value * 100) / maxValue)
      : 0;
</script>

<div class="statChipWrapper">
  <div class="iconWrapper">
    <slot />
  </div>
  <div
    class="valueWrapper"
    style={`background: linear-gradient(to right, #9e9a9b 0 ${percentage}%, #00000000 ${percentage}% 100%)`}
  >
    <span>{value}</span>
  </div>
  <span class="tooltip">{hoverText}</span>
</div>

<style lang="scss">
  @use "@/styles/colors";
  @import "./statChip.scss";

  .iconWrapper :global(svg) {
    width: 18px;
    height: 18px;
    border-radius: 2px;
    fill: colors.$WHITE;
  }
</style>

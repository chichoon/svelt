<script lang="ts">
  export let value: number | string;
  export let maxValue: number | null = null;
  export let hoverText: string = "";
  $: percentage =
    typeof value === "number" && typeof maxValue === "number"
      ? Math.floor((value * 100) / maxValue)
      : 0;
  let isHovering = false;
</script>

<div class="statChipWrapper">
  <div class="iconWrapper">
    <slot />
  </div>
  <div
    class="valueWrapper"
    style={`background: linear-gradient(to right, #9e9a9b 0 ${percentage}%, #00000000 ${percentage}% 100%)`}
    on:mouseover={() => isHovering = true}
    on:focus={() => isHovering = true}
    on:mouseout={() => isHovering = false}
    on:blur={() => isHovering = false}
  >
    <span>{isHovering ? hoverText : value}</span>
  </div>
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

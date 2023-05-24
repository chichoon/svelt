<script>
  export const indexes = [2, 3, 6, 9];
</script>

<div class="eliteIconWrapper">
  {#each indexes as index}
    <div
      style={`top: ${
        (index % 2 ? (index / 3) * 8 : (index / 2) * 8) + 10
      }px; z-index: ${index % 2 ? 15 - index : 10 - index}`}
      class={`eliteParallelogram ${index % 2 ? "odd" : ""}`}
    />
  {/each}
</div>

<style lang="scss">
  @use "@/styles/colors";

  .eliteIconWrapper {
    width: 90px;
    height: 90px;
    position: relative;
  }

  .eliteParallelogram {
    width: 50px;
    height: 20px;
    background-color: colors.$WHITE;
    filter: drop-shadow(0 0 2px colors.$BOX_SHADOW_THICK);
    transform: skewX(-45deg) scaleX(0.5) rotate(-45deg);
    position: absolute;
    left: 30px;

    &.odd {
      transform: skew(45deg) scaleX(0.5) rotate(45deg);
      left: 10px;
    }
  }
</style>

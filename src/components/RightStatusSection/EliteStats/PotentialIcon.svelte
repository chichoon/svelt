<script>
  export const styleValues = [
    { deg: 36, left: 5, top: 30 },
    { deg: 72, left: 25, top: 17.5 },
    { deg: 108, left: 0, top: 15 },
    { deg: 144, left: 20, top: 30 },
    { deg: 180, left: 15, top: 7.5 },
  ];
</script>

<div class="potentialIconWrapper">
  {#each styleValues as value}
    <div
      class="potentialParallelogramWrapper"
      style={`transform: rotate(${value.deg}deg); top: ${value.top}px; left: ${value.left}px;`}
    >
      <div class="potentialParallelogram" />
    </div>
  {/each}
</div>

<style lang="scss">
  @use "@/styles/colors";

  .potentialIconWrapper {
    width: 90px;
    height: 90px;
    position: relative;
    filter: drop-shadow(0 3px 0px colors.$HIGHLIGHT_BLUE);
  }

  .potentialParallelogramWrapper {
    position: absolute;
  }

  .potentialParallelogram {
    width: 40px;
    height: 20px;
    background-color: colors.$WHITE;
    transform: skewX(45deg) scaleX(0.5) rotate(45deg);
  }
</style>

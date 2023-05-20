<script lang="ts">
  import StarIcon from "@/assets/StarIcon.svelte";

  export let nOfStars: number;
  export const starArr = Array(nOfStars);
</script>

<div class="starWrapper">
  {#each starArr as _}
    <StarIcon />
  {/each}
</div>

<style lang="scss">
  @use "@/styles/colors";

  .starWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: -5px;
    margin-left: -5px;

    & :global(svg) {
      width: 40px;
      height: 40px;
      transform: rotate(15deg);
      fill: colors.$WHITE;
      filter: drop-shadow(colors.$ELEMENT_SHADOW);
      margin-left: -10px;
    }

    & :global(svg:first-of-type) {
      margin-left: 0;
    }
  }
</style>

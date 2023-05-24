<script lang="ts">
  export let skillLevel: number = 7;
  export let backgroundColor: string = "#ff0000";
</script>

<div class="skillIconWrapper" style={`background-color: ${backgroundColor}`}>
  <div class="levelViewer">
    <div>
      <div
        class={`levelCircle ${skillLevel >= 8 ? "approached" : ""}`}
        style="top: 1px; left: 6px;"
      />
      <div
        class={`levelCircle ${skillLevel >= 9 ? "approached" : ""}`}
        style="top: 10px; left: 1px;"
      />
      <div
        class={`levelCircle ${skillLevel >= 10 ? "approached" : ""}`}
        style="top: 10px; left: 11px;"
      />
    </div>
  </div>
  <slot />
</div>

<style lang="scss">
  @use "@/styles/colors";
  @use "@/styles/levels";

  .skillIconWrapper {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid colors.$BG_UI;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .skillIconWrapper :global(svg) {
    width: 50px;
    height: 50px;
    fill: colors.$WHITE;
    filter: drop-shadow(-5px 5px 0 colors.$BLACK);
  }

  .levelViewer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: levels.$LEVEL_UI;
    width: 20px;
    height: 20px;
    display: flex;
    background-color: colors.$BG_UI;

    & > div {
      position: relative;
    }
  }

  .levelCircle {
    position: absolute;
    background-color: colors.$BUTTON_ICON;
    opacity: 0.5;
    width: 8px;
    height: 8px;
    border-radius: 8px;
  }

  .approached {
    opacity: 1;
  }
</style>

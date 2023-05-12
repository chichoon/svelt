<script>
  import FileIcon from "./FileIcon.svelte";

  import InfoIcon from "@/assets/InfoIcon.svelte";
  import LeftArrowIcon from "@/assets/LeftArrowIcon.svelte";
  import HangerIcon from "@/assets/HangerIcon.svelte";
  import RookIcon from "@/assets/RookIcon.svelte";
</script>

<nav class="buttonWrapper">
  <div class="leftButtonWrapper">
    <button type="button" class="topButton goBackButton">
      <LeftArrowIcon />
    </button>
  </div>
  <button type="button" class="topButton infoButton">
    <div>
      <InfoIcon />
    </div>
  </button>
  <button type="button" class="topButton fileIcon">
    <FileIcon />
  </button>
  <button type="button" class="topButton">
    <div>
      <HangerIcon />
    </div>
  </button>
  <button type="button" class="topButton infoButton">
    <div>
      <RookIcon />
    </div>
  </button>
</nav>

<style lang="scss">
  @use "@/styles/colors";
  @import "./index.scss";

  .topButton :global(svg) {
    width: 25px;
    height: 25px;
    fill: colors.$BUTTON_ICON;
  }

  .infoButton :global(svg) {
    width: 20px;
    height: 20px;
    transform: rotate(-10deg);
  }
</style>

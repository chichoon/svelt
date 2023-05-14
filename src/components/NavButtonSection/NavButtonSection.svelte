<script>
  import FileIcon from "./FileIcon.svelte";
  import GoHomeButton from "./GoHomeButton.svelte";

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
    <GoHomeButton />
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
    <HangerIcon />
  </button>
  <button type="button" class="topButton infoButton rookButton">
    <RookIcon />
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

  .rookButton :global(svg) {
    width: 25px;
    height: 25px;
    transform: none;
  }
</style>

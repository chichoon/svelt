<script lang="ts">
  import FileIcon from "./FileIcon.svelte";
  import GoHomeButton from "./GoHomeButton.svelte";

  import InfoIcon from "@/assets/InfoIcon.svelte";
  import LeftArrowIcon from "@/assets/LeftArrowIcon.svelte";
  import HangerIcon from "@/assets/HangerIcon.svelte";
  import RookIcon from "@/assets/RookIcon.svelte";

  export let htmlUrl: string;
  export let blogUrl: string;
  export let email: string;
  export let createdAt: string;
  
  let isHovered: boolean = false;

  function handleGoBack() {
    window.history.back();
  }

  function handleHover() {
    isHovered = true;
  }

  function handleHoverOut() {
    isHovered = false;
  }
</script>

<nav class="buttonWrapper">
  <div class="leftButtonWrapper">
    <button on:click={handleGoBack} class="topButton goBackButton">
      <LeftArrowIcon />
    </button>
    <GoHomeButton htmlUrl={htmlUrl} />
  </div>
  <button class="topButton infoButton" on:mouseover={handleHover} on:mouseout={handleHoverOut} on:focus={handleHover} on:blur={handleHoverOut}>
    <div>
      <InfoIcon />
    </div>
    {#if isHovered}
      <div class="infoTooltip">Created at {new Date(createdAt).toDateString()}</div>
    {/if}
  </button>
  <a href={`mailto:${email}`} class="topButton fileIcon">
    <FileIcon />
  </a>
  <a href={`https://${blogUrl}`} class="topButton">
    <HangerIcon />
  </a>
  <a class="topButton infoButton rookButton">
    <RookIcon />
  </a>
</nav>

<style lang="scss">
  @use "@/styles/colors";
  @import "./navButtonSection.scss";

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

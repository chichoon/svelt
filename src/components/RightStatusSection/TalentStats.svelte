<script>
  import SvelteIcon from "@/assets/SvelteIcon.svelte";
  import PlusIcon from "@/assets/PlusIcon.svelte";
  import ReactIcon from "@/assets/ReactIcon.svelte";
</script>

<div class="talentStatWrapper">
  <div class="talentStatTop">
    <div class="jobWrapper">
      <SvelteIcon />
      <span>
        Made with
        <br />
        Svelte
      </span>
    </div>
    <div class="detailedJob">
      <div class="detailedJobIcon">
        <div class="blushShadow" />
        <ReactIcon />
        <div class="jobTextWrapper">
          <span>React</span>
          <span>JS</span>
        </div>
      </div>
      <div class="detailedJobDescription">
        <div class="stageWrapper">
          <span>STAGE</span>
          <span>1</span>
        </div>
        <div class="stageManage">
          <span>관리</span>
          <PlusIcon />
        </div>
      </div>
    </div>
  </div>
  <div class="talentWrapper">
    <div>
      <span>Svelte 어렵나?</span>
    </div>
    <div>
      <span>아아아아아</span>
    </div>
  </div>
</div>

<style lang="scss">
  @use "@/styles/colors";
  @use "@/styles/levels";
  @import "./talentStats.scss";

  .jobWrapper :global(svg) {
    width: 50px;
    height: 50px;
    background-color: colors.$BUTTON_ICON_TRANSPARENT;
    margin-right: 5px;
    padding: 2px;
    fill: colors.$BUTTON_ICON;
  }

  .detailedJobIcon :global(svg) {
    width: 40px;
    height: 40px;
    fill: colors.$WHITE;
    z-index: calc(levels.$LEVEL_UI + 1);
  }

  .stageManage :global(svg) {
    width: 20px;
    height: 20px;
    fill: colors.$WHITE;
  }
</style>

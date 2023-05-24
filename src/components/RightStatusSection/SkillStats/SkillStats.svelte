<script>
  import Css3Icon from "@/assets/Css3Icon.svelte";
  import Html5Icon from "@/assets/Html5Icon.svelte";
  import TypescriptIcon from "@/assets/TypescriptIcon.svelte";
  import SkillIcon from "./SkillIcon.svelte";
</script>

<div class="skillStatsWrapper">
  <div class="skillIconsWrapper">
    <SkillIcon skillLevel={7} backgroundColor="#3178C6">
      <TypescriptIcon />
    </SkillIcon>
    <SkillIcon skillLevel={8} backgroundColor="#E34F26">
      <Html5Icon />
    </SkillIcon>
    <SkillIcon skillLevel={9} backgroundColor="#1572B6">
      <Css3Icon />
    </SkillIcon>
  </div>
  <div class="skillInformationWrapper">
    <div class="skillRankWrapper">
      <span>RANK</span>
      <span>7</span>
    </div>
  </div>
</div>

<style lang="scss">
  @use "@/styles/colors";
  @use "@/styles/sizes";

  .skillStatsWrapper {
    width: 400px;
    filter: drop-shadow(0 0 2px colors.$BOX_SHADOW);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }

  .skillIconsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
  }

  .skillInformationWrapper {
    background-color: colors.$BG_UI;
    border-radius: 3px;
    width: 360px;
    height: 80px;
    margin-left: -270px;
    margin-top: 40px;
    padding: 10px 15px 0 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .skillRankWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      color: colors.$BUTTON_ICON_DIMMED;
      font-size: sizes.$FONT_ML;
    }

    span:last-child {
      color: colors.$WHITE;
      font-size: sizes.$FONT_L;
      margin-left: 5px;
    }
  }
</style>

<script lang="ts">
  import NavButtonSection from './NavButtonSection/NavButtonSection.svelte';
  import LeftStatusSection from './LeftStatusSection/LeftStatusSection.svelte';
  import RightStatusSection from './RightStatusSection/RightStatusSection.svelte';

  import type { GitHubData } from '@/types/GitHubData';

  import GitHubIcon from '@/assets/GitHubIcon.svelte';
  import operatorImg from '@/assets/images/operator.png';

  export let data: GitHubData;
</script>

<main class="statPageBackgroundWrapper">
  <NavButtonSection />
  <div class="groupIconWrapper">
    <GitHubIcon />
  </div>
  <img src={operatorImg} alt="operator" class="characterImage" />
  <LeftStatusSection />
  <RightStatusSection />
</main>

<style lang="scss">
  @use '@/styles/colors';
  @use '@/styles/levels';
  @use '@/styles/sizes';

  .statPageBackgroundWrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    box-shadow: inset colors.$BG_SHADOW;
    background: no-repeat url('@/assets/images/background.png');
    background-size: cover;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .groupIconWrapper {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 220px;
    height: 220px;
    z-index: levels.$LEVEL_GROUP_IMAGE;
  }

  .groupIconWrapper :global(svg) {
    width: 220px;
    height: 220px;
    fill: colors.$GROUP_ICON;
  }

  .characterImage {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    z-index: levels.$LEVEL_CHAR_IMAGE;
  }
</style>

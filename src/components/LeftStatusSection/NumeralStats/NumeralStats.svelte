<script>
  import { getContext } from 'svelte';

  import FastForwardIcon from '@/assets/FastForwardIcon.svelte';
  import StatChip from './StatChip.svelte';

  import PlusIcon from '@/assets/PlusIcon.svelte';
  import HourglassIcon from '@/assets/HourglassIcon.svelte';
  import SwordIcon from '@/assets/SwordIcon.svelte';
  import ShieldIcon from '@/assets/ShieldIcon.svelte';

  const { followers, following, publicGists, publicRepos } = getContext('leftStatusSectionData');
</script>

<div class="numeralStatsWrapper">
  <div class="numeralStatsTitle">
    <span>스탯</span>
    <FastForwardIcon />
  </div>
  <div class="statChipDivider">
    <StatChip value={followers} maxValue={500} hoverText="팔로워">
      <PlusIcon />
    </StatChip>
    <StatChip value={following} maxValue={500} hoverText="팔로잉">
      <HourglassIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={publicRepos} maxValue={1000} hoverText="공개 Repo">
      <SwordIcon />
    </StatChip>
    <StatChip value={publicGists} hoverText="공개 Gist">
      <ShieldIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={52} maxValue={1000} hoverText="방어력">
      <ShieldIcon />
    </StatChip>
    <StatChip value={2} hoverText="저지 가능 수">
      <ShieldIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={0} hoverText="마법 방어력">
      <ShieldIcon />
    </StatChip>
    <StatChip value="다소 느림" hoverText="재배치 시간">
      <SwordIcon />
    </StatChip>
  </div>
</div>

<style lang="scss">
  @use '@/styles/colors';
  @import './numeralStats.scss';

  .numeralStatsTitle :global(svg) {
    width: 10px;
    height: 10px;
    fill: colors.$BUTTON_ICON_DARK;
    margin-left: 5px;
  }
</style>

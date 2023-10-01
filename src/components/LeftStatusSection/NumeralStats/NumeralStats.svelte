<script>
  import { getContext } from 'svelte';

  import FastForwardIcon from '@/assets/FastForwardIcon.svelte';
  import StatChip from './StatChip.svelte';

  import PlusIcon from '@/assets/PlusIcon.svelte';
  import HourglassIcon from '@/assets/HourglassIcon.svelte';
  import SwordIcon from '@/assets/SwordIcon.svelte';
  import ShieldIcon from '@/assets/ShieldIcon.svelte';

  const { followers, following, publicGists, publicRepos, location, twitter, createdAt } =
    getContext('NumeralStatsData');
  $: dateFromCreated = Math.round((new Date().valueOf() - new Date(createdAt).valueOf()) / 1000 / 60 / 60 / 24);
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
    <StatChip value={twitter ? `@${twitter}` : '없음'} hoverText="트위터 계정">
      <ShieldIcon />
    </StatChip>
    <StatChip value={location} hoverText="위치">
      <ShieldIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={`${dateFromCreated} 일`} hoverText="계정 지속일">
      <ShieldIcon />
    </StatChip>
    <StatChip value="저녁형" hoverText="커밋 시간">
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

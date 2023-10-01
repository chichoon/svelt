<script>
  import { getContext } from 'svelte';

  import FastForwardIcon from '@/assets/FastForwardIcon.svelte';
  import StatChip from './StatChip.svelte';

  import FollowingIcon from '@/assets/FollowingIcon.svelte';
  import RepositoryIcon from '@/assets/RepositoryIcon.svelte';
  import GistIcon from '@/assets/GistIcon.svelte';
  import TwitterIcon from '@/assets/TwitterIcon.svelte';
  import LocationIcon from '@/assets/LocationIcon.svelte';
  import DateIcon from '@/assets/DateIcon.svelte';
  import TimeIcon from '@/assets/TimeIcon.svelte';

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
      <FollowingIcon />
    </StatChip>
    <StatChip value={following} maxValue={500} hoverText="팔로잉">
      <FollowingIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={publicRepos} maxValue={1000} hoverText="공개 Repo">
      <RepositoryIcon />
    </StatChip>
    <StatChip value={publicGists} hoverText="공개 Gist">
      <GistIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={twitter ? `@${twitter}` : '없음'} hoverText="트위터 계정">
      <TwitterIcon />
    </StatChip>
    <StatChip value={location} hoverText="위치">
      <LocationIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={`${dateFromCreated} 일`} hoverText="계정 지속일">
      <DateIcon />
    </StatChip>
    <StatChip value="저녁형" hoverText="커밋 시간">
      <TimeIcon />
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

<script>
  import FastForwardIcon from "@/assets/FastForwardIcon.svelte";
  import StatChip from "./StatChip.svelte";
  import PlusIcon from "@/assets/PlusIcon.svelte";
  import HourglassIcon from "@/assets/HourglassIcon.svelte";
  import SwordIcon from "@/assets/SwordIcon.svelte";
  import ShieldIcon from "@/assets/ShieldIcon.svelte";
</script>

<div class="numeralStatsWrapper">
  <div class="numeralStatsTitle">
    <span>스탯</span>
    <FastForwardIcon />
  </div>
  <div class="statChipDivider">
    <StatChip value={822} maxValue={5000} hoverText="체력">
      <PlusIcon />
    </StatChip>
    <StatChip value="느림" hoverText="체력">
      <HourglassIcon />
    </StatChip>
  </div>
  <div class="statChipDivider">
    <StatChip value={789} maxValue={2000} hoverText="공격력">
      <SwordIcon />
    </StatChip>
    <StatChip value={21} hoverText="코스트">
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
  @use "@/styles/colors";
  @import "./numeralStats.scss";

  .numeralStatsTitle :global(svg) {
    width: 10px;
    height: 10px;
    fill: colors.$BUTTON_ICON_DARK;
    margin-left: 5px;
  }
</style>

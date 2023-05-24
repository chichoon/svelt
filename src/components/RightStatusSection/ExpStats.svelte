<script>
  export let percentage = 40;
  export const degree = 360 - (percentage * 360) / 100;
  export const degreeStyle =
    degree <= 180
      ? `background-image: linear-gradient(${
          degree + 90
        }deg, transparent 50%, #ffde08 50%), linear-gradient(90deg, #ffde08 50%, transparent 50%)`
      : `background-image: linear-gradient(${
          degree - 90
        }deg, transparent 50%, #ffffffc0 50%), linear-gradient(90deg, #ffde08 50%, transparent 50%)`;
</script>

<div class="expStatsWrapper">
  <div class="levelCircle">
    <div class="levelGraph" style={degreeStyle} />
    <span>LV</span>
    <span>90</span>
  </div>
  <div class="expWrapper">
    <div class="expInnerRow">
      <div class="expBar">
        <span>EXP</span>
        <span>{percentage} / 100</span>
      </div>
      <div class="fillingBar" />
    </div>
    <span class="levelAmountLeft">/ 90</span>
  </div>
</div>

<style lang="scss">
  @import "./expStats.scss";
</style>

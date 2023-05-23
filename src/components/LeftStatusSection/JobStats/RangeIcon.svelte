<script>
</script>

<div class="rangeIconWrapper">
  <div style="grid-column: 2; grid-row: 1;" class="rangeIcon" />
  <div style="grid-column: 3; grid-row: 1;" class="rangeIcon" />
  <div style="grid-column: 4; grid-row: 1;" class="rangeIcon" />
  <div style="grid-column: 2; grid-row: 2;" class="rangeIcon" />
  <div style="grid-column: 3; grid-row: 2;" class="rangeIcon filled" />
  <div style="grid-column: 4; grid-row: 2;" class="rangeIcon" />
  <div style="grid-column: 2; grid-row: 3;" class="rangeIcon" />
  <div style="grid-column: 3; grid-row: 3;" class="rangeIcon" />
  <div style="grid-column: 4; grid-row: 3;" class="rangeIcon" />
</div>

<style lang="scss">
  @use "@/styles/colors";

  .rangeIconWrapper {
    display: grid;
    grid-template-columns: repeat(5, 10px);
    grid-template-rows: repeat(4, 10px);
    height: 40px;
    padding: 5px;
    gap: 0.5px;
  }

  .rangeIcon {
    background-color: none;
    border: 1px solid colors.$BUTTON_ICON_DIMMED;

    &.filled {
      background-color: colors.$BUTTON_ICON;
      border-color: colors.$BUTTON_ICON;
    }
  }
</style>

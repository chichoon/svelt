<script>
  import { getContext } from 'svelte';

  import Stars from './Stars.svelte';
  import TrustStat from './TrustStat.svelte';

  const { name, login } = getContext('NameAreaData');
</script>

<TrustStat trustPercentage={50} />
<Stars nOfStars={5} />
<h2 class="subName">{name}</h2>
<h1 class="name">{login}</h1>

<style lang="scss">
  @use '@/styles/colors';
  @use '@/styles/sizes';

  .name {
    font-size: sizes.$SIZE_NAME;
    color: colors.$WHITE;
    margin-bottom: 5px;
    filter: drop-shadow(0 0 2px colors.$BLACK);
    font-family: 'Nanum Myeongjo', serif;
  }

  .subName {
    font-size: sizes.$SIZE_SUBNAME;
    color: colors.$WHITE;
    font-weight: 700;
    filter: drop-shadow(0 0 2px colors.$BLACK);
  }
</style>

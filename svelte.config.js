import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    typescript: {
      tsconfigFile: './tsconfig.json',
    },
  }),
  // ...
};

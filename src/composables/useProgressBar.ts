import { inject } from 'vue';
import { useStore } from 'vuex';

export default function useProgressBar() {
  const store = useStore();
  const _m: any = inject('MutationTypes');

  const showProgressBar = (): void => {
    store.commit(_m.MutationTypes.SHOW_PROGRESS_BAR, true);
  };

  const resetProgressBar = (): void => {
    store.commit(_m.MutationTypes.SHOW_PROGRESS_BAR, false);
    store.commit(_m.MutationTypes.CHANGE_PROGRESS_BAR_PERCENT, '0%');
  };

  const setProgressBar = (): void => {
    showProgressBar();
    store.commit(_m.MutationTypes.CHANGE_PROGRESS_BAR_PERCENT, '100%');
    setTimeout(() => {
      resetProgressBar();
    }, 1000);
  };

  return {
    setProgressBar,
  };
}

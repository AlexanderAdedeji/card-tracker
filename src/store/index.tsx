import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create()(
  persist(
    devtools((...a) => ({})),
    {
      name: 'car-tracker-store',
    },
  ),
);

export default useStore;

import { createStore } from "solid-js/store";

export const MAX_CLICKS_PER_SECOND = 200;

export const [clicksStore, setClicksStore] = createStore({
  feedClicks: 0,
  mineClicks: 0,
  errorCount: 0,
});

export const addClickToStore = (clickType: "feedClicks" | "mineClicks") => {
  console.log("addClickToStore");
  setClicksStore((prev) => {
    return {
      [clickType]: prev[clickType] + 1,
    };
  });
};

export const addErrorToClicksStore = () => {
  setClicksStore((prev) => {
    return {
      errorCount: prev.errorCount + 1,
    };
  });
};

export const resetClicksStore = () => {
  setClicksStore(() => {
    return {
      feedClicks: 0,
      mineClicks: 0,
    };
  });
};

export const resetErrorCountClicksStore = () => {
  setClicksStore(() => {
    return {
      errorCount: 0,
    };
  });
};

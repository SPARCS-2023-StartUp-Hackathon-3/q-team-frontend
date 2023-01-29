import { atom } from "recoil";

export const isPlayingAtom = atom({
  key: "isPlaying",
  default: false,
});

export const playinMusiccAtom = atom({
  key: "playingMusic",
  default: { title: "" },
});

import { MobXProviderContext } from "mobx-react";
import { makeAutoObservable, toJS } from "mobx";
import { useContext } from "react";
import { Config } from "../components/types/types";
import { SceneState } from "./SceneState";

export const config: Config = {
  scenes: [
    {
      id: 1,
      dialogs: [
        {
          text: "Начало первой сцены. Первый диалог",
        },
        {
          text: "Второй диалог",
        },
        {
          text: "Третий диалог",
        },
      ],
      backgroundImg: "/src/img",
      music: "./music",
      link: [
        {
          text: "qasdf",
          choose: 2,
        },
        {
          text: "qasdf",
          choose: 2,
        },
      ],
    },
    {
      id: 2,
      dialogs: [
        {
          text: "Начало второй сцены. Четвертый диалог",
        },
        {
          text: "Пятый диалог",
        },
        {
          text: "Шестой диалог",
        },
      ],
      backgroundImg: "/src/img",
      music: "./music",
      link: [
        {
          text: "qasdf",
          choose: 2,
        },
        {
          text: "qasdf",
          choose: 2,
        },
      ],
    },
    {
      id: 3,
      dialogs: [
        {
          text: "Начало третьей сцены. Седьмой диалог",
        },
        {
          text: "Восьмой диалог",
        },
        {
          text: "Девятый диалог.Конец",
        },
      ],
      backgroundImg: "/src/img",
      music: "./music",
      link: [
        {
          text: "qasdf",
          choose: 2,
        },
        {
          text: "qasdf",
          choose: 2,
        },
      ],
    },
  ],
};

export class Store {
  currentSceneKey: number = 1;
  scenes: Map<number | string, SceneState> = new Map();
  get currentScene() {
    return this.scenes.get(this.currentSceneKey);
  }
  constructor(config: Config) {
    config.scenes.forEach((scene) =>
      this.scenes.set(scene.id, new SceneState(this, scene))
    );
    makeAutoObservable(this);
  }
  nextScene() {
    this.currentSceneKey += 1;
  }
  previousScene() {
    this.currentSceneKey -= 1;
  }
}

const store = new Store(config);
console.log(toJS(store));
export const useStore = () => useContext(MobXProviderContext);
export default store;


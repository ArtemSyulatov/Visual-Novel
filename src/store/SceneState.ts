import { Dialog, Link, Scene } from "./../components/types/types";
import { makeAutoObservable, toJS } from "mobx";
import { Store } from "./store";

export class SceneState {
  currenDialogKey: number = 0;
  id: number | string;
  dialogs: Dialog[];
  backgroundImg: string;
  music: string;
  link: Link[];
  store: Store;
  get currentDialog() {
    return this.dialogs[this.currenDialogKey];
  }
  constructor(
    store: Store,
    { id, dialogs, backgroundImg, music, link }: Scene
  ) {
    this.id = id;
    this.dialogs = dialogs;
    console.log(this.dialogs);
    this.backgroundImg = backgroundImg;
    this.music = music;
    this.link = link;
    this.store = store;
    makeAutoObservable(this);
  }
  nextDialog = () => { 
    if(!this.dialogs[this.currenDialogKey + 1]){ 
        this.store.nextScene()
        this.currenDialogKey = 0
        this.currentDialog
    }
    this.currenDialogKey += 1;
  };
}

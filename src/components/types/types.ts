
export interface Dialog {
  text: string;
}


export interface Scene {
  id: number | string;
  dialogs: Dialog[];
  backgroundImg: string;
  music: string;
  link: Link[];
}

export interface Link {
  text: string;
  choose: number;
}


export interface Config {
    scenes:Scene[] 
}

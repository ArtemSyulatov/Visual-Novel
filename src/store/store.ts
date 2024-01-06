import {MobXProviderContext} from "mobx-react";
import {makeAutoObservable} from "mobx";
import {useContext} from "react";


type Dialog = {
    text: string
}

type Obj = {
    [key: number]: {
        dialogs: Dialog[],
        backgroundImg: string,
        music: string
        link: Link[]
    }
}

type Link = {
    text: string,
    choose: number
}

const testObj: Obj = {
    1: {
        dialogs: [{
            text: 'dialog1'
        }, {
            text: 'dialog2'
        }, {
            text: 'dialog3'
        }],
        backgroundImg: '/src/img',
        music: './music',
        link: [{
            text: 'qasdf',
            choose: 2
        }, {
            text: 'qasdf',
            choose: 2
        },
        ]
    },
    2: {
        dialogs: [{
            text: 'dialog1'
        }, {
            text: 'dialog2'
        }, {
            text: 'dialog3'
        }],
        backgroundImg: '/src/img',
        music: './music',
        link: [{
            text: 'qasdf',
            choose: 2
        }, {
            text: 'qasdf',
            choose: 2
        },
        ]
    },
    3: {
        dialogs: [{
            text: 'dialog1'
        }, {
            text: 'dialog2'
        }, {
            text: 'dialog3'
        }],
        backgroundImg: '/src/img',
        music: './music',
        link: [{
            text: 'qasdf',
            choose: 2
        }, {
            text: 'qasdf',
            choose: 2
        },
        ]
    }
}


export class Store {
    private state: Obj;
    constructor() {
        this.state = testObj
        makeAutoObservable(this)
    }
}

const store = new Store();
export const useStore = () => useContext(MobXProviderContext);
export default store;

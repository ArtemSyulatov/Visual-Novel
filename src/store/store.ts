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
            text: 'Начало первой сцены. Первый диалог'
        }, {
            text: 'Второй диалог'
        }, {
            text: 'Третий диалог'
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
            text: 'Начало второй сцены. Четвертый диалог'
        }, {
            text: 'Пятый диалог'
        }, {
            text: 'Шестой диалог'
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
            text: 'Начало третьей сцены. Седьмой диалог'
        }, {
            text: 'Восьмой диалог'
        }, {
            text: 'Девятый диалог.Конец'
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
    4:{
        dialogs: [],
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

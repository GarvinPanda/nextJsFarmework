import UserStore from "./User";
import { makeAutoObservable } from "mobx";
import { useStaticRendering } from "mobx-react";

//全部的store配置
const TOTAL_STORES: ObjStore = {
    UserStore,
}

//判断服务端还是客户端
const isServer = typeof window === 'undefined';

//每一个store类型
// type StoreType = ReturnType<typeof makeAutoObservable>;

export type ObjStore = { [key: string]: any }

//服务端静态渲染
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

//创建引入的单元store
const craeteStore = (initState: ObjStore = {}): ObjStore => {

    let p: ObjStore = {};
    for (let it in TOTAL_STORES) {
        if (TOTAL_STORES.hasOwnProperty(it)) {
            // console.log("00",it,TOTAL_STORES[it])
            p[it] = TOTAL_STORES[it] || {}
        }
    }
    return { ...p };
};

//全局唯一实例store
let store: any = null;

//SSR 和 CSR 区别使用
export function initStore(initState: { [key: string]: any } = {}): ObjStore {

    // console.log("888",isServer)

    if (isServer) return craeteStore(initState);

    //客户端使用
    if (store === null) {
        store = craeteStore(initState);
    }
    return store;
}
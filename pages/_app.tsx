import '../styles/globals.css';
import App, { AppProps, AppContext } from 'next/app';
import { Provider } from "mobx-react";
import { initStore, ObjStore } from '../store/Index';

interface newAppProps extends AppProps {
    store: ObjStore
}

function MyApp(props: newAppProps): JSX.Element {

    const { Component, pageProps, store } = props;

    const isServer = typeof window === 'undefined';
    let stores = {};
    stores = isServer ? store : initStore(store);
    // console.log("77", props, pageProps)

    return (
        <Provider {...stores}>
            <Component {...pageProps} />
        </Provider>
    )
}


//注入数据
MyApp.getInitialProps = async (appContext: AppContext) => {

    const ctx: any = {} = appContext.ctx;
    ctx.store = initStore();
    const appProps = await App.getInitialProps(appContext);

    return {
        ...appProps,
        store: ctx.store
    }
}

export default MyApp;



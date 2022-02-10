import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import type { NextPage } from 'next'
import Image from 'next/image';
import styles from '../styles/pages/index.module.css';
import { useEffect } from 'react';
import { ObjStore } from '../store/Index';
import testImg from "../assets/test.png";
import { Button } from "antd";
import Router from "next/router";

//数据类型
type IndexProps = {
    UserStore: ObjStore
}

const Index: NextPage<IndexProps> = (props: IndexProps) => {


    // useEffect(() => {
    //     setTimeout(() => {
    //         props.UserStore.setName()
    //     }, 1000)

    // }, []);

    const onClickButton = () => {
        // Router.push('/home?id=1');
        Router.push({
            pathname: 'home',
            query: { id: 1 }
        })
    }

    return (
        <div className={styles.container}>
            {props.UserStore.name}
            <Image src={testImg}></Image>
            <Button type='primary' onClick={onClickButton}>button</Button>
            <div className={styles.img}></div>
        </div>
    )
}

export default inject("UserStore")(observer(Index))

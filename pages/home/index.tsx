import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import type { NextPage } from 'next'
import Image from 'next/image';
import styles from '@/styles/pages/index.module.css';
import testImg from "@/assets/test.png";

//数据类型
type IndexProps = {

}

const Index: NextPage<IndexProps> = (props: IndexProps) => {
    // console.log("78787",styles)

    return (
        <div className={styles.homeWrapper}>
            <Image src={testImg}></Image>
        </div>
    )
}

export default Index;

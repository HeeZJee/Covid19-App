import React from 'react'
import styles from './Footer.module.css'


function Footer() {
    return (
        <div className={styles.container}>
            <a href='http://heezjee.surge.sh/' target='_blank' rel="noopener noreferrer" >@HeeZHee </a>
            <span>Panacloud Bootcamp 2020</span>
        </div>
    )
}

export default Footer

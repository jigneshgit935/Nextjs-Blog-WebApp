import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          excepturi nesciunt ut eos quo ratione aliquam corrupti, ullam expedita
          autem commodi culpa voluptates rerum vel accusantium ea, nostrum
          numquam cum!
        </p>
        <Link className={styles.link} href={'/'}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

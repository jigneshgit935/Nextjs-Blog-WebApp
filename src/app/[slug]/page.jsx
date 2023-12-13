import React from 'react';
import styles from './singlePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comment from '@/components/comment/Comment';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              perspiciatis veniam cupiditate voluptate, atque necessitatibus
              reprehenderit aut officiis eaque numquam quasi provident deserunt
              corporis et. Ad, nisi! Aut facilis perferendis ullam nobis
              nesciunt rem distinctio.
            </p>
            <h1 className={''}>Lorem ipsum dolor, sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              perspiciatis veniam cupiditate voluptate, atque necessitatibus
              reprehenderit aut officiis eaque numquam quasi provident deserunt
              corporis et. Ad, nisi! Aut facilis perferendis ullam nobis
              nesciunt rem distinctio.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              perspiciatis veniam cupiditate voluptate, atque necessitatibus
              reprehenderit aut officiis eaque numquam quasi provident deserunt
              corporis et. Ad, nisi! Aut facilis perferendis ullam nobis
              nesciunt rem distinctio.
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

import React from 'react';
import styles from './comment.module.css';
import Link from 'next/link';
import Image from 'next/image';
const Comment = () => {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={'/login'}>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aut hic, doloremque atque sed quis quisquam sint soluta provident,
            repudiandae doloribus iste mollitia molestiae laborum perferendis
            vel, iusto commodi.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aut hic, doloremque atque sed quis quisquam sint soluta provident,
            repudiandae doloribus iste mollitia molestiae laborum perferendis
            vel, iusto commodi.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aut hic, doloremque atque sed quis quisquam sint soluta provident,
            repudiandae doloribus iste mollitia molestiae laborum perferendis
            vel, iusto commodi.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            aut hic, doloremque atque sed quis quisquam sint soluta provident,
            repudiandae doloribus iste mollitia molestiae laborum perferendis
            vel, iusto commodi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

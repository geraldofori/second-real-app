import styles from "./singlePost.module.css"
import Image from "next/image"

const SingleBlog = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/20074173/pexels-photo-20074173/free-photo-of-a-group-of-envelopes-with-the-word-love-on-them.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> Title</h1>
          <div className={styles.detail}>
            <Image src="https://images.pexels.com/photos/20074173/pexels-photo-20074173/free-photo-of-a-group-of-envelopes-with-the-word-love-on-them.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className={styles.avatar}/>
          </div>
          <div className={detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

      </div>
    );
  }
  
  export default SingleBlog;
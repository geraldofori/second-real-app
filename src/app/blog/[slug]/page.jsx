import styles from "./singlePost.module.css"
import Image from "next/image"

const SingleBlog = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="" alt="" className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar}/>
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
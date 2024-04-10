import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/20074173/pexels-photo-20074173/free-photo-of-a-group-of-envelopes-with-the-word-love-on-them.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={styles.imgContainer} fill/>
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}> title</h1>
            <p className={styles.desc}>Desc</p>
            <Link className={styles.link} href="/blog/post"> READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard;
import styles from './Article.module.css';

const Article = (props) => {
    const date = props.date ? props.date.replace('-', '.').replace('-', '.') : '';
    const url = props.imgUrl ? formatUrl(props.imgUrl) : '';
    const buttonStatus = props.buttonStatus ? props.buttonStatus : false;

    function formatUrl(url) {
        const fixedURL = 'https:' + url.split(':')[1];
        return fixedURL;
    }

    return (
        <article className={styles.article}>
            {url ?
                <img className={styles.image} src={url} alt={props.title + ' фото'} /> :
                <div className={styles.imageDefault} />
            }
            <div className={styles.info}>
                <div className={styles.infoGroup}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <div className={styles.date}>{date}</div>
                    <p className={styles.text}>{props.text}</p>
                </div>
                <div className={styles.author}>{props.author}</div>
            </div>
            <button className={buttonStatus ? `${styles.likeButton} ${styles.likeButtonPressed}` : styles.likeButton}></button>
        </article>
    )
}

export default Article;
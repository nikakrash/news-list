import { useState, useEffect } from 'react';
import Article from '../Article/Article';
import styles from './ArticleList.module.css';

const ArticleList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.list}>
            {data.map(item => (
                <Article
                    key={item.id}
                    imgUrl={item.imgUrl}
                    title={item.name}
                    date={item.date}
                    text={item.text}
                    author={item.author}
                    buttonStatus={item.voteStatus}
                />
            ))}
        </div>
    )
}

export default ArticleList;
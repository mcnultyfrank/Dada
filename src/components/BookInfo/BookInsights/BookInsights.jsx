import React, { useState, useEffect } from 'react';
import styles from './BookInsights.module.scss';
import { Link } from "@reach/router";
const BookInsights = (props) => {

    const [currentBook, setCurrentBook] = useState(0);

    const [currentInsight, setCurrentInsight] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCurrentBook(props.BookId)
    }, [props.BookId])

    useEffect(() => {
        setCurrentInsight(props.insightID);
    }, [props.insightID]);

    const nextInsight = () =>{ 
        if ( count < props.docs[currentBook].KeyInsights.length -1 ){
            return setCount(count + 1);
        } else {
            return (count)
        }
    }
  
    return (
        <>
        <header className={styles.smHeader}>
            <h1>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h1>
        </header>
        <div className={styles.pageContainer}>
            {/* <h2>{props.docs[currentBook].KeyInsights[currentInsight].insightTitle}</h2> */}
            <p>{props.docs[currentBook].KeyInsights[currentInsight].insightRead}</p>
            <div className={styles.btnContainer}>
            <Link to={`../../book-insight/${count}`}>
                <button className={styles.secondaryBtn} onClick={nextInsight}>Next Highlight</button>
                </Link>
                <Link to={`../../../${currentBook}`}>
                <button className={styles.secondaryBtn} >Book Info</button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default BookInsights;

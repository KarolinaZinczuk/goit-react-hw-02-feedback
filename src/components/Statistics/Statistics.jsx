import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import Notification from "components/Notification/Notification";

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <>
                <h2>Statistics</h2>
                {total === 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <ul className={styles.list}>
                        <li className={styles.item}>good: {good}</li>
                        <li className={styles.item}>neutral: {neutral}</li>
                        <li className={styles.item}>bad: {bad}</li>
                        <li className={styles.item}>total: {total}</li>
                        <li className={styles.item}>Positive feedback: {positivePercentage}%</li>
                    </ul>
                )}
            </>
        );
    }
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;
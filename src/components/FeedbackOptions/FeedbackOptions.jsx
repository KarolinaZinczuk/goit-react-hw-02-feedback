import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";


class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <div>
                {options.map(option => (
                    <button 
                        className={styles.button}
                        key={option}
                        type="button"
                        name={option}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>
                ))}

            </div>
        );
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
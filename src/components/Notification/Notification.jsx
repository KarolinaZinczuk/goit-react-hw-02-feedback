import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

class Notification extends Component {
    static propTypes = {
        message: PropTypes.string,    
    }
    
    render() {
        const { message } = this.props;
        return (
            <p className={styles.paragraph}>{message}</p>
        ); 
    }
}

export default Notification;
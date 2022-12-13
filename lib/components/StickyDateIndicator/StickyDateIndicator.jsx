import { differenceInDays } from 'date-fns';
import styles from './stickyDateIndicator.module.css';

function formatDate(date = new Date()) {
    if (date instanceof Date === false) {
        date = new Date(date);
     }

    return date.toLocaleDateString('no-NO', {
        year: differenceInDays(date, new Date()) > 365 ? 'numeric' : undefined,
        month: 'short',
        day: 'numeric'
    });
}

export const StickyDateIndicator = ({start = new Date(), end = new Date()}) => {
    const startDate = start && formatDate(start);
    const endDate = end && formatDate(end);

    return (
    <div className={styles.dateIndicator}>
        <span>{startDate}</span>
        {" - "}
        <span>{endDate}</span>
    </div>
    );
}


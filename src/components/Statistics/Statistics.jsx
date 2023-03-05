import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
     <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>)
}

const getRandomHexColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  )
};
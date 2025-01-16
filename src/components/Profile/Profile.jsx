import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={image} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;

// import PropTypes from "prop-types";

// const Profile = (props) => {
//   return (
//     <div>
//       <div>
//         <p>{name}</p>
//         <p>@{tag}</p>
//         <p>{location}</p>
//       </div>

//       <ul>
//         <li>
//           <span>{}</span>
//           <span>1000</span>
//         </li>
//         <li>
//           <span>Views</span>
//           <span>2000</span>
//         </li>
//         <li>
//           <span>Likes</span>
//           <span>3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default Profile;

import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friend}>
      <img src={avatar} alt="Avatar" width="50" />
      <p>{name}</p>
      <p
        className={styles.status}
        style={{ color: isOnline ? "green" : "red" }}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

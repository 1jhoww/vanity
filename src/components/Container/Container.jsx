import styles from "./Container.module.css";

function Container({ children, className = "", as: Tag = "div" }) {
  return <Tag className={`${styles.container} ${className}`}>{children}</Tag>;
}

export default Container;

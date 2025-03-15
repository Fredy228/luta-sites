import styles from "./container.module.scss";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

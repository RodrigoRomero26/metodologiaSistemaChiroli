import styles from "./Header.module.css";
export const Header = () => {
	return (
		<div className={styles.containerHeader}>
			<div className={styles.containerTitleHeader}>
				<h2>Aplicacion de tareas</h2>
			</div>
			<div className={styles.containerDateHeader}>
				<h3>{new Date().toLocaleDateString()}</h3>
			</div>
		</div>
	);
};

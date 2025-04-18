import { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    handleSubmit: (e: React.FormEvent) => void;
	buttonText: string;
	buttonActive: boolean;
};

export const Button: FC<ButtonProps> = ({
    handleSubmit,
	buttonText,
	buttonActive,
}) => {
	return (
		<button
			className={styles.button}
			onClick={handleSubmit}
			disabled={!buttonActive}>
			{buttonText}
		</button>
	);
};

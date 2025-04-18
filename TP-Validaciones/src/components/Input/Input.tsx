import { FC } from "react";
import styles from "./Input.module.css";

type InputProps = {
	Inputlabel: string;
	Inputname: string;
	Inputtype: string;
	Inputvalue: string;
	InputhandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	Inputerror: string | null;
};

export const Input: FC<InputProps> = ({
	Inputlabel,
	Inputname,
	Inputtype,
	Inputvalue,
	InputhandleChange,
	Inputerror,
}) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={Inputname}>{Inputlabel}</label>
			<input
				type={Inputtype}
				name={Inputname}
				value={Inputvalue}
				onChange={InputhandleChange}
			/>
			{Inputerror && <p className={styles.errorMessage}>{Inputerror}</p>}
		</div>
	);
};

"use client";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CategoryIcon } from "./CategoryIcon";

interface Props {
	name: string;
	children: JSX.Element[];
}

export const Category = ({ name, children }: Props) => {
	const [show, setShow] = useState(false);

	return (
		<>
			<h1 className="is-2 title is-flex is-align-content-center">
				<CategoryIcon name={name} />
				<button
					onClick={() => setShow(!show)}
					className="has-text-left is-flex is-align-items-center gap"
					style={{ color: "white" }}
					aria-expanded={show}
				>
					<FontAwesomeIcon
						icon={faAngleRight}
						style={{
							transform: show ? "rotateZ(90deg)" : "",
							transition: "transform 0.06s",
							marginLeft: "0.3rem",
							marginRight: "0.3rem",
						}}
					/>
					{name}
				</button>
			</h1>
			{show && <div className="content">{children}</div>}
		</>
	);
};

import React, { FC } from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => {
	return (
		<div className="footer-container">
			<p>2023 TheSneakerStore All rights reserverd</p>
			<p className="icons">
				<AiFillInstagram />
				<AiOutlineTwitter />
			</p>
		</div>
	);
};

export default Footer;

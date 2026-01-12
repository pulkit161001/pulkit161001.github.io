import React from "react";
import { BsTwitter, BsLinkedin, BsGithub, BsMailbox2 } from "react-icons/bs";
import {} from "react-icons/fa";
import { images } from "../constants";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a
				href="mailto:pulkit161001@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<BsMailbox2 />
			</a>
		</div>
		<div>
			<a
				href="https://twitter.com/pulkit161001"
				target="_blank"
				rel="noreferrer"
			>
				<BsTwitter />
			</a>
		</div>
		<div>
			<a
				href="https://www.linkedin.com/in/pulkit161001/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
		</div>
		<div>
			<a
				href="https://github.com/pulkit161001"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub />
			</a>
		</div>
	</div>
);

export default SocialMedia;

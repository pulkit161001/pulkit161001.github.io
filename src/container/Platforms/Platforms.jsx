import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Platforms.scss";
import { images } from "../../constants";

const platforms = [
	{
		title: "CodeForces",
		imgUrl: images.codeforces,
		link: "https://codeforces.com/profile/pulkit161001",
	},
	{
		title: "LeetCode",
		imgUrl: images.leetcode,
		link: "https://leetcode.com/pulkit161001/",
	},
	{
		title: "CodeChef",
		imgUrl: images.codechef,
		link: "https://www.codechef.com/users/pulkit161001",
	},

	{
		title: "GeeksForGeeks",
		imgUrl: images.geeksforgeeks,
		link: "https://auth.geeksforgeeks.org/user/pulkit161001/profile",
	},
	{
		title: "InterviewBit",
		imgUrl: images.interviewbit,
		link: "https://www.interviewbit.com/profile/pulkit161001",
	},

	{
		title: "HackerRank",
		imgUrl: images.hackerrank,
		link: "https://www.hackerrank.com/pulkit161001?hr_r=1",
	},
];

const Platforms = () => {
	return (
		<>
			<h2 className="head-text">
				<span>Coding</span> Profiles
			</h2>
			<div className="app__platforms">
				{platforms.map((platform, index) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__platform-item"
						key={index}
					>
						<a
							href={platform.link}
							target="_blank"
							rel="noreferrer"
						>
							<img src={platform.imgUrl} alt={platform.title} />
						</a>
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{platform.title}
						</h2>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Platforms, "app__platforms"),
	"platforms",
	"app__secondarybg"
);

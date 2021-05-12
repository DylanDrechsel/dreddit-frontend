import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const animation = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			delayChildren: 0.5,
		},
	},
	showTest: (i) => ({
		x: [i-100, i-2000],
        opacity: 1,
		transition: {
			duration: 2,
			staggerChildren: 0.5,
			delayChildren: 0.5,
		},
	}),
};

const Welcome = () => {
    const welcome = ['W', 'E', 'L', 'C', 'O', 'M', 'E']
    const spots = [1]
    let classname = 'Welcome'
    let count = 0

     const welcomeText = spots.map(() => {
				return (
					<motion.div
						variants={animation}
						/* initial='hidden' */ animate='showTest'>
						{welcome.map((letter, i) => {
                            classname = `Welcome${count}`
                            count += 1
							return (
								<motion.h1 className={classname} variants={animation} custom={i}>
									{letter}
								</motion.h1>
							);
						})}
					</motion.div>
				);
			});

    return (
        <div className="Welcome">
            {welcomeText}
        </div>
    );
};

export default Welcome;
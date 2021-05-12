import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const animation = {
	hidden: { opacity: 0 },
	show: {
        opacity: 1,
		transition: {
			duration: 2,
			staggerChildren: 0.3,
			delayChildren: 0.3,
		},
	},
};

const Welcome = () => {
    const welcome = ['W', 'E', 'L', 'C', 'O', 'M', 'e']
    const spots = [1]
    let classname = 'Welcome'
    let count = 0

    const animateW= useAnimation()
    const animateE= useAnimation()
    const animateL = useAnimation()
    const animateC = useAnimation()
    const animateO = useAnimation()
    const animateM = useAnimation()
    const animateFinalE = useAnimation()

    const sequenceW = async () => {
			await animateW.start({ x: '-30vw', transition: { duration: 2 }});
			return await animateW.start({ x: '80vw', transition: { delay: 0.8, type: "spring" } });
		};

    const sequenceE = async () => {
			await animateE.start({ x: '-33vw', transition: { duration: 1.85, delay: .1 } });
			return await animateE.start({ x: '75vw', transition: { delay: 0.75, type: "spring" } });
		};

    const sequenceL = async () => {
			await animateL.start({ x: '-36vw', transition: { duration: 1.7, delay: .2, stiffness: 2000 } });
			return await animateL.start({ x: '70vw', transition: { delay: 0.7, type: "spring" } });
		};

    const sequenceC = async () => {
			await animateC.start({ x: '-39vw', transition: { duration: 1.55, delay: .3 } });
			return await animateC.start({ x: '70vw', transition: { delay: 0.65, type: "spring" } });
		};

    const sequenceO = async () => {
			await animateO.start({ x: '-41vw', transition: { duration: 1.40, delay: .4 } });
			return await animateO.start({ x: '70vw', transition: { delay: 0.6, type: "spring" } });
		};

    const sequenceM = async () => {
			await animateM.start({ x: '-42.5vw', transition: { duration: 1.25, delay: .5 } });
			return await animateM.start({ x: '50vw', transition: { delay: .55, type: "spring" }});
		};

        const sequenceFinalE = async () => {
			await animateFinalE.start({ x: '-45.8vw', transition: { duration: 1.1, delay: .6 } });
			return await animateFinalE.start({ x: '50vw', transition: { delay: .5, type: "spring" }});
		};

    useEffect(() => {
        setTimeout(() => {
			sequenceW();
            sequenceE();
            sequenceL();
            sequenceC();
            sequenceO();
            sequenceM();
            sequenceFinalE();
        }, 3000)
		}, []);

     const welcomeText = spots.map(() => {
				return (
					<motion.div variants={animation} initial='hidden' animate='show' >
						{welcome.map((letter, i) => {
							classname = `Welcome${count}`;
							count += 1;
							return (
								<motion.h1 variants={animation} custom={i}>
									<motion.h1 className={classname} animate={letter == 'W' ? animateW : letter == 'E' ? animateE : letter == 'L' ? animateL : letter == 'C' ? animateC : letter == 'O' ? animateO : letter == 'M' ? animateM : letter == 'e' ? animateFinalE : null}>
										<b>{letter.toUpperCase()}</b>
									</motion.h1>
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
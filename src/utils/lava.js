import React from 'react';
import styled from 'styled-components';
import { color_subtle } from '../styles';

const LavaLamp = () => {
	return (
		<LavaContainer>
			<div className="lamp">
				<div className="lava">
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob"></div>
					<div className="blob top"></div>
					<div className="blob bottom"></div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="goo">
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="10"
							result="blur"
						/>
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
							result="goo"
						/>
						<feBlend in="SourceGraphic" in2="goo" />
					</filter>
				</defs>
			</svg>
		</LavaContainer>
	);
};

export default LavaLamp;

const LavaContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	.lamp {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: ${color_subtle};
		height: 100%;
		width: 100vw;
		min-width: 100vw;
		z-index: -1;
	}

	.lava {
		filter: url('#goo');
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
	}

	.blob {
		border-radius: 50%;
		background: rgb(255, 95, 109);
		position: absolute;
	}

	.blob.top {
		border-radius: 50%;
		width: 100%;
		height: 4%;
		top: -3%;
		left: 0;
		background: rgb(255, 95, 109);
		background: linear-gradient(
			90deg,
			rgba(255, 95, 109, 1) 80%,
			rgba(255, 195, 113, 1) 100%
		);
	}
	.blob.bottom {
		border-radius: 50%;
		width: 100%;
		height: 4%;
		bottom: -3%;
		left: 0;
		background: rgb(255, 95, 109);
		background: linear-gradient(
			90deg,
			rgba(255, 95, 109, 1) 80%,
			rgba(255, 195, 113, 1) 100%
		);
	}
	.blob:nth-child(1) {
		width: 200px;
		height: 200px;
		left: 35%;
		bottom: -15%;
/* 
		animation: wobble 4s ease-in-out alternate infinite,
			blob-one ease-in-out 13s infinite; */

		animation-name: wobble;
		animation-duration: 4s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-one;
		animation-duration: 13s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 4s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-one;
		-webkit-animation-duration: 13s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */

		/* -webkit-animation: wobble 4s ease-in-out alternate infinite,
			blob-one ease-in-out 13s infinite; */
	}

	.blob:nth-child(2) {
		width: 330px;
		height: 330px;
		right: 24%;
		bottom: -65%;

		animation-name: wobble;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-two;
		animation-duration: 22s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 5s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-two;
		-webkit-animation-duration: 22s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */

		/* animation: wobble 5s ease-in-out alternate infinite,
			blob-two ease-in-out 22s infinite;

		-webkit-animation: wobble 5s ease-in-out alternate infinite,
			blob-two ease-in-out 22s infinite; */
	}

	.blob:nth-child(3) {
		width: 150px;
		height: 150px;
		bottom: -15%;
		left: 34%;

		animation-name: wobble;
		animation-duration: 6s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-three;
		animation-duration: 16s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 6s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-three;
		-webkit-animation-duration: 16s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */

		/* animation: wobble 6s ease-in-out alternate infinite,
			blob-three ease-in-out 16s infinite;
		-webkit-animation: wobble 6s ease-in-out alternate infinite,
			blob-three ease-in-out 16s infinite; */
	}

	.blob:nth-child(4) {
		width: 235px;
		height: 235px;
		bottom: -19%;
		left: 30%;

		animation-name: wobble;
		animation-duration: 8s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-four;
		animation-duration: 12s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 8s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-four;
		-webkit-animation-duration: 12s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */

		/* animation: wobble 8s ease-in-out alternate infinite,
			blob-four ease-in-out 12s infinite;
		-webkit-animation: wobble 8s ease-in-out alternate infinite,
			blob-four ease-in-out 12s infinite; */
	}

	.blob:nth-child(5) {
		width: 55px;
		height: 55px;
		bottom: -25%;
		left: 34%;

		animation-name: wobble;
		animation-duration: 9s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-five;
		animation-duration: 32s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 9s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-five;
		-webkit-animation-duration: 32s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */
	}

		/* animation: wobble 9s ease-in-out alternate infinite,
			blob-five ease-in-out 32s infinite;

		-webkit-animation: wobble 9s ease-in-out alternate infinite,
			blob-five ease-in-out 32s infinite;
	} */
	.blob:nth-child(6) {
		width: 35px;
		height: 35px;
		bottom: -25%;
		right: 34%;
		animation-name: wobble;
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-six;
		animation-duration: 12s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 10s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-six;
		-webkit-animation-duration: 12s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */

		/* animation: wobble 10s ease-in-out alternate infinite,
			blob-six ease-in-out 12s infinite;
		-webkit-animation: wobble 10s ease-in-out alternate infinite,
			blob-six ease-in-out 12s infinite; */
	}
	.blob:nth-child(7) {
		width: 435px;
		height: 435px;
		bottom: -85%;
		right: 40%;

		animation-name: wobble;
		animation-duration: 11s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-direction: alternate;
		animation-delay: 0.1s;

		animation-name: blob-seven;
		animation-duration: 32s;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-delay: 0.1s;

		/* -webkit-animation-name: wobble;
		-webkit-animation-duration: 11s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-direction: alternate;
		-webkit-animation-delay: 0.1s;

		-webkit-animation-name: blob-seven;
		-webkit-animation-duration: 32s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease-in-out;
		-webkit-animation-delay: 0.1s; */

		/* animation: wobble 11s ease-in-out alternate infinite,
			blob-seven ease-in-out 32s infinite;
		-webkit-animation: wobble 11s ease-in-out alternate infinite,
			blob-seven ease-in-out 32s infinite; */
	}

	@keyframes blob-one {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-700%);
		}
		0% {
			transform: translatey(0);
		}
	}
	/* @-webkit-keyframes blob-one {
	
		100% {
			-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-700%);
		}
		0% {
			-webkit-transform: translatey(0);
		}
	} */

	@keyframes blob-two {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-420%);
		}
		0% {
			transform: translatey(0);
		}
	}
	/* @-webkit-keyframes blob-two {
		100% {
			-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-420%);
		}
		0% {
			transform: translatey(0);
		}
	} */

	@keyframes blob-three {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-305%);
		}
		0% {
			transform: translatey(0);
		}
	}

	/* @-webkit-keyframes blob-three {
		100% {
			-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-305%);
		}
		0% {
			-webkit-transform: translatey(0);
		}
	} */


	@keyframes blob-four {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-605%);
		}
		0% {
			transform: translatey(0);
		}
	}

	/* @-webkit-keyframes blob-four {
		100% {
			-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-605%);
		}
		0% {
			-webkit-transform: translatey(0);
		}
	} */


	@keyframes blob-five {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-700%);
		}
		0% {
			transform: translatey(0);
		}
	}

	/* @-webkit-keyframes blob-five {
		100% {
		-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-700%);
		}
		0% {
			-webkit-transform: translatey(0);
		}
	} */

	@keyframes blob-six {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-700%);
		}
		0% {
			transform: translatey(0);
		}
	}
	/* @-webkit-keyframes blob-six {
		100% {
			-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-700%);
		}
		0% {
			-webkit-transform: translatey(0);
		}
	} */

	@keyframes blob-seven {
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-300%);
		}
		0% {
			transform: translatey(0);
		}
	}

	/* @-webkit-keyframes blob-seven {
		100% {
			-webkit-transform: translatey(0);
		}
		50% {
			-webkit-transform: translatey(-300%);
		}
		0% {
			-webkit-transform: translatey(0);
		}
	
	} */

	@keyframes wobble {
		0%,
		50% {
			border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
		}
		100% {
			border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
		}
	}
	/* @-webkit-keyframes wobble {
		0%,
		50% {
			-webkit-border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
		}
		100% {
			border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
		}
	} */
`;

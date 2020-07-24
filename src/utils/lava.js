import React from 'react';
import styled from 'styled-components';

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
	height: 80%;
	.lamp {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

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
			rgba(255, 95, 109, 1) 66%,
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
			rgba(255, 95, 109, 1) 66%,
			rgba(255, 195, 113, 1) 100%
		);
	}
	.blob:nth-child(1) {
		width: 200px;
		height: 200px;
		left: 35%;
		bottom: -15%;

		animation: wobble 4s ease-in-out alternate infinite,
			blob-one ease-in-out 13s infinite;
	}
	.blob:nth-child(2) {
		width: 330px;
		height: 330px;
		right: 24%;
		bottom: -65%;

		animation: wobble 5s ease-in-out alternate infinite,
			blob-two ease-in-out 22s infinite;
	}
	.blob:nth-child(3) {
		width: 150px;
		height: 150px;
		bottom: -15%;
		left: 34%;

		animation: wobble 6s ease-in-out alternate infinite,
			blob-three ease-in-out 16s infinite;
	}

	.blob:nth-child(4) {
		width: 235px;
		height: 235px;
		bottom: -19%;
		left: 30%;
		animation: wobble 8s ease-in-out alternate infinite,
			blob-four ease-in-out 12s infinite;
	}
	.blob:nth-child(5) {
		width: 55px;
		height: 55px;
		bottom: -25%;
		left: 34%;

		animation: wobble 9s ease-in-out alternate infinite,
			blob-five ease-in-out 32s infinite;
	}
	.blob:nth-child(6) {
		width: 35px;
		height: 35px;
		bottom: -25%;
		right: 34%;

		animation: wobble 10s ease-in-out alternate infinite,
			blob-six ease-in-out 12s infinite;
	}
	.blob:nth-child(7) {
		width: 435px;
		height: 435px;
		bottom: -85%;
		right: 40%;

		animation: wobble 11s ease-in-out alternate infinite,
			blob-seven ease-in-out 32s infinite;
	}
	@keyframes blob-one {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-700%);
		}
	}

	@keyframes blob-two {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-420%);
		}
	}

	@keyframes blob-three {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-305%);
		}
	}
	@keyframes blob-four {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-605%);
		}
	}
	@keyframes blob-five {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-700%);
		}
	}
	@keyframes blob-six {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-700%);
		}
	}
	@keyframes blob-seven {
		0%,
		100% {
			transform: translatey(0);
		}
		50% {
			transform: translatey(-300%);
		}
	}

	@keyframes wobble {
		50% {
			border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
		}
		100% {
			border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
		}
	}
`;
'use client';
import { Container, Text, Button, Group } from '@mantine/core';
import classes from './page.module.css';
import React, { useCallback, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function Home() {
	const canvasStyles = {
		position: 'fixed',
		pointerEvents: 'none',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0
	};

	const options = {
		background: {
			color: '#fff'
		},
		fpsLimit: 60,
		particles: {
			color: {
				value: '#ddd'
			},
			links: {
				color: '#eee',
				distance: 150,
				enable: true,
				opacity: 0.5,
				width: 1
			},
			collisions: {
				enable: true
			},
			move: {
				direction: 'none',
				enable: true,
				outMode: 'bounce',
				random: false,
				speed: 2,
				straight: false
			},
			number: {
				density: {
					enable: true,
					value_area: 800
				},
				value: 80
			},
			opacity: {
				value: 0.5
			},
			shape: {
				type: 'circle'
			},
			size: {
				random: true,
				value: 5
			}
		}
	};

	const refAnimationInstance = useRef(null);

	const getInstance = useCallback((instance) => {
		refAnimationInstance.current = instance;
	}, []);

	const makeShot = useCallback((particleRatio, opts) => {
		refAnimationInstance.current &&
			refAnimationInstance.current({
				...opts,
				origin: { y: 1, x: 0.5 },
				particleCount: Math.floor(200 * particleRatio)
			});
	}, []);

	const fire = useCallback(() => {
		makeShot(0.25, {
			spread: 26,
			startVelocity: 55
		});

		makeShot(0.2, {
			spread: 60
		});

		makeShot(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 45
		});
	}, [makeShot]);

	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<>
			<div className={classes.wrapper}>
				<Particles id="tsparticles" init={particlesInit} options={options} />
				<Container size={700} className={classes.inner}>
					<h1 className={classes.title}>
						A simple,{' '}
						<Text component="span" variant="gradient" gradient={{ from: 'yellow', to: 'orange' }} inherit>
							fully programatic
						</Text>{' '}
						logging system.
					</h1>

					<Text className={classes.description} color="dimmed">
						Send your logs to the cloud with a drop in replacement to you existing logging methods.
					</Text>

					<Group className={classes.controls}>
						<Button onClick={fire} size="xl" className={classes.control} variant="gradient" gradient={{ from: 'yellow', to: 'orange' }}>
							Coming soon!
						</Button>
						<ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
					</Group>
				</Container>
			</div>
		</>
	);
}

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata = {
	title: 'My Mantine app',
	description: 'I have followed setup instructions carefully'
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider
					theme={{
						primaryColor: 'yellow',
						primaryShade: 9
					}}
				>
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata = {
	title: 'Beaver Logs - Coming Soon',
	description: 'Send logs to the cloud with a drop in replacement to you existing logging methods.'
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

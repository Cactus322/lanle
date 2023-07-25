import { StatusBar } from 'expo-status-bar'
import { Configuration, OpenAIApi } from 'openai'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

export default function App() {
	const apiKey = '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'

	const hoba = async () => {
		const configuration = new Configuration({
			apiKey: apiKey,
		})

		const openai = new OpenAIApi(configuration)

		const chatCompletion = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: 'Ты можешь перевести текст?' }],
		})
		console.log(chatCompletion.data.choices[0].message)
	}

	hoba()

	const { width, height } = useWindowDimensions();

	return (
		<>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})

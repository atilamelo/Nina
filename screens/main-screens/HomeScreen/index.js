/* Creator: Átila Melo
 * Data: 28/06/2023
 * Description: Home Screen that will show the registered dreams
 */

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DreamBox from '../../../components/DreamBox';
import { dreamsExample } from './data'; // Sample data moved to a separate file

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.content}>
				{/* List of dreams */}
				<View style={styles.dreamsList}>
					<FlatList
						data={dreamsExample}
						renderItem={({ item }) => <DreamBox item={item} />}
						keyExtractor={(item, index) => index.toString()}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		paddingTop: 40,
		flex: 1,
		backgroundColor: '#1A1F32',
	},
	content: {
		flex: 1,
	},
	dreamsList: {
		flex: 1,
	},
});

import './App.css';
import PersonNode from './data/PersonNode';
import PersonCard from './components/PersonCard.react';
import { useState } from 'react';

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'row',
		// border: '1px solid black',
	},
	row: {
		flexDirection: 'column',
	},
};
const rootPersonNode = PersonNode.generateDataIterative();

function App() {
	const [generationsToRender, setGenerationsToRender] = useState([]);
	function _onClickPersonCard(node) {
		const nextGeneration = [];
		for (let child of node.children) {
			nextGeneration.push(child);
		}
		setGenerationsToRender([...generationsToRender, nextGeneration]);
	}

	return (
		<div style={styles.root}>
			<PersonCard
				personNode={rootPersonNode}
				key={rootPersonNode.id}
				onClick={_onClickPersonCard}
			/>
			{generationsToRender.map((generation) => {
				if (generation.length < 1) {
					return null;
				}
				return (
					<div style={styles.row} key={generation[0].id + 'children'}>
						{generation.map((personNode) => {
							return (
								<PersonCard
									personNode={personNode}
									key={personNode.id}
									onClick={_onClickPersonCard}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default App;

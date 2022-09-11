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
PersonNode.logData(rootPersonNode);

function App() {
	const [generationsToRender, setGenerationsToRender] = useState([]);
	const [selectedAncestors, setSelectedAncestors] = useState([rootPersonNode]);

	function _onClickPersonCard(node) {
		const existingGenerations = generationsToRender;
		const nextGeneration = [];

		// if this node has no children, show a message
		if (node.children.length === 0) {
			alert('Node has no children, refresh to regenerate new data');
			return;
		}

		// de-render generations that aren't directly related to clicked node
		while (
			existingGenerations.length > 0 &&
			!existingGenerations[existingGenerations.length - 1].includes(node)
		) {
			existingGenerations.pop();
		}

		for (let child of node.children) {
			nextGeneration.push(child);
		}
		setSelectedAncestors(node.getAncestors());
		setGenerationsToRender([...existingGenerations, nextGeneration]);
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
									isSelected={selectedAncestors.includes(personNode)}
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

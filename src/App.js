import logo from './logo.svg';
import './App.css';
import PersonNode from './data/PersonNode';
import PersonCard from './components/PersonCard.react';

function App() {
	let rootPersonNode = PersonNode.generateData();
	// PersonNode.logData(rootPersonNode);

	const cardList = [];

	function genComponentList(node) {
		cardList.push(<PersonCard personNode={node} key={node.id} />);
		for (let child of node.children) {
			genComponentList(child);
		}
	}
	genComponentList(rootPersonNode);
	return <>{cardList}</>;
}

export default App;

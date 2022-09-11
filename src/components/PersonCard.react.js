import React from 'react';

const styles = {
	card: {
		border: '1px solid black',
	},
	button: {
		borderRadius: 25,
		width: 50,
		height: 50,
	},
	selected: {
		backgroundColor: '#DEA440',
		opacity: 0.5,
	},
};
const PersonCard = (props) => {
	const { personNode, onClick, isSelected } = props;
	return (
		<div
			style={
				isSelected ? { ...styles.selected, ...styles.card } : { ...styles.card }
			}
		>
			<button
				style={styles.button}
				onClick={() => {
					onClick(personNode);
				}}
			>
				Show
			</button>
			<ul>
				<li>Id: {personNode.id}</li>
				<li>Name: {personNode.attributes.name}</li>
				<li>Color: {personNode.attributes.color.colorName}</li>
				<li>Generation: {personNode.attributes.generation}</li>
				<li>ParentId: {personNode.parent?.id}</li>
			</ul>
		</div>
	);
};

export default PersonCard;

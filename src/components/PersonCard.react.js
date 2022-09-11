import React from 'react';

const styles = {
	card: {
		border: '1px solid black',
	},
	button: {
		borderRadius: 25,
		width: 50,
		height: 50,
		backgroundColor: 'green',
	},
};
const PersonCard = (props) => {
	const { personNode, onClick } = props;
	return (
		<div style={styles.card}>
			<div
				style={styles.button}
				onClick={() => {
					onClick(personNode);
				}}
			/>
			<ul>
				<li>Id: {personNode.id}</li>
				<li>Name: {personNode.attributes.name}</li>
				<li>Color: {personNode.attributes.color.colorName}</li>
				<li>Generation: {personNode.attributes.generation}</li>
				<li>ParentId: {personNode.parentId}</li>
			</ul>
		</div>
	);
};

export default PersonCard;

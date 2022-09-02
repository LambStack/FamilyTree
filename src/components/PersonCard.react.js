import React from 'react';

const styles = {
	card: {
		border: '1px solid black',
	},
};
const PersonCard = (props) => {
	const { personNode } = props;
	return (
		<div style={styles.card}>
			<ul>
				<li>Id: {personNode.id}</li>
				<li>Name: {personNode.attributes.name}</li>
				<li>Color: {personNode.attributes.color.colorName}</li>
				<li>ParentId: {personNode.parentId}</li>
			</ul>
		</div>
	);
};

export default PersonCard;

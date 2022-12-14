import { genUUID, genName, genColor } from './randomDataUtils';
export default class PersonNode {
	static generateDataIterative() {
		const MAX_CHILDREN = 3;
		const MAX_NODES = 30000;

		let nodeCount = 1; // start at 1 because we pre-make the root

		// make first ancestor
		const rootAncestor = new PersonNode(null, {
			name: genName(),
			color: genColor(),
			generation: 0,
		});

		const nodesNeedChildren = [rootAncestor];

		while (nodesNeedChildren.length > 0 && nodeCount < MAX_NODES) {
			const node = nodesNeedChildren.shift();

			// add a random number of children
			const numChildren = Math.floor(Math.random() * MAX_CHILDREN);

			for (let i = 0; i < numChildren; i++) {
				const newChild = new PersonNode(node, {
					name: genName(),
					color: genColor(),
					generation: node.attributes.generation + 1,
				});
				nodeCount++;
				node.addChild(newChild);
			}

			nodesNeedChildren.push(...node.children);
		}

		return rootAncestor;
	}

	// static generateData() {
	// 	const MAX_DEPTH = 10;
	// 	const MAX_CHILDREN = 10;
	// 	const MAX_NODES = 30000;

	// 	let nodeCount = 0;
	// 	// make first ancestor
	// 	const rootAncestor = new PersonNode(null, {
	// 		name: genName(),
	// 		color: genColor(),
	// 		generation: 0,
	// 	});

	// 	function populateChildData(node) {
	// 		nodeCount++;
	// 		if (nodeCount > MAX_NODES) {
	// 			return;
	// 		}
	// 		if (node.attributes.generation > MAX_DEPTH) {
	// 			return;
	// 		}

	// 		const numChildren = Math.ceil(Math.random() * MAX_CHILDREN) + 1;
	// 		for (let i = 0; i < numChildren; i++) {
	// 			const newChild = new PersonNode(node.id, {
	// 				name: genName(),
	// 				color: genColor(),
	// 				generation: node.attributes.generation + 1,
	// 			});
	// 			node.addChild(newChild);
	// 		}

	// 		for (let child of node.children) {
	// 			populateChildData(child);
	// 		}
	// 	}

	// 	populateChildData(rootAncestor);
	// 	console.log(nodeCount);
	// 	return rootAncestor;
	// }

	static logData(rootNode) {
		let totalNodes = 0;
		function printNode(node) {
			// console.log(node);
			totalNodes++;
			for (let child of node.children) {
				printNode(child);
			}
		}
		printNode(rootNode);
		console.log('total nodes: ', totalNodes);
	}

	constructor(parent, attributes = {}, children = []) {
		this.id = genUUID();
		this.parent = parent;
		this.children = children;
		this.attributes = attributes;
	}

	addChild(child) {
		if (child instanceof PersonNode) {
			this.children.push(child);
		} else {
			throw new Error('child must be an instance of PersonNode: ', child);
		}
	}

	addAttributes(attributes) {
		this.attributes = { ...this.attributes, ...attributes };
	}

	getAncestors() {
		const ancestors = [];
		let node = this;
		while (node != null) {
			ancestors.push(node);
			node = node.parent;
		}
		return ancestors;
	}
}

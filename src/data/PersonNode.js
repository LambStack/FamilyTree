import { genUUID, genName, genColor } from './randomDataUtils';
export default class PersonNode {
	static generateData() {
		const MAX_DEPTH = 10;
		const MAX_CHILDREN = 10;
		let nodeCount = 0;
		// make first ancestor
		const rootAncestor = new PersonNode(null, {
			name: genName(),
			color: genColor(),
		});

		function populateChildData(node, depth = 0) {
			nodeCount++;
			if (depth++ > MAX_DEPTH) {
				return;
			}

			const numChildren = Math.ceil(Math.random() * MAX_CHILDREN);
			for (let i = 0; i < numChildren; i++) {
				const newChild = new PersonNode(node.id, {
					name: genName(),
					color: genColor(),
					generation: depth,
				});
				node.addChild(newChild);
			}

			for (let child of node.children) {
				populateChildData(child, depth);
			}
		}

		populateChildData(rootAncestor);
		console.log(nodeCount);
		return rootAncestor;
	}

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

	constructor(parentId, attributes = {}, children = []) {
		this.id = genUUID();
		this.parentId = parentId;
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
}

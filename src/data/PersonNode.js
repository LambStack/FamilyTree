import { genUUID, genName, genColor } from './randomDataUtils';
export default class PersonNode {
	static generateData() {
		const DEPTH = 1000;
		const MAX_CHILDREN = 40;
		// make first ancestor
		const rootAncestor = new PersonNode(null, {
			name: genName(),
			color: genColor(),
		});
		let recentAncestor = rootAncestor;

		for (let j = 0; j < DEPTH; j++) {
			const numChildren = Math.ceil(Math.random() * MAX_CHILDREN);
			for (let i = 0; i <= numChildren; i++) {
				const newChild = new PersonNode(recentAncestor.id, {
					name: genName(),
					color: genColor(),
				});
				recentAncestor.addChild(newChild);
			}
			recentAncestor = recentAncestor.children[numChildren];
		}

		return rootAncestor;
	}

	static logData(rootNode) {
		let totalNodes = 0;
		function printNode(node) {
			console.log(node);
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

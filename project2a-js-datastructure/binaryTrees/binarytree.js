

function BST(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

BST.prototype.insert = function(value) {
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BST(value);
		} else {
			this.left.insert(value);
		}
		return;
	}
	if (!this.right) {
		this.right = new BST(value);
	} else {
		this.right.insert(value);
	}
}

BST.prototype.inOrderPrint = function() {
	if (this.left != null) {
		this.left.inOrderPrint();
	}
	console.log(this.value);
	if (this.right != null) {
		this.right.inOrderPrint();
	}	
}

BST.prototype.preOrderPrint = function() {
	console.log(this.value);
	if (this.left != null) {
		this.left.preOrderPrint();
	}
	if (this.right != null) {
		this.right.preOrderPrint();
	}	
}


BST.prototype.postOrderPrint = function() {
	if (this.left != null) {
		this.left.postOrderPrint();
	}
	if (this.right != null) {
		this.right.postOrderPrint();
	}	
	console.log(this.value);

}

BST.prototype.find = function(value) {
	if (this.value == value) {
		return true;
	}
	if (this.left != null && value < this.value) {
		return this.left.find(value);
	}
	if (this.right != null) {
		return this.right.find(value);
	}
	return false;
}


var root = new BST(23);
root.insert(45);
root.insert(16);
root.insert(37);
root.insert(3);
root.insert(99);
root.insert(22);
console.log("inorder traversal --")
root.inOrderPrint();
console.log("preOrder traversal --")
root.preOrderPrint();
console.log("postOrder traversal --")
root.postOrderPrint();

//
console.log(root.find(3));
console.log(root.find(4));

console.log(root.find(37));
console.log(root.find(38));

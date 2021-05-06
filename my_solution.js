class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

function insertIntoBST(root, val) {
    if(!root) return new TreeNode(val)
    
    let curr = root
    if(val < root.value) root.left = insertIntoBST(root.left, val)
    if(val > root.value) root.right = insertIntoBST(root.right, val)
    
    
    return root
}

// Test Cases
var tree1 = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))
console.log(arrayifyTree(insertIntoBST(tree1, 7))) // [6, 3, 8, 2, 4, 7]
console.log(arrayifyTree(insertIntoBST(tree1, 5))) // [6, 3, 8, 2, 4, 7, 5]
console.log(arrayifyTree(insertIntoBST(tree1, 1))) // [6, 3, 8, 2, 4, 7, 1, 5]
console.log(arrayifyTree(insertIntoBST(null, 1))) // [1]

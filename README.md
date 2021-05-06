# insert_into_BST

### Problem
Javascript
```
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
    // Write your code here.
    return new TreeNode()
}

// Test Cases
var tree1 = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))
console.log(arrayifyTree(insertIntoBST(tree1, 7))) // [6, 3, 8, 2, 4, 7]
console.log(arrayifyTree(insertIntoBST(tree1, 5))) // [6, 3, 8, 2, 4, 7, 5]
console.log(arrayifyTree(insertIntoBST(tree1, 1))) // [6, 3, 8, 2, 4, 7, 1, 5]
console.log(arrayifyTree(insertIntoBST(null, 1))) // [1]
```

Python
```
class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right

def arrayifyTree(root: TreeNode):
    if root is None:
        return []
    queue = []
    array = []
    queue.append(root)
    while (len(queue) != 0):
        node = queue.pop(0)
        array.append(node.value)
        if (node.left):
            queue.append(node.left)
        if (node.right):
            queue.append(node.right)
    return array

def insertIntoBST(root: TreeNode, val: int) -> TreeNode:
    # Write your code here.
    pass    

# Test Cases
tree1 = TreeNode(6, TreeNode(3, TreeNode(2), TreeNode(4)), TreeNode(8))
print(arrayifyTree(insertIntoBST(tree1, 7))) # [6, 3, 8, 2, 4, 7]
print(arrayifyTree(insertIntoBST(tree1, 5))) # [6, 3, 8, 2, 4, 7, 5]
print(arrayifyTree(insertIntoBST(tree1, 1))) # [6, 3, 8, 2, 4, 7, 1, 5]
print(arrayifyTree(insertIntoBST(None, 1))) # [1]
```

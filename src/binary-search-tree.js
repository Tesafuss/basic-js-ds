const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.base = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    return this.base;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    const node = new Node(data);

    if (!this.base) {
      this.base = node;
      return;
    }

    let current = this.base;

    if (data === current.data) {
      return current;
    }

    while (current) {
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }

        current = current.right;
      }
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    let currentNode = this.base;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    let currentNode = this.base;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return null;
  }

  remove(data) {
    this.base = removeElem(this.base, data);

    function removeElem(current, data) {
      if (!current) {
        return null;
      }

      if (data > node.data) {
        node.right = removeElem(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeElem(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeElem(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!this.base) {
      return null;
    }

    let minNode = this.base;
    while(minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!this.base) {
      return null;
    }

    let maxNode = this.base;
    while(maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}


module.exports = {
  BinarySearchTree,
};

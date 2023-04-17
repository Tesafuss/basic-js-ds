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

    let current = this.base;

    while (current) {
      if (current.data === data) {
        return true;
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    let current = this.base;

    while (current) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return null;
  }

  remove(data) {

    let node = this.base; //
    this.base = removeElem(this.base, data);

    function removeElem(node, data) {
      if (!node) {
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

    let min = this.base;
    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!this.base) {
      return null;
    }

    let max = this.base;
    while(max.right) {
      max = max.right;
    }

    return max.data;
  }
}


module.exports = {
  BinarySearchTree,
};

// Node.prototype.getLevel = function () {
//
// };
//
// function Node (data,left,right,level,show) {
//     this.data = data;
//     this.left = left ;
//     this.right = right;
//     this.level = level;
//     this.show = show;
//
// }
//
// function showColor () {
//
// }
//
//
// function buildTree (nodeList) {
//     var nodeList = nodeList || [1,2,3,4,5,6];
//     for (var i = 0; i < nodeList.length; i++) {
//         if (i === 0) {
//             var tree = new Node(nodeList[0],null,null,1,showColor);
//         } else {
//             insertNode(tree,nodeList[i]);
//         }
//
//     }
//
// }
// function insertNode (Tree ,nodeData) {
//     var pre = null,
//         now = null,
//         right = null,
//         left = null;
//     var newNode = new Node (nodeData,null,null,null,showColor);
//     if(Tree == null) {
//         Tree = newNode;
//         return tree;
//     } else {
//         now = tree;
//         while(now) {
//             if(now.data === nodeData) {
//                 throw "有冲突";
//                 return false;
//             } else if(nodeData < now.data) {
//                 pre = now;
//                 now = now.left;
//             } else {
//                 pre = now ;
//                 now = now.right;
//             }
//         }
//         if(nodeData < pre.data) {
//             pre.left = newNode;
//         } else {
//             pre.right = newNode;
//         }
//         return true;
//     }
// }
(function() {
	var level = [];
	document.getElementById("DLR").addEventListener("click", function(e) {
		toggleButton(true);
		DLR(document.getElementById("root"));
		showColor(level)
	})
	document.getElementById("LDR").addEventListener("click", function() {
		toggleButton(true);
		LDR(document.getElementById("root"));
		showColor(level);
	})
	document.getElementById("LRD").addEventListener("click", function() {
		toggleButton(true);
		LRD(document.getElementById("root"));
		showColor(level);
	})

	function DLR(node) {
		try {
			if (node) {
				level.push(node);
				DLR(node.firstElementChild);
				DLR(node.lastElementChild);
			}
		} catch (e) {
			//TODO handle the exception
			throw e;
		}

	}

	function LDR(node) {

		try {
			if (node) {
				LDR(node.firstElementChild);
				level.push(node);
				LDR(node.lastElementChild);
			}
		} catch (e) {
			//TODO handle the exception
			throw "节点错误";
		}
	}

	function LRD　(node) {
		try {
			if (node) {
				LRD(node.firstElementChild);
				LRD(node.lastElementChild);
				level.push(node);
			}
		} catch (e) {
			//TODO handle the exception
			throw "节点错误";
		}
	}

	function showColor(queue) {
		var now = null;
		if (queue) {
			now = queue.shift();
			if (now) {
				now.style.backgroundColor = 'pink';
				setTimeout(function() {
					now.style.backgroundColor = "#ffffff";
					showColor(queue);
				}, 500)
			} else {
				toggleButton(false);
			}


		} else {
			
			return true;
		}


	}

	function toggleButton(value) {
		if (value == true) {
			for (var i = 0; i < 3; i++) {
				document.getElementsByTagName("button")[i].setAttribute("disabled", "disabled");

			}
		} else {
			for (var i = 0; i < 3; i++) {
				document.getElementsByTagName("button")[i].removeAttribute("disabled");

			}
		}

	}
})()
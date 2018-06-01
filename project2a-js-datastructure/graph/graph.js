

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		//this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	//this.bfs = bfs;
	this.markFalse = markFalse;
}

function markFalse() {
	this.marked = [];
	for (var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
	}

}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	for (var i = 0; i < this.vertices; i++) {
		console.log(i + " -> ");
		for (var j = 0; j < this.vertices; j++) {
		    if (this.adj[i][j] != undefined) {
			console.log(this.adj[i][j] + "");
		    }
	    }
	}
}

function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined) {
		console.log("visited vertex: " + v);
	}
	var w = "";
	for(w in this.adj[v]) {
		if (!this.marked[w]) {
			this.dfs(w);
		}
	}
}

// function bfs() {
// 	var queue = [];
// 	this.marked[s] = true;
// 	queue.push(s);
// 	while (queue.length > 0) {
// 		var v = queue.shift();  // remove the item from front of the queue
// 		if (v == undefined) {
// 			console.log("Visited Vertex " + v);
// 		}
// 	}
// }


//-------------
var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

g.markFalse();
g.dfs(0);




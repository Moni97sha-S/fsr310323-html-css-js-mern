// Q-1 Which of the following statements for a simple graph is correct?

// A) Every path is a trail
// B) Every trail is a path
// C) Every trail is a path as well as every path is a trail
// D) None of the mentioned

// Res: A) Every path is a trail
// Reason: Path means if the vertices in a walk are distinct, then the walk; Trail means if the edges in a walk are distinct, then the walk. A trail is an open walk (start & end vertex are NOT same means distinct) in which all edges are distinct(no edges are repeated but vertices can be repeated]). A path is a trail in which all vertices (and therefore also all edges) are distinct; walk with no repeated vertex. A circuit is a closed trail. A cycle means closed walk & closed path, Vertex not repeated & Edge not repeated.

// Q-2 What is the maximum number of possible non zero values in an adjacency matrix of a simple graph with n vertices?

// A) (n*(n-1))/2
// B) (n*(n+1))/2
// C) n*(n-1)
// D) n*(n+1)

// Res: C) n*(n-1)
// Reason: Out of (n * n) possible values for a simple graph, the diagonal values will always be zero. For eg., 4X4 matrices where 4 vertices in which total 16 values but 4*(4-1) => 4*3 => 12; 16-12=4; 4 values will be zero in diagonal-wise. So rest 12 will have max no.of possible non-zero values.

// Q-3 Which of the following is an advantage of adjacency list representation over adjacency matrix representation of a graph?

// A) In adjacency list representation, space is saved for sparse graphs.
// B) DFS and BSF can be done in O(V + E) time for adjacency list representation. These operations take O(V^2) time in adjacency matrix representation. Here is V and E are number of vertices and edges respectively.
// C) Adding a vertex in adjacency list representation is easier than adjacency matrix representation.
// D) All of the above

// Res: D) All of the above
// Reason: An array of lists is used. The size of the array is equal to the number of vertices. Let the array be an array[]. An entry array[i] represents the list of vertices adjacent to the ith vertex. This representation can also be used to represent a weighted graph. The weights of edges can be represented as lists of pairs. Advantages of Adjacency List Representation over Adjacency Matrix Representation Adjacency list and adjacency matrix are two common ways to represent a graph. Both have their own advantages and disadvantages. However, when it comes to saving space and time complexity, adjacency list representation wins over adjacency matrix representation. Here are some advantages of adjacency list representation over adjacency matrix representation: 1. Space Efficiency: - In adjacency list representation, space is saved for sparse graphs. - Sparse graphs have fewer edges and more disconnected vertices. - Adjacency list representation only stores the connected vertices for each vertex, so it saves space for disconnected vertices. - As a result, adjacency list representation requires less space than adjacency matrix representation for sparse graphs. 2. Time Efficiency: - DFS and BSF can be done in O(V+E) time for adjacency list representation. - These operations take O(V^2) time in adjacency matrix representation. - Here, V and E are the number of vertices and edges respectively. - Adjacency list representation is faster than adjacency matrix representation for large graphs with many vertices and fewer edges. 3. Easy to Add/Delete Vertices: - Adding a vertex in adjacency list representation is easier than adjacency matrix representation. - In adjacency matrix representation, adding a vertex requires adding a new row and column to the matrix, which is time-consuming. - In adjacency list representation, adding a vertex only requires adding a new node to the linked list, which is easier and faster. Conclusion: In conclusion, adjacency list representation is more space-efficient, time-efficient and easier to add/delete vertices than adjacency matrix representation. Therefore, adjacency list representation is preferred for sparse graphs and large graphs with fewer edges. By EduRev

// Q-4 On which of the following statements does the time complexity of checking if an edge exists between two particular vertices is not, depends?

// A) Depends on the number of edges
// B) Depends on the number of vertices
// C) Is independent of both the number of edges and vertices
// D) It depends on both the number of edges and vertices

// Res: C) Is independent of both the number of edges and vertices
// Reason: To check if there is an edge between two vertices i and j, it is enough to see if the value of A[i][j] is 1 or 0, here A is the adjacency matrix.

// Q-5 What is the maximum number of edges in a bipartite graph having 10 vertices?

// A) 24
// B) 21
// C) 25
// D) 16

// Res: C) 25
// Reason: If there is any bipartite graph that has the n number of vertices, then that graph contains at most (1/4)*n^2 number of edges. In the bipartite graph, maximum possible number of edges on 'n' vertices is equal to the (1/4)*n^2. 10^2/4 => 100/4 => 25 max no.of edges on '10' vertices using FORMULA: (1/4)*n^2; Input: When N = 10; Output: 25. Both the sets will contain 5 vertices and every vertex of first set will have an edge to every other vertex of the second set i.e. total edges = 5 * 5 = 25. 2nd Input: N = 9 => Output: 5*4=20 max no of edges.

// https://opendsa-server.cs.vt.edu/ODSA/Books/CS3/html/Glossary.html#term-adt

export default [
  {
    word: "abstract data type",
    trans: "抽象数据类型（ADT）",
    enTrans: "ADT",
    examples: [
      {
        en: "In computer science, an abstract data type (ADT) is a mathematical model for data types.",
        zh: "在计算机科学中，抽象数据类型(ADT)是数据类型的数学模型。",
      },
    ],
  },
  {
    word: "accepting state",
    trans: "接收状态(这里特指有限状态机的一种状态)",
    enTrans: "Part of the definition of a finite automata",
    examples: [
      {
        en: "A DFA has a start state (denoted graphically by an arrow coming in from nowhere) where computations begin, and a set of accept states (denoted graphically by a double circle) which help define when a computation is successful.",
        zh: "DFA有一个开始状态(用一个箭头表示)，用于计算开始，还有一组接受状态(用一个双环表示)，用于定义计算何时成功。",
      },
    ],
  },
  {
    word: "activation record",
    trans: "接收状态(这里特指有限状态机的一种状态)",
    enTrans:
      "The entity that is stored on the runtime stack during program execution. It stores any active local variable and the return address from which a new subroutine is being called, so that this information can be recovered when the subroutine terminates.",
    examples: [
      {
        en: "The activation stack is where the run time environment of the program keeps track of all the functions that have been called.",
        zh: "激活堆栈是程序的运行时间环境记录所有被调用的函数的地方。",
      },
    ],
  },
  {
    word: "acyclic graph",
    trans: "无环图",
    examples: [
      {
        en: "The directed acyclic graph (DAG) is applied to the parallel multiprocessor system to present the dependence relationship between tasks.",
        zh: "在并行多处理器系统中，通常用有向无环图（DAG）表示任务之间的依赖关系",
      },
    ],
    enTrans: "In graph terminology, a graph that contains no cycles.",
  },
  {
    word: "adjacency list",
    enTrans:
      "An implementation for a graph that uses an (array-based) list to represent the vertices of the graph, and each vertex is in turn represented by a (linked) list of the vertices that are neighbors.",
    trans: "邻接表",
    examples: [
      {
        en: "Master graph adjacency list of definitions and applications, able to skillfully use the adjacency list.",
        zh: "掌握图的邻接表的定义及应用，能够熟练使用邻接表。",
      },
    ],
  },
  {
    word: "adjacency matrix",
    enTrans:
      "An implementation for a graph that uses a 2-dimensional array where each row and each column corresponds to a vertex in the graph. A given row and column in the matrix corresponds to an edge from the vertex corresponding to the row to the vertex corresponding to the column.",
    trans: "邻接矩阵；相邻矩阵；邻接行列",
    examples: [{}],
  },

  {
    word: "ADT",
    enTrans: "Abbreviation for abstract data type.",
    trans: "抽象数据类型",
  },
  {
    word: "adversary",
    enTrans:
      "A fictional construct introduced for use in an adversary argument.",
    trans: "",
  },
  {
    word: "aggregate type",
    enTrans:
      "A data type whose members have subparts. For example, a typical database record. Another term for this is composite type.",
    trans: "聚合类型",
  },
  {
    word: "algorithm",
    enTrans: "A method or a process followed to solve a problem.",
    trans: "算法，运算法则",
  },

  {
    word: "alias",
    enTrans:
      "Another name for something. In programming, this usually refers to two references that refer to the same object.",
    trans: "别名",
  },
  {
    word: "all-pairs shortest paths problem",
    enTrans:
      "Given a graph with weights or distances on the edges, find the shortest paths between every pair of vertices in the graph. One approach to solving this problem is Floyd’s algorithm, which uses the dynamic programming algorithmic technique.",
    trans: "全源最短路径问题",
  },
  {
    word: "allocation",
    enTrans: "Reserving memory for an object in the Heap memory.",
    trans: "",
  },
  {
    word: "alphabet",
    enTrans:
      "The characters or symbols that strings in a given language may be composed of.",
  },
  {
    word: "alphabet trie",
    enTrans:
      "A trie data structure for storing variable-length strings. Level \ni\ni\n of the tree corresponds to the letter in position \ni\ni\n of the string. The root will have potential branches on each intial letter of string. Thus, all strings starting with “a” will be stored in the “a” branch of the tree. At the second level, such strings will be separated by branching on the second letter.",
  },
  {
    word: "amortized analysis",
    enTrans:
      "An algorithm analysis techique that looks at the total cost for a series of operations and amortizes this total cost over the full series. This is as opposed to considering every individual operation to independently have the worst case cost, which might lead to an overestimate for the total cost of the series.",
  },
  {
    word: "amortized cost",
    enTrans:
      "The total cost for a series of operations to be used in an amortized analysis.",
  },
  {
    word: "ancestor",
    enTrans:
      "In a tree, for a given node \nA\nA\n, any node on a path from \nA\nA\n up to the root is an ancestor of \nA\nA\n.",
  },
  {
    word: "antisymmetric",
    enTrans:
      "In set notation, relation \nR\nR\n is antisymmetric if whenever \naRb\naRb\n and \nbRa\nbRa\n, then \na=b\na=b\n, for all \na,b∈S\na,b∈S\n.",
  },
  {
    word: "approximation algorithm",
    enTrans:
      "An algorthm for an optimization problem that finds a good, but not necessarily cheapest, solution.",
  },
  {
    word: "arm",
    enTrans:
      "In the context of an I/O head, this attaches the sensor on the I/O head to the boom.",
  },
  {
    word: "array",
    enTrans:
      "A data type that is used to store elements in consecutive memory locations and refers to them by an index.",
  },
  {
    word: "array-based list",
    enTrans:
      "An implementation for the list ADT that uses an array to store the list elements. Typical implementations fix the array size at creation of the list, and the overhead is the number of array positions that are presently unused.",
  },
  {
    word: "array-based queue",
    enTrans:
      "Analogous to an array-based list, this uses an array to store the elements when implementing the queue ADT.",
  },
  {
    word: "array-based stack",
    enTrans:
      "Analogous to an array-based list, this uses an array to store the elements when implementing the stack ADT.",
  },
  {
    word: "ASCII character coding",
    enTrans:
      "American Standard Code for Information Interchange. A commonly used method for encoding characters using a binary code. Standard ASCII uses an 8-bit code to represent upper and lower case letters, digits, some punctuation, and some number of non-printing characters (such as carrage return). Now largely replaced by UTF-8 encoding.",
  },
  {
    word: "assembly code",
    enTrans:
      "A form of intermediate code created by a compiler that is easy to convert into the final form that the computer can execute. An assembly language is typically a direct mapping of one or a few instructions that the CPU can execute into a mnemonic form that is relatively easy for a human to read.",
  },
  {
    word: "asymptotic algorithm analysis",
    enTrans: "A more formal term for asymptotic analysis.",
  },
  {
    word: "asymptotic analysis",
    enTrans:
      "A method for estimating the efficiency of an algorithm or computer program by identifying its growth rate. Asymptotic analysis also gives a way to define the inherent difficulty of a problem. We frequently use the term algorithm analysis to mean the same thing.",
  },
  {
    word: "attribute",
    enTrans: "In object-oriented programming, a synonym for data members.",
  },
  {
    word: "automata",
    enTrans: "Synonym for finite state machine.",
  },
  {
    word: "automatic variable",
    enTrans:
      "A synonym for local variable. When program flow enters and leaves the variable’s scope, automatic variables will be allocated and de-allocated automatically.",
  },
  {
    word: "average case",
    enTrans:
      "In algorithm analysis, the average of the costs for all problem instances of a given input size \nn\nn\n. If not all problem instances have equal probability of occurring, then average case must be calculated using a weighted average.",
  },
  {
    word: "average seek time",
    enTrans:
      "Expected (average) time to perform a seek operation on a disk drive, assuming that the seek is between two randomly selected tracks. This is one of two metrics commonly provided by disk drive vendors for disk drive performance, with the other being track-to-track seek time.",
  },
  {
    word: "AVL Tree",
    enTrans:
      "A variant implementation for the BST, which differs from the standard BST in that it uses modified insert and remove methods in order to keep the tree balanced. Similar to a Splay Tree in that it uses the concept of rotations in the insert and remove operations.",
  },
  {
    word: "B-tree",
    enTrans:
      "A method for indexing a large collection of records. A B-tree is a balanced tree that typically has high branching factor (commonly as much as 100 children per internal node), causing the tree to be very shallow. When stored on disk, the node size is selected to be same as the desired unit of I/O (so some multiple of the disk sector size). This makes it easy to gain access to the record associated with a given search key stored in the tree with few disk accesses. The most commonly implemented variant of the B-tree is the B\n+\n+\n-tree.",
  },
  {
    word: "backing storage",
    enTrans:
      "In the context of a caching system or buffer pool, backing storage is the relatively large but slower source of data that needs to be cached. For example, in a virtual memory, the disk drive would be the backing storage. In the context of a web browser, the Internet might be considered the backing storage.",
  },
  {
    word: "backtracking",
    enTrans:
      "A heuristic for brute-force search of a solution space. It is essentially a depth-first search of the solution space. This can be improved using a branch-and-bounds algorithm.",
  },
  {
    word: "bad reference",
    enTrans:
      "A reference is referred to as a bad reference if it is allocated but not initialized.",
  },
  {
    word: "bag",
    enTrans:
      "In set notation, a bag is a collection of elements with no order (like a set), but which allows for duplicate-valued elements (unlike a set).",
  },
  {
    word: "balanced tree",
    enTrans:
      "A tree where the subtrees meet some criteria for being balanced. Two possibilities are that the tree is height balanced, or that the tree has a roughly equal number of nodes in each subtree.",
  },
  {
    word: "base",
    enTrans: "Synonym for radix.",
  },
  {
    word: "base case",
    enTrans:
      "In recursion or proof by induction, the base case is the termination condition. This is a simple input or value that can be solved (or proved in the case of induction) without resorting to a recursive call (or the induction hypothesis).",
  },
  {
    word: "base class",
    enTrans:
      "In object-oriented programming, a class from which another class inherits. The class that inherits is called a subclass.",
  },
  {
    word: "base type",
    enTrans:
      "The data type for the elements in a set. For example, the set might consist of the integer values 3, 5, and 7. In this example, the base type is integers.",
  },
  {
    word: "basic operation",
    enTrans:
      "Examples of basic operations include inserting a data item into the data structure, deleting a data item from the data structure, and finding a specified data item.",
  },
  {
    word: "best case",
    enTrans:
      "In algorithm analysis, the problem instance from among all problem instances for a given input size \nn\nn\n that has least cost. Note that the best case is not when \nn\nn\n is small, since we are referring to the best from a class of inputs (i.e, we want the best of those inputs of size \nn\nn\n).",
  },
  {
    word: "best fit",
    enTrans:
      "In a memory manager, best fit is a heuristic for deciding which free block to use when allocating memory from a memory pool. Best fit will always allocate from the smallest free block that is large enough to service the memory request. The rationale is that this will be the method that best preserves large blocks needed for unusually large requests. The disadvantage is that it tends to cause external fragmentation in the form of small, unuseable memory blocks.",
  },
  {
    word: "BFS",
    enTrans: "Abbreviation for breadth-first search.",
  },
  {
    word: "big-Oh notation",
    enTrans:
      "In algorithm analysis, a shorthand notation for describing the upper bound for an algorithm or problem.",
  },
  {
    word: "binary insert sort",
    enTrans:
      "A variation on insertion sort where the position of the value being inserted is located by binary search, and then put into place. In normal usage this is not an improvement on standard insertion sort because of the expense of moving many items in the array. But it is directly useful if the cost of comparison is high compared to that of moving an element, or is theoretically useful if we only care to count the cost of comparisons.",
  },
  {
    word: "binary relation",
    enTrans:
      "In set theory, a relation defined by a collection of binary tuples.",
  },
  {
    word: "binary search",
    enTrans:
      "A standard recursive algorithm for finding the record with a given search key value within a sorted list. It runs in \nO(logn)\nO(log⁡n)\n time. At each step, look at the middle of the current sublist, and throw away the half of the records whose keys are either too small or too large.",
  },
  {
    word: "binary search tree",
    enTrans:
      "A binary tree that imposes the following constraint on its node values: The search key value for any node \nA\nA\n must be greater than the (key) values for all nodes in the left subtree of \nA\nA\n, and less than the key values for all nodes in the right subtree of \nA\nA\n. Some convention must be adopted if multiple nodes with the same key value are permitted, typically these are required to be in the right subtree.",
  },
  {
    word: "binary search tree property",
    enTrans:
      "The defining relationship between the key values for nodes in a BST. All nodes stored in the left subtree of a node whose key value is \nK\nK\n have key values less than or equal to \nK\nK\n. All nodes stored in the right subtree of a node whose key value is \nK\nK\n have key values greater than \nK\nK\n.",
  },
  {
    word: "binary tree",
    enTrans:
      "A finite set of nodes which is either empty, or else has a root node together two binary trees, called the left and right subtrees, which are disjoint from each other and from the root.",
  },
  {
    word: "binary trie",
    enTrans:
      "A binary tree whose structure is that of a trie. Generally this is an implementation for a search tree. This means that the search key values are thought of a binary digits, with the digit in the position corresponding to this a node’s level in the tree indicating a left branch if it is “0”, or a right branch if it is “1”. Examples include the Huffman coding tree and the Bintree.",
  },
  {
    word: "binning",
    enTrans:
      "In hashing, binning is a type of hash function. Say we are given keys in the range 0 to 999, and have a hash table of size 10. In this case, a possible hash function might simply divide the key value by 100. Thus, all keys in the range 0 to 99 would hash to slot 0, keys 100 to 199 would hash to slot 1, and so on. In other words, this hash function “bins” the first 100 keys to the first slot, the next 100 keys to the second slot, and so on. This approach tends to make the hash function dependent on the distribution of the high-order bits of the keys.",
  },
  {
    word: "Binsort",
    enTrans:
      "A sort that works by taking each record and placing it into a bin based on its value. The bins are then gathered up in order to sort the list. It is generally not practical in this form, but it is the conceptual underpinning of the radix sort.",
  },
  {
    word: "bintree",
    enTrans:
      "A spatial data structure in the form of binary trie, typically used to store point data in two or more dimensions. Similar to a PR quadtree except that at each level, it splits one dimension in half. Since many leaf nodes of the PR quadtree will contain no data points, implementation often makes use of the flyweight design pattern.",
  },
  {
    word: "bitmap",
  },
  {
    word: "bit vector",
    enTrans:
      "An array that stores a single bit at each position. Typically these bits represent Boolean variables associated with a collection of objects, such that the \ni\ni\n th bit is the Boolean value for the \ni\ni\n th object.",
  },
  {
    word: "block",
    enTrans:
      "A unit of storage, usually referring to storage on a disk drive or other peripheral storage device. A block is the basic unit of I/O for that device.",
  },
  {
    word: "Boolean expression",
    enTrans:
      "A Boolean expression is comprised of Boolean variables combined using the operators AND (\n⋅\n⋅\n), OR (\n+\n+\n), and NOT (to negate Boolean variable \nx\nx\n we write \nx\n⎯\n⎯\n⎯\nx¯\n).",
  },
  {
    word: "Boolean variable",
    enTrans: "A variable that takes on one of the two values True and False.",
  },
  {
    word: "boom",
    enTrans:
      "In the context of an I/O head, is the central structure to which all of the I/O heads are attached. Thus, the all move together during a seek operation.",
  },
  {
    word: "bounding box",
    enTrans:
      "A box (usually aligned to the coordinate axes of the reference system) that contains a (potentially complex) object. In graphics and computational geometry, complex objects might be associated with a bounding box for use by algorithms that search for objects in a particular location. The idea is that if the bounding box is not within the area of interest, then neither is the object. Checking the bounding box is cheaper than checking the object, but it does require some time. So if enough objects are not outside the area of interest, this approach will not save time. But if most objects are outside of the area of interest, then checking bounding boxes first can save a lot of time.",
  },
  {
    word: "branch-and-bounds algorithm",
    enTrans:
      "A variation on backtracking that applies to optimization problems. We traverse the solution tree as with backtracking. Proceeding deeper in the solution tree generally requires additional cost. We remember the best-cost solution found so far. If the cost of the current branch in the tree exceeds the best tour cost found so far, then we know to stop pursuing this branch of the tree. At this point we can immediately back up and take another branch.",
  },
  {
    word: "breadth-first search",
    enTrans:
      "A graph traversal algorithm. As the name implies, all immediate neighbors for a node are visited before any more-distant nodes are visited. BFS is driven by a queue. A start vertex is placed on the queue. Then, until the queue is empty, a node is taken off the queue, visited, and and then any unvisited neighbors are placed onto the queue.",
  },
  {
    word: "break-even point",
    enTrans:
      "The point at which two costs become even when measured as the function of some variable. In particular, used to compare the space requirements of two implementations. For example, when comparing the space requirements of an array-based list implementation versus a linked list implementation, the key issue is how full the list is compared to its capacity limit (for the array-based list). The point where the two representations would have the same space cost is the break-even point. As the list becomes more full beyond this point, the array-based list implementation becomes more space efficent, while as the list becomes less full below this point, the linked list implementation becomes more space efficient.",
  },
  {
    word: "BST",
    enTrans: "Abbreviation for binary search tree.",
  },
  {
    word: "bubble sort",
    enTrans:
      "A simple sort that requires \nTheta(\nn\n2\n)\nTheta(n2)\n time in best, average, and worst cases. Even an optimized version will normally run slower than insertion sort, so it has little to recommend it.",
  },
  {
    word: "bucket",
    enTrans:
      "In bucket hashing, a bucket is a sequence of slots in the hash table that are grouped together.",
  },
  {
    word: "bucket hashing",
    enTrans:
      "A method of hashing where multiple slots of the hash table are grouped together to form a bucket. The hash function then either hashes to some bucket, or else it hashes to a home slot in the normal way, but this home slot is part of some bucket. Collision resolution is handled first by attempting to find a free position within the same bucket as the home slot. If the bucket if full, then the record is placed in an overflow bucket.",
  },
  {
    word: "bucket sort",
    enTrans:
      "A variation on the Binsort, where each bin is associated with a range of key values. This will require some method of sorting the records placed into each bin.",
  },
  {
    word: "buddy method",
    enTrans:
      "In a memory manager, an alternative to using a free block list and a sequential fit method to seach for a suitable free block to service a memory request. Instead, the memory pool is broken down as needed into smaller chunks by splitting it in half repeatedly until the smallest power of 2 that is as big or bigger than the size of the memory request is reached. The name comes from the fact that the binary representation for the start of the block positions only differ by one bit for adjacent blocks of the same size. These are referred to as “buddies” and will be merged together if both are free.",
  },
  {
    word: "buffer",
    enTrans:
      "A block of memory, most often in primary storage. The size of a buffer is typically one or a multiple of the basic unit of I/O that is read or written on each access to secondary storage such as a disk drive.",
  },
  {
    word: "buffer passing",
    enTrans:
      "An approach to implementing the ADT for a buffer pool, where a pointer to a buffer is passed between the client and the buffer pool. This is in contrast to a message passing approach, it is most likely to be used for long messages or when the message size is always the same as the buffer size, such as when implementing a B-tree.",
  },
  {
    word: "buffer pool",
    enTrans:
      "A collection of one or more buffers. The buffer pool is an example of a cache. It is stored in primary storage, and holds data that is expected to be used in the near future. When a data value is requested, the buffer pool is searched first. If the value is found in the buffer pool, then secondary storage need not be accessed. If the value is not found in the buffer pool, then it must be fetched from secondary storage. A number of traditional heuristics have been developed for deciding which data to flush from the buffer pool when new data must be stored, such as least recently used.",
  },
  {
    word: "buffering",
    enTrans:
      "A synonym for caching. More specifically, it refers to an arrangement where all accesses to data (such as on a peripheral storage device) must be done in multiples of some minimum unit of storage. On a disk drive, this basic or smallest unit of I/O is a sector. It is called “buffering” because the block of data returned by such an access is stored in a buffer.",
  },
  {
    word: "caching",
    enTrans:
      "The concept of keeping selected data in main memory. The goal is to have in main memory the data values that are most likely to be used in the near future. An example of a caching technique is the use of a buffer pool.",
  },
  {
    word: "call stack",
    enTrans:
      "Known also as execution stack. A stack that stores the function call sequence and the return address for each function.",
  },
  {
    word: "Cartesian product",
    enTrans: "For sets, this is another name for the set product.",
  },
  {
    word: "ceiling",
    enTrans:
      "Written \n⌈x⌉\n⌈x⌉\n, for real value \nx\nx\n the ceiling is the least integer \n≥x\n≥x\n.",
  },
  {
    word: "child",
    enTrans:
      "In a tree, the set of nodes directly pointed to by a node \nR\nR\n are the children of \nR\nR\n.",
  },
  {
    word: "circular first fit",
    enTrans:
      "In a memory manager, circular first fit is a heuristic for deciding which free block to use when allocating memory from a memory pool. Circular first fit is a minor modification on first fit memory allocation, where the last free block allocated from is remembered, and search for the next suitable free block picks up from there. Like first fit, it has the advantage that it is typically not necessary to look at all free blocks on the free block list to find a suitable free block. And it has the advantage over first fit that it spreads out memory allocations evenly across the free block list. This might help to minimize external fragmentation.",
  },
  {
    word: "circular list",
    enTrans:
      "A list ADT implementation variant where the last element of the list provides access to the first element of the list.",
  },
  {
    word: "class",
    enTrans:
      "In the object-oriented programming paradigm an ADT and its implementation together make up a class. An instantiation of a class within a program is termed an object.",
  },
  {
    word: "class hierarchy",
    enTrans:
      "In object-oriented programming, a set of classes and their interrelationships. One of the classes is the base class, and the others are subclasses that inherit either directly or indirectly from the base class.",
  },
  {
    word: "clause",
    enTrans:
      "In a Boolean expression, a clause is one or more literals OR’ed together.",
  },
  {
    word: "client",
    enTrans:
      "The user of a service. For example, the object or part of the program that calls a memory manager class is the client of that memory manager. Likewise the class or code that calls a buffer pool.",
  },
  {
    word: "clique",
    enTrans:
      "In graph terminology, a clique is a subgraph, defined as any subset \nU\nU\n of the graph’s vertices such that every vertex in \nU\nU\n has an edge to every other vertex in \nU\nU\n. The size of the clique is the number of vertices in the clique.",
  },
  {
    word: "closed",
    enTrans:
      "A set is closed over a (binary) operation if, whenever the operation is applied to two members of the set, the result is a member of the set.",
  },
  {
    word: "closed hash system",
    enTrans:
      "A hash system where all records are stored in slots of the hash table. This is in contrast to an open hash system.",
  },
  {
    word: "closed-form solution",
    enTrans:
      "An algebraic equation with the same value as a summation or recurrence relation. The process of replacing the summation or recurrence with its closed-form solution is known as solving the summation or recurrence.",
  },
  {
    word: "cluster",
    enTrans:
      "In file processing, a collection of physically adjacent sectors that define the smallest allowed allocation unit of space to a disk file. The idea of requiring space to be allocated in multiples of sectors is that this will reduce the number of extents required to store the file, which reduces the expected number of seek operations reuquired to process a series of disk accesses to the file. The disadvantage of large cluster size is that it increases internal fragmentation since any space not actually used by the file in the last cluster is wasted.",
  },
  {
    word: "code generation",
    enTrans:
      "A phase in a compiler that transforms intermediate code into the final executable form of the code. More generally, this can refer to the process of turning a parse tree (that determines the correctness of the structure of the program) into actual instructions that the computer can execute.",
  },
  {
    word: "code optimization",
    enTrans:
      "A phase in a compiler that makes changes in the code (typically assembly code) with the goal of replacing it with a version of the code that will run faster while performing the same computation.",
  },
  {
    word: "cohesion",
    enTrans:
      "In object-oriented programming, a term that refers to the degree to which a class has a single well-defined role or responsibility.",
  },
  {
    word: "Collatz sequence",
    enTrans:
      "For a given integer value \nn\nn\n, the sequence of numbers that derives from performing the following computatin on \nn\nn\n\nwhile (n > 1)\n  if (ODD(n))\n    n = 3 * n + 1;\n  else\n    n = n / 2;\n\n\nThis is famous because, while it terminates for any value of \nn\nn\n that you try, it has never been proven to be a fact that this always terminates.",
  },
  {
    word: "collision",
    enTrans:
      "In a hash system, this refers to the case where two search keys are mapped by the hash function to the same slot in the hash table. This can happen on insertion or search when another record has already been hashed to that slot. In this case, a closed hash system will require a process known as collision resolution to find the location of the desired record.",
  },
  {
    word: "collision resolution",
    enTrans: "The outcome of a collision resolution policy.",
  },
  {
    word: "collision resolution policy",
    enTrans:
      "In hashing, the process of resolving a collision. Specifically in a closed hash system, this is the process of finding the proper position in a hash table that contains the desired record if the hash function did not return the correct position for that record due to a collision with another record.",
  },
  {
    word: "comparator",
    enTrans:
      "A function given as a parameter to a method of a library (or alternatively, a parameter for a C++ template or a Java generic). The comparator function concept provides a generic way encapulates the process of performing a comparison between two objects of a specific type. For example, if we want to write a generic sorting routine, that can handle any record type, we can require that the user of the sorting routine pass in a comparator function to define how records in the collection are to be compared.",
  },
  {
    word: "comparison",
    enTrans:
      "The act of comparing two keys or records. For many data types, a comparison has constant time cost. The number of comparisons required is often used as a measure of cost for sorting and searching algorithms.",
  },
  {
    word: "compile-time polymorphism",
    enTrans:
      "A form of polymorphism known as Overloading. Overloaded methods have the same names, but different signatures as a method available elsewhere in the class. Compare to run-time polymorphism.",
  },
  {
    word: "compiler",
    enTrans:
      "A computer program that reads computer programs and converts them into a form that can be directly excecuted by some form of computer. The major phases in a compiler include lexical analysis, syntax analysis, intermediate code generation, code optimization, and code generation. More broadly, a compiler can be viewed as parsing the program to verify that it is syntactically correct, and then doing code generation to convert the hig-level program into something that the computer can execute.",
  },
  {
    word: "complete binary tree",
    enTrans:
      "A binary tree where the nodes are filled in row by row, with the bottom row filled in left to right. Due to this requirement, there is only one tree of \nn\nn\n nodes for any value of \nn\nn\n. Since storing the records in an array in row order leads to a simple mapping from a node’s position in the array to its parent, siblings, and children, the array representation is most commonly used to implement the complete binary tree. The heap data structure is a complete binary tree with partial ordering constraints on the node values.",
  },
  {
    word: "complete graph",
    enTrans: "A graph where every vertex connects to every other vertex.",
  },
  {
    word: "complex number",
    enTrans:
      "In mathematics, an imaginary number, that is, a number with a real component and an imaginary component.",
  },
  {
    word: "Composite design pattern",
    enTrans:
      "Given a class hierarchy representing a set of objects, and a container for a collection of objects, the composite design pattern addresses the relationship between the object hierarchy and a bunch of behaviors on the objects. In the composite design, each object is required to implement the collection of behaviors. This is in contrast to the procedural approach where a behavior (such as a tree traversal) is implemented as a method on the object collection (such as a tree). Procedural tree traversal requires that the tree have a method that understands what to do when it encounters any of the object types (internal or leaf nodes) that the tree might contain. The composite approach would have the tree call the “traversal” method on its root node, which then knows how to perform the “traversal” behavior. This might in turn require invoking the traversal method of other objects (in this case, the children of the root).",
  },
  {
    word: "composite type",
    enTrans:
      "A type whose members have subparts. For example, a typical database record. Another term for this is aggregate type.",
  },
  {
    word: "composition",
    enTrans:
      "Relationships between classes based on usage rather than inheritance, i.e. a HAS-A relationship. For example, some code in class ‘A’ has a reference to some other class ‘B’.",
  },
  {
    word: "computability",
    enTrans:
      "A branch of computer science that deals with the theory of solving problems through computation. More specificially, it deals with the limits to what problems (functions) are computable. An example of a famous problem that cannot in principle be solved by a computer is the halting problem.",
  },
  {
    word: "computation",
    enTrans:
      "In a finite automata, a computation is a sequence of configurations for some length \nn≥0\nn≥0\n. In general, it is a series of operations that the machine performs.",
  },
  {
    word: "computational complexity theory",
    enTrans:
      "A branch of the theory of computation in theoretical computer science and mathematics that focuses on classifying computational problems according to their inherent difficulty, and relating those classes to each other. An example is the study of NP-Complete problems.",
  },
  {
    word: "configuration",
    enTrans:
      "For a finite automata, a complete specification for the current condition of the machine on some input string. This includes the current state that the machine is in, and the current condition of the string, including which character is about to be processed.",
  },
  {
    word: "Conjunctive Normal Form",
  },
  {
    word: "CNF",
    enTrans:
      "A Boolean expression written as a series of clauses that are AND’ed together.",
  },
  {
    word: "connected component",
    enTrans:
      "In an undirected graph, a subset of the nodes such that each node in the subset can be reached from any other node in that subset.",
  },
  {
    word: "connected graph",
    enTrans:
      "An undirected graph is a connected graph if there is at least one path from any vertex to any other.",
  },
  {
    word: "constant running time",
    enTrans:
      "The cost of a function whose running time is not related to its input size. In Theta notation, this is traditionally written as \nΘ(1)\nΘ(1)\n.",
  },
  {
    word: "constructive induction",
    enTrans:
      "A process for finding the closed form for a recurrence relation, that involves substituting in a guess for the closed form to replace the recursive part(s) of the recurrence. Depending on the goal (typically either to show that the hypothesized growth rate is right, or to find the precise constants), one then manipulates the resulting non-recursive equation.",
  },
  {
    word: "container",
  },
  {
    word: "container class",
    enTrans:
      "A data structure that stores a collection of records. Typical examples are arrays, search trees, and hash tables.",
  },
  {
    word: "context-free grammar",
    enTrans:
      "A grammar comprised only of productions of the form \nA→x\nA→x\n where \nA\nA\n is a non-terminal and \nx\nx\n is a series of one or more terminals and non-terminals. That is, the given non-terminal \nA\nA\n can be replaced at any time.",
  },
  {
    word: "context-free language",
    enTrans:
      "The set of languages that can be defined by context-sensitive grammars.",
  },
  {
    word: "context-sensitive grammar",
    enTrans:
      "A grammar comprised only of productions of the form \nxAy→xvy\nxAy→xvy\n where \nA\nA\n is a non-terminal and \nx\nx\n and \ny\ny\n are each a series of one or more terminals and non-terminals. That is, the given non-terminal \nA\nA\n can be replaced only when it is within the proper context.",
  },
  {
    word: "cost",
    enTrans: "The amount of resources that the solution consumes.",
  },
  {
    word: "cost model",
    enTrans:
      "In algorithm analysis, a definition for the cost of each basic operation performed by the algorithm, along with a definition for the size of the input. Having these definitions allows us to calculate the cost to run the algorithm on a given input, and from there determine the growth rate of the algorithm. A cost model would be considered “good” if it yields predictions that conform to our understanding of reality.",
  },
  {
    word: "countably infinite",
  },
  {
    word: "countable",
    enTrans:
      "A set is countably infinite if it contains a finite number of elements, or (for a set with an infinite number of elements) if there exists a one-to-one mapping from the set to the set of integers.",
  },
  {
    word: "CPU",
    enTrans:
      "Acronym for Central Processing Unit, the primary processing device for a computer.",
  },
  {
    word: "current position",
    enTrans:
      "A property of some list ADTs, where there is maintained a “current position” state that can be referred to later.",
  },
  {
    word: "cycle",
    enTrans:
      "In graph terminology, a cycle is a path of length three or more that connects some vertex \nv\n1\nv1\n to itself.",
  },
  {
    word: "cylinder",
    enTrans:
      "A disk drive normally consists of a stack of platters. While this might not be so true today, traditionally all of the I/O heads moved together during a seek operation. Thus, when a given I/O head is positioned over a particular track on a platter, the other I/O heads are also positioned over the corresponding track on their platters. That collection of tracks is called a cylinder. A given cylinder represents all of the data that can be read from all of the platters without doing another seek operation.",
  },
  {
    word: "cylinder index",
    enTrans:
      "In the ISAM system, a simple linear index that stores the lowest key value stored in each cylinder.",
  },
  {
    word: "cylinder overflow",
    enTrans:
      "In the ISAM system, this is space reserved for storing any records that can not fit in their respective cylinder.",
  },
  {
    word: "DAG",
    enTrans: "Abbreviation for directed acyclic graph.",
  },
  {
    word: "data field",
    enTrans: "In object-oriented programming, a synonym for data member.",
  },
  {
    word: "data item",
    enTrans:
      "A piece of information or a record whose value is drawn from a type.",
  },
  {
    word: "data member",
    enTrans:
      "The variables that together define the space required by a data item are referred to as data members. Some of the commonly used synonyms include data field, attribute, and instance variable.",
  },
  {
    word: "data structure",
    enTrans: "The implementation for an ADT.",
  },
  {
    word: "data type",
    enTrans:
      "A type together with a collection of operations to manipulate the type.",
  },
  {
    word: "deallocated",
  },
  {
    word: "deallocation",
    enTrans: "Free the memory allocated to an unused object.",
  },
  {
    word: "debugging",
    enTrans:
      "Correcting a program once we determine that it is not operating as we intend. This is in contrast to testing.",
  },
  {
    word: "decision problem",
    enTrans: "A problem whose output is either “YES” or “NO”.",
  },
  {
    word: "decision tree",
    enTrans:
      "A theoretical construct for modeling the behavior of algorithms. Each point at which the algorithm makes a decision (such as an if statement) is modeled by a branch in the tree that represents the algorithms behavior. Decision trees can be used in lower bounds proofs, such as the proof that sorting requires \nΩ(nlogn)\nΩ(nlog⁡n)\n comparisons in the worst case.",
  },
  {
    word: "deep copy",
    enTrans: "Copying the actual content of a pointee.",
  },
  {
    word: "degree",
    enTrans:
      "In graph terminology, the degree for a vertex is its number of neighbors. In a directed graph, the in degree is the number of edges directed into the vertex, and the out degree is the number of edges directed out of the vertex. In tree terminology, the degree for a node is its number of children.",
  },
  {
    word: "delegation mental model for recursion",
    enTrans:
      "A way of thinking about the process of recursion. The recursive function “delegates” most of the work when it makes the recursive call. The advantage of the delegation mental model for recursion is that you don’t need to think about how the delegated task is performed. It just gets done.",
  },
  {
    word: "dense graph",
    enTrans:
      "A graph where the actual number of edges is a large fraction of the possible number of edges. Generally, this is interpreted to mean that the degree for any vertex in the graph is relatively high.",
  },
  {
    word: "depth",
    enTrans:
      "The depth of a node \nM\nM\n in a tree is the length of the path from the root of the tree to \nM\nM\n.",
  },
  {
    word: "depth-first search",
    enTrans:
      "A graph traversal algorithm. Whenever a \nv\nv\n is visited during the traversal, DFS will recursively visit all of \nv\nv\n ‘s unvisited neighbors.",
  },
  {
    word: "depth-first search tree",
    enTrans:
      "A tree that can be defined by the operation of a depth-first search (DFS) on a graph. This tree would consist of the nodes of the graph and a subset of the edges of the graph that was followed during the DFS.",
  },
  {
    word: "dequeue",
    enTrans:
      "A specialized term used to indicate removing an element from a queue.",
  },
  {
    word: "dereference",
    enTrans:
      "Accessing the value of the pointee for some reference variable. Commonly, this happens in a language like Java when using the “dot” operator to access some field of an object.",
  },
  {
    word: "derivation",
    enTrans:
      "In formal languages, the process of executing a series of production rules from a grammar. A typical example of a derivation would be the series of productions executed to go from the start symbol to a given string.",
  },
  {
    word: "descendant",
    enTrans:
      "In a tree, the set of all nodes that have a node \nA\nA\n as an ancestor are the descendants of \nA\nA\n. In other words, all of the nodes that can be reached from \nA\nA\n by progressing downwards in tree. Another way to say it is: The children of \nA\nA\n, their children, and so on.",
  },
  {
    word: "deserialization",
    enTrans:
      "The process of returning a serialized representation for a data structure back to its original in-memory form.",
  },
  {
    word: "design pattern",
    enTrans:
      "An abstraction for describing the design of programs, that is, the interactions of objects and classes. Experienced software designers learn and reuse patterns for combining software components, and design patterns allow this design knowledge to be passed on to new programmers more quickly.",
  },
  {
    word: "deterministic",
    enTrans:
      "Any finite automata in which, for every pair of state and symbol, there is only a single transition. This means that whenever the machine is in a given state and sees a given symbol, only a single thing can happen. This is in contrast to a non-deterministic finite automata, which has at least one state with multiple transitions on at least one symbol.",
  },
  {
    word: "deterministic algorithm",
    enTrans:
      "An algorithm that does not involve any element of randomness, and so its behavior on a given input will always be the same. This is in contrast to a randomized algorithm.",
  },
  {
    word: "Deterministic Finite Automata",
  },
  {
    word: "Deterministic Finite Acceptor",
  },
  {
    word: "DFA",
    enTrans:
      "An automata or abstract machine that can process an input string (shown on a tape) from left to right. There is a control unit (with states), behavior defined for what to do when in a given state and with a given symbol on the current square of the tape. All that we can “do” is change state before going to the next letter to the right.",
  },
  {
    word: "DFS",
    enTrans: "Abbreviation for depth-first search.",
  },
  {
    word: "diagonalization argument",
    enTrans:
      "A proof technique for proving that a set is uncountably infinite. The approach is to show that, no matter what order the elements of the set are put in, a new element of the set can be constructed that is not in that ordering. This is done by changing the \ni\ni\n th value or position of the element to be different from that of the \ni\ni\n th element in the proposed ordering.",
  },
  {
    word: "dictionary",
    enTrans:
      "An abstract data type or interface for a data structure or software subsystem that supports insertion, search, and deletion of records.",
  },
  {
    word: "dictionary search",
    enTrans:
      "A close relative of an interpolation search. In a classical (paper) dictionary of words in a natural language, there are markings for where in the dictionary the words with a given letter start. So in typical usage of such a dictionary, words are found by opening the dictionary to some appropriate place within the pages that contain words starting with that letter.",
  },
  {
    word: "digraph",
    enTrans: "Abbreviation for directed graph.",
  },
  {
    word: "Dijkstra’s algorithm",
    enTrans:
      "An algorithm to solve the single-source shortest paths problem in a graph. This is a greedy algorithm. It is nearly identical to Prim’s algorithm for finding a minimal-cost spanning tree, with the only difference being the calculation done to update the best-known distance.",
  },
  {
    word: "diminishing increment sort",
    enTrans: "Another name for Shellsort.",
  },
  {
    word: "direct access",
    enTrans:
      "A storage device, such as a disk drive, that has some ability to move to a desired data location more-or-less directly. This is in contrast to a sequential access storage device such as a tape drive.",
  },
  {
    word: "direct proof",
    enTrans:
      "In general, a direct proof is just a “logical explanation”. A direct proof is sometimes referred to as an argument by deduction. This is simply an argument in terms of logic. Often written in English with words such as “if … then”, it could also be written with logic notation such as \nP⇒Q\nP⇒Q\n.",
  },
  {
    word: "directed acyclic graph",
    enTrans:
      "A graph with no cycles. Abbreviated as DAG. Note that a DAG is not necessarily a tree since a given node might have multiple parents.",
  },
  {
    word: "directed edge",
    enTrans:
      "An edge that goes from vertex to another. In contrast, an undirected edge simply links to vertices without a direction.",
  },
  {
    word: "directed graph",
    enTrans:
      "A graph whose edges each are directed from one of its defining vertices to the other.",
  },
  {
    word: "dirty bit",
    enTrans:
      "Within a buffer pool, a piece of information associated with each buffer that indicates whether the contents of the buffer have changed since being read in from backing storage. When the buffer is flushed from the buffer pool, the buffer’s contents must be written to the backing storage if the dirty bit is set (that is, if the contents have changed). This means that a relatively expensive write operation is required. In contrast, if the dirty bit is not set, then it is unnecessary to write the contents to backing storage, thus saving time over not keeping track of whether the contents have changed or not.",
  },
  {
    word: "Discrete Fourier Transform",
  },
  {
    word: "DFT",
    enTrans:
      "Let \na=[\na\n0\n,\na\n1\n,...,\na\nn−1\n]\nT\na=[a0,a1,...,an−1]T\n be a vector that stores the coefficients for a polynomial being evaluated. We can then do the calculations to evaluate the polynomial at the \nn\nn\n th \nrootsofunity<nthrootsofunit>\nrootsofunity<nthrootsofunit>\n by multiplying the \nA\nz\nAz\n matrix by the coefficient vector. The resulting vector \nF\nz\nFz\n is called the Discrete Fourier Transform (or DFT) for the polynomial.",
  },
  {
    word: "discriminator",
    enTrans:
      "A part of a multi-dimensional search key. Certain tree data structures such as the bintree and the kd tree operate by making branching decisions at nodes of the tree based on a single attribute of the multi-dimensional key, with the attribute determined by the level of the node in the tree. For example, in 2 dimensions, nodes at the odd levels in the tree might branch based on the \nx\nx\n value of a coordinate, while at the even levels the tree would branch based on the \ny\ny\n value of the coordinate. Thus, the \nx\nx\n coordinate is the discriminator for the odd levels, while the \ny\ny\n coordinate is the discriminator for the even levels.",
  },
  {
    word: "disjoint",
    enTrans:
      "Two parts of a data structure or two collections with no objects in common are disjoint. This term is often used in conjunction with a data structure that has nodes (such as a tree). Also used in the context of sets, where two subsets are disjoint if they share no elements.",
  },
  {
    word: "disjoint sets",
    enTrans:
      "A collection of sets, any pair of which share no elements in common. A collection of disjoint sets partitions some objects such that every object is in exactly one of the disjoint sets.",
  },
  {
    word: "disk access",
    enTrans:
      "The act of reading data from a disk drive (or other form of peripheral storage). The number of times data must be read from (or written to) a disk is often a good measure of cost for an algorithm that involves disk I/O, since this is usually the dominant cost.",
  },
  {
    word: "disk controller",
    enTrans:
      "The control mechanism for a disk drive. Responsible for the action of reading or writing a sector of data.",
  },
  {
    word: "disk drive",
    enTrans:
      "An example of peripheral storage or secondary storage. Data access times are typically measured in thousandths of a second (milliseconds), which is roughly a million times slower than access times for RAM, which is an example of a primary storage device. Reads from and writes to a disk drive are always done in terms of some minimum size, which is typically called a block. The block size is 512 bytes on most disk drives. Disk drives and RAM are typical parts of a computer’s memory hierarchy.",
  },
  {
    word: "disk I/O",
    enTrans:
      "Refers to the act of reading data from or writing data to a disk drive. All disk reads and writes are done in units of a sector or block.",
  },
  {
    word: "disk-based space/time tradeoff",
    enTrans:
      "In contrast to the standard space/time tradeoff, this principle states that the smaller you can make your disk storage requirements, the faster your program will run. This is because the time to read information from disk is enormous compared to computation time, so almost any amount of additional computation needed to unpack the data is going to be less than the disk-reading time saved by reducing the storage requirements.",
  },
  {
    word: "distance",
    enTrans: "In graph representations, a synonym for weight.",
  },
  {
    word: "divide and conquer",
    enTrans:
      "A technique for designing algorithms where a solution is found by breaking the problem into smaller (similar) subproblems, solving the subproblems, then combining the subproblem solutions to form the solution to the original problem. This process is often implemented using recursion.",
  },
  {
    word: "divide-and-conquer recurrences",
    enTrans:
      "A common form of recurrence relation that have the form\n\nT(n)=aT(n/b)+c\nn\nk\n;T(1)=c\nT(n)=aT(n/b)+cnk;T(1)=c\n\nwhere \na\na\n, \nb\nb\n, \nc\nc\n, and \nk\nk\n are constants. In general, this recurrence describes a problem of size \nn\nn\n divided into \na\na\n subproblems of size \nn/b\nn/b\n, while \nc\nn\nk\ncnk\n is the amount of work necessary to combine the partial solutions.",
  },
  {
    word: "divide-and-guess",
    enTrans:
      "A technique for finding a closed-form solution to a summation or recurrence relation.",
  },
  {
    word: "domain",
    enTrans: "The set of possible inputs to a function.",
  },
  {
    word: "double buffering",
    enTrans:
      "The idea of using multiple buffers to allow the CPU to operate in parallel with a peripheral storage device. Once the first buffer’s worth of data has been read in, the CPU can process this while the next block of data is being read from the peripheral storage. For this idea to work, the next block of data to be processed must be known or predicted with reasonable accuracy.",
  },
  {
    word: "double hashing",
    enTrans:
      "A collision resolution method. A second hash function is used to generate a value \nc\nc\n on the key. That value is then used by this key as the step size in linear probing by steps. Since different keys use different step sizes (as generated by the second hash function), this process avoids the clustering caused by standard linear probing by steps.",
  },
  {
    word: "double rotation",
    enTrans:
      "A type of rebalancing operation used by the Splay Tree and AVL Tree.",
  },
  {
    word: "doubly linked list",
    enTrans:
      "A linked list implementation variant where each list node contains access pointers to both the previous element and the next element on the list.",
  },
  {
    word: "DSA",
    enTrans: "Abbreviation for Data Structures and Algorithms.",
  },
  {
    word: "dynamic",
    enTrans:
      "Something that is changes (in contrast to static). In computer programming, dynamic normally refers to something that happens at run time. For example, run-time analysis is analysis of the program’s behavior, as opposed to its (static) text or structure Dynamic binding or dynamic memory allocation occurs at run time.",
  },
  {
    word: "dynamic allocation",
    enTrans:
      "The act of creating an object from free store. In C++, Java, and JavaScript, this is done using the new operator.",
  },
  {
    word: "dynamic array",
    enTrans:
      "Arrays, once allocated, are of fixed size. A dynamic array puts an interface around the array so as to appear to allow the array to grow and shrink in size as necessary. Typically this is done by allocating a new copy, copying the contents of the old array, and then returning the old array to free store. If done correctly, the amortized cost for dynamically resizing the array can be made constant. In some programming languages such as Java, the term vector is used as a synonym for dynamic array.",
  },
  {
    word: "dynamic memory allocation",
    enTrans:
      "A programming technique where linked objects in a data structure are created from free store as needed. When no longer needed, the object is either returned to free store or left as garbage, depending on the programming language.",
  },
  {
    word: "dynamic programming",
    enTrans:
      "An approach to designing algorithms that works by storing a table of results for subproblems. A typical cause for excessive cost in recursive algorithms is that different branches of the recursion might solve the same subproblem. Dynamic programming uses a table to store information about which subproblems have already been solved, and uses the stored information to immediately give the answer for any repeated attempts to solve that subproblem.",
  },
  {
    word: "edge",
    enTrans:
      "The connection that links two nodes in a tree, linked list, or graph.",
  },
  {
    word: "edit distance",
    enTrans:
      "Given strings \nS\nS\n and \nT\nT\n, the edit distance is a measure for the number of editing steps required to convert \nS\nS\n into \nT\nT\n.",
  },
  {
    word: "efficient",
    enTrans:
      "A solution is said to be efficient if it solves the problem within the required resource constraints. A solution is sometimes said to be efficient if it requires fewer resources than known alternatives, regardless of whether it meets any particular requirements.",
  },
  {
    word: "element",
    enTrans: "One value or member in a set.",
  },
  {
    word: "empirical comparison",
    enTrans:
      "An approach to comparing to things by actually seeing how they perform. Most typically, we are referring to the comparison of two programs by running each on a suite of test data and measuring the actual running times. Empirical comparison is subject to many possible complications, including unfair selection of test data, and inaccuracies in the time measurements due to variations in the computing environment between various executions of the programs.",
  },
  {
    word: "empty",
    enTrans: "For a container class, the state of containing no elements.",
  },
  {
    word: "encapsulation",
    enTrans:
      "In programming, the concept of hiding implementation details from the user of an ADT, and protecting data members of an object from outside access.",
  },
  {
    word: "enqueue",
    enTrans:
      "A specialized term used to indicate inserting an element onto a queue.",
  },
  {
    word: "entry-sequenced file",
    enTrans:
      "A file that stores records in the order that they were added to the file.",
  },
  {
    word: "enumeration",
    enTrans:
      "The process by which a traversal lists every object in the container exactly once. Thus, a traversal that prints the nodes is said to enumerate the nodes. An enumeration can also refer to the actual listing that is produced by the traversal (as well as the process that created that listing).",
  },
  {
    word: "equidistribution property",
    enTrans:
      "In random number theory, this means that a given series of random numbers cannot be described more briefly than simply listing it out.",
  },
  {
    word: "equivalence class",
    enTrans:
      "An equivalence relation can be used to partition a set into equivalence classes.",
  },
  {
    word: "equivalence relation",
    enTrans:
      "Relation \nR\nR\n is an equivalence relation on set \nS\nS\n if it is reflexive, symmetric, and transitive.",
  },
  {
    word: "estimation",
    enTrans:
      "As a technical skill, this is the process of generating a rough estimate in order to evaluate the feasibility of a proposed solution. This is sometimes known as “back of the napkin” or “back of the envelope” calculation. The estimation process can be formalized as (1) determine the major parameters that affect the problem, (2) derive an equation that relates the parameters to the problem, then (3) select values for the parameters and apply the equation to yield an estimated solution.",
  },
  {
    word: "evaluation",
    enTrans: "The act of finding the value for a polynomial at a given point.",
  },
  {
    word: "exact-match query",
    enTrans: "Records are accessed by unique identifier.",
  },
  {
    word: "exceptions",
    enTrans:
      "Exceptions are techniques used to predict possible runtime errors and handle them properly.",
  },
  {
    word: "exchange",
    enTrans: "A swap of adjacent records in an array.",
  },
  {
    word: "exchange sort",
    enTrans:
      "A sort that relies solely on exchanges (swaps of adjacent records) to reorder the list. Insertion Sort and Bubble Sort are examples of exchange sorts. All exchange sorts require \nΘ(\nn\n2\n)\nΘ(n2)\n time in the worst case.",
  },
  {
    word: "expanding the recurrence",
    enTrans:
      "A technique for solving a recurrence relation. The idea is to replace the recursive part of the recurrence with a copy of recurrence.",
  },
  {
    word: "exponential growth rate",
    enTrans:
      "A growth rate function where \nn\nn\n (the input size) appears in the exponent. For example, \n2\nn\n2n\n.",
  },
  {
    word: "expression tree",
    enTrans:
      "A tree structure meant to represent a mathematical expression. Internal nodes of the expression tree are operators in the expression, with the subtrees being the sub-expressions that are its operand. All leaf nodes are operands.",
  },
  {
    word: "extent",
    enTrans:
      "A physically contiguous block of sectors on a disk drive that are all part of a given disk file. The fewer extents needed to store the data for a disk file, generally the fewer seek operations that will be required to process a series of disk access operations on that file.",
  },
  {
    word: "external fragmentation",
    enTrans:
      "A condition that arises when a series of memory requests result in lots of small free blocks, no one of which is useful for servicing typical requests.",
  },
  {
    word: "external sort",
    enTrans:
      "A sorting algorithm that is applied to data stored in peripheral storage such as on a disk drive. This is in contrast to an internal sort that works on data stored in main memory.",
  },
  {
    word: "factorial",
    enTrans:
      "The factorial function is defined as \nf(n)=nf(n−1)\nf(n)=nf(n−1)\n for \nn>0\nn>0\n.",
  },
  {
    word: "failure policy",
    enTrans:
      "In a memory manager, a failure policy is the response that takes place when there is no way to satisfy a memory request from the current free blocks in the memory pool. Possibilities include rejecting the request, expanding the memory pool, collecting garbage, and reorganizing the memory pool (to collect together free space).",
  },
  {
    word: "family of languages",
    enTrans:
      "Given some class or type of finite automata (for example, the deterministic finite automata), the set of languages accepted by that class of finite automata is called a family. For example, the regular languages is a family defined by the DFAs.",
  },
  {
    word: "FIFO",
    enTrans:
      "Abbreviation for “first-in, first-out”. This is the access paradigm for a queue, and an old terminology for the queue is “FIFO list”.",
  },
  {
    word: "file allocation table",
    enTrans:
      "A legacy file system architecture orginially developed for DOS and then used in Windows. It is still in use in many small-scale peripheral devices such as USB memory sticks and digital camera memory.",
  },
  {
    word: "file manager",
    enTrans:
      "A part of the operating system responsible for taking requests for data from a logical file and mapping those requests to the physical location of the data on disk.",
  },
  {
    word: "file processing",
    enTrans:
      "The domain with Computer Science that deals with processing data stored on a disk drive (in a file), or more broadly, dealing with data stored on any peripheral storage device. Two fundamental properties make dealing with data on a peripheral device different from dealing with data in main memory: (1) Reading/writing data on a peripheral storage device is far slower than reading/writing data to main memory (for example, a typical disk drive is about a million times slower than RAM). (2) All I/O to a peripheral device is typically in terms of a block of data (for example, nearly all disk drives do all I/O in terms of blocks of 512 bytes).",
  },
  {
    word: "file structure",
    enTrans:
      "The organization of data on peripheral storage, such as a disk drive or DVD drive.",
  },
  {
    word: "final state",
    enTrans:
      "A required element of any acceptor. When computation on a string ends in a final state, then the machine accepts the string. Otherwise the machine rejects the string.",
  },
  {
    word: "FIND",
    enTrans:
      "One half of the UNION/FIND algorithm for managing disjoint sets. It is the process of moving upwards in a tree to find the tree’s root.",
  },
  {
    word: "Finite State Acceptor",
    enTrans:
      "A simple type of finite state automata, an acceptor’s only ability is to accept or reject a string. So, a finite state acceptor does not have the ability to modify the input tape. If computation on the string ends in a final state, then the the string is accepted, otherwise it is rejected.",
  },
  {
    word: "Finite State Machine",
  },
  {
    word: "FSM",
  },
  {
    word: "Finite State Automata",
  },
  {
    word: "FSA",
  },
  {
    word: "Finite Automata",
    enTrans:
      "Any abstract state machine, generally represented as a graph where the nodes are the states, and the edges represent transitions between nodes that take place when the machine is in that node (state) and sees an appropriate input. See, as an example, Deterministic Finite Automata.",
  },
  {
    word: "first fit",
    enTrans:
      "In a memory manager, first fit is a heuristic for deciding which free block to use when allocating memory from a memory pool. First fit will always allocate the first free block on the free block list that is large enough to service the memory request. The advantage of this approach is that it is typically not necessary to look at all free blocks on the free block list to find a suitable free block. The disadvantage is that it is not “intelligently” selecting what might be a better choice of free block.",
  },
  {
    word: "fixed-length coding",
    enTrans:
      "Given a collection of objects, a fixed-length coding scheme assigns a code to each object in the collection using codes that are all of the same length. Standard ASCII and Unicode representations for characters are both examples of fixed-length coding schemes. This is in contrast to variable-length coding.",
  },
  {
    word: "floor",
    enTrans:
      "Written \n⌊x⌋\n⌊x⌋\n, for real value \nx\nx\n the floor is the greatest integer \n≤x\n≤x\n.",
  },
  {
    word: "Floyd’s algorithm",
    enTrans:
      "An algorithm to solve the all-pairs shortest paths problem. It uses the dynamic programming algorithmic technique, and runs in \nΘ(\nn\n3\n)\nΘ(n3)\n time. As with any dynamic programming algorithm, the key issue is to avoid duplicating work by using proper bookkeeping on the algorithm’s progress through the solution space. The basic idea is to first find all the direct edge costs, then improving those costs by allowing paths through vertex 0, then the cheapest paths involving paths going through vertices 0 and 1, and so on.",
  },
  {
    word: "flush",
    enTrans:
      "The act of removing data from a cache, most typically because other data considered of higher future value must replace it in the cache. If the data being flushed has been modified since it was first read in from secondary storage (and the changes are meant to be saved), then it must be written back to that secondary storage. The the context of a buffer pool, the process of removing the contents stored in a buffer when that buffer is required in order to store new data. If the buffer’s contents have been changed since having been read in from backing storage (this fact would normally be tracked by using a dirty bit), then they must be copied back to the backing storage before the buffer can be reused.",
  },
  {
    word: "flyweight",
    enTrans:
      "A design pattern that is meant to solve the following problem: You have an application with many objects. Some of these objects are identical in the information that they contain, and the role that they play. But they must be reached from various places, and conceptually they really are distinct objects. Because there is so much duplication of the same information, we want to reduce memory cost by sharing that space. For example, in document layout, the letter “C” might be represented by an object that describes that character’s strokes and bounding box. However, we do not want to create a separate “C” object everywhere in the document that a “C” appears. The solution is to allocate a single copy of the shared representation for “C” objects. Then, every place in the document that needs a “C” in a given font, size, and typeface will reference this single copy. The various instances of references to a specific form of “C” are called flyweights. Flyweights can also be used to implement the empty leaf nodes of the bintree and PR quadtree.",
  },
  {
    word: "folding method",
    enTrans:
      "In hashing, an approach to implementing a hash function. Most typically used when the key is a string, the folding method breaks the string into pieces (perhaps each letter is a piece, or a small series of letters is a piece), converts the letter(s) to an integer value (typically by using its underlying encoding value), and summing up the pieces.",
  },
  {
    word: "Ford and Johnson sort",
    enTrans:
      "A sorting algorithm that is close to the theoretical minimum number of key comparisons necessary to sort. Generally not considered practical in practice due to the fact that it is not efficient in terms of the number of records that need to be moved. It consists of first sorting pairs of nodes into winners and losers (of the pairs comparisons), then (recursively) sorting the winners of the pairs, and then finally carefully selecting the order in which the losers are added to the chain of sorted items.",
  },
  {
    word: "forest",
    enTrans: "A collection of one or more trees.",
  },
  {
    word: "free block",
    enTrans: "A block of unused space in a memory pool.",
  },
  {
    word: "free block list",
    enTrans:
      "In a memory manager, the list that stores the necessary information about the current free blocks. Generally, this is done with some sort of linked list, where each node of the linked list indicates the start position and length of the free block in the memory pool.",
  },
  {
    word: "free store",
    enTrans:
      "Space available to a program during runtime to be used for dynamic allocation of objects. The free store is distinct from the runtime stack. The free store is sometimes referred to as the heap, which can be confusing because heap more often refers to a specific data structure. Most programming languages provide functions to allocate (and maybe to deallocate) objects from the free store, such as new in C++ and Java.",
  },
  {
    word: "free tree",
    enTrans:
      "A connected, undirected graph with no simple cycles. An equivalent definition is that a free tree is connected and has \n|V|−1\n|V|−1\n edges.",
  },
  {
    word: "freelist",
    enTrans:
      "A simple and faster alternative to using free store when the objects being dynamically allocated are all of the same size (and thus are interchangeable). Typically implemented as a linked stack, released objects are put on the front of the freelist. When a request is made to allocate an object, the freelist is checked first and it provides the object if possible. If the freelist is empty, then a new object is allocated from free store.",
  },
  {
    word: "frequency count",
    enTrans:
      "A heuristic used to maintain a self-organizing list. Under this heuristic, a count is maintained for every record. When a record access is made, its count is increased. If this makes its count greater than that of another record in the list, it moves up toward the front of the list accordingly so as to keep the list sorted by frequency. Analogous to the least frequently used heuristic for maintaining a buffer pool.",
  },
  {
    word: "full binary tree theorem",
    enTrans:
      "This theorem states that the number of leaves in a non-empty full binary tree is one more than the number of internal nodes. Equivalently, then number of null pointers in a standard pointer-based implementation for binary tree nodes is one more than the number of nodes in the binary tree.",
  },
  {
    word: "full tree",
    enTrans:
      "A binary tree is full if every node is either a leaf node or else it is an internal node with two non-empty children.",
  },
  {
    word: "function",
    enTrans:
      "In mathematics, a matching between inputs (the domain) and outputs (the range). In programming, a subroutine that takes input parameters and uses them to compute and return a value. In this case, it is usually considered bad practice for a function to change any global variables (doing so is called a side effect).",
  },
  {
    word: "garbage",
    enTrans:
      "In memory management, any memory that was previously (dynamically) allocated by the program during runtime, but which is no longer accessible since all pointers to the memory have been deleted or overwritten. In some languages, garbage can be recovered by garbage collection. In languages such as C and C++ that do not support garbage collection, so creating garbage is considered a memory leak.",
  },
  {
    word: "garbage collection",
    enTrans:
      "Languages with garbage collection such Java, JavaScript, Lisp, and Scheme will periodically reclaim garbage and return it to free store.",
  },
  {
    word: "general tree",
    enTrans:
      "A tree in which any given node can have any number of children. This is in contrast to, for example, a binary tree where each node has a fixed number of children (some of which might be null). General tree nodes tend to be harder to implement for this reason.",
  },
  {
    word: "grammar",
    enTrans:
      "A formal definition for what strings make up a language, in terms of a set of production rules.",
  },
  {
    word: "graph",
    enTrans:
      "A graph \nG=(V,E)\nG=(V,E)\n consists of a set of vertices \nV\nV\n and a set of edges \nE\nE\n, such that each edge in \nE\nE\n is a connection between a pair of vertices in \nV\nV\n.",
  },
  {
    word: "greedy algorithm",
    enTrans: "An algorithm that makes locally optimal choices at each step.",
  },
  {
    word: "growth rate",
    enTrans:
      "In algorithm analysis, the rate at which the cost of the algorithm grows as the size of its input grows.",
  },
  {
    word: "guess-and-test",
    enTrans:
      "A technique used when trying to determine the closed-form solution for a summation or recurrence relation. Given a hypothesis for the closed-form solution, if it is correct, then it is often relatively easy to prove that using induction.",
  },
  {
    word: "guided traversal",
    enTrans:
      "A tree traversal that does not need to visit every node in the tree. An example would be a range query in a BST.",
  },
  {
    word: "halt state",
    enTrans:
      "In a finite automata, a designated state which causes the machine to immediately halt when it is entered.",
  },
  {
    word: "halted configuration",
    enTrans:
      "A halted configuration occurs in a Turing machine when the machine transitions into the halt state.",
  },
  {
    word: "halting problem",
    enTrans:
      "The halting problem is to answer this question: Given a computer program \nP\nP\n and an input \nI\nI\n, will program \nP\nP\n halt when executed on input \nI\nI\n? This problem has been proved impossible to solve in the general case. Thus, it is an example of an unsolveable problem.",
  },
  {
    word: "handle",
    enTrans:
      "When using a memory manager to store data, the client will pass data to be stored (the message) to the memory manager, and the memory manager will return to the client a handle. The handle encodes the necessary information that the memory manager can later use to recover and return the message to the client. This is typically the location and length of the message within the memory pool.",
  },
  {
    word: "hanging configuration",
    enTrans:
      "A hanging configuration occurs in a Turing machine when the I/O head moves to the left from the left-most square of the tape, or when the machine goes into an infinite loop.",
  },
  {
    word: "happy path testing",
    enTrans: "Testing “proper” inputs or uses of a program.",
  },
  {
    word: "hard algorithm",
    enTrans:
      "“Hard” is traditionally defined in relation to running time, and a “hard” algorithm is defined to be an algorithm with exponential running time.",
  },
  {
    word: "hard problem",
    enTrans:
      "“Hard” is traditionally defined in relation to running time, and a “hard” problem is defined to be one whose best known algorithm requires exponential running time.",
  },
  {
    word: "harmonic series",
    enTrans:
      "The sum of reciprocals from 1 to \nn\nn\n is called the Harmonic Series, and is written \n\nn\nHn\n. This sum has a value between \nlog\ne\nn\nloge⁡n\n and \nlog\ne\nn+1\nloge⁡n+1\n.",
  },
  {
    word: "hash function",
    enTrans:
      "In a hash system, the function that converts a key value to a position in the hash table. The hope is that this position in the hash table contains the record that matches the key value.",
  },
  {
    word: "hash system",
    enTrans:
      "The implementation for search based on hash lookup in a hash table. The search key is processed by a hash function, which returns a position in a hash table, which hopefully is the correct position in which to find the record corresponding to the search key.",
  },
  {
    word: "hash table",
    enTrans:
      "The data structure (usually an array) that stores data records for lookup using hashing.",
  },
  {
    word: "hashing",
    enTrans:
      "A search method that uses a hash function to convert a search key value into a position within a hash table. In a properly implemented hash system, that position in the table will have high probability of containing the record that matches the key value. Sometimes, the hash function will return an position that does not store the desired key, due to a process called collision. In that case, the desired record is found through a process known as collision resolution.",
  },
  {
    word: "head",
    enTrans: "The beginning of a list.",
  },
  {
    word: "header node",
    enTrans:
      "Commonly used in implementations for a linked list or related structure, this node preceeds the first element of the list. Its purpose is to simplify the code implementation by reducing the number of special cases that must be programmed for.",
  },
  {
    word: "heap",
    enTrans:
      "This term has two different meanings. Uncommonly, it is a synonym for free store. Most often it is used to refer to a particular data structure. This data structure is a complete binary tree with the requirement that every node has a value greater than its children (called a max heap), or else the requirement that every node has a value less than its children (called a min heap). Since it is a complete binary tree, a heap is nearly always implemented using an array rather than an explicit tree structure. To add a new value to a heap, or to remove the extreme value (the max value in a max-heap or min value in a min-heap) and update the heap, takes \nΘ(logn)\nΘ(log⁡n)\n time in the worst case. However, if given all of the values in an unordered array, the values can be re-arranged to form a heap in only \nΘ(n)\nΘ(n)\n time. Due to its space and time efficiency, the heap is a popular choice for implementing a priority queue.",
  },
  {
    word: "heapsort",
    enTrans:
      "A sorting algorithm that costs \nΘ(nlogn)\nΘ(nlog⁡n)\n time in the best, average, and worst cases. It tends to be slower than Mergesort and Quicksort. It works by building a max heap, and then repeatedly removing the item with maximum key value (moving it to the end of the heap) until all elements have been removed (and replaced at their proper location in the array).",
  },
  {
    word: "height",
    enTrans:
      "The height of a tree is one more than the depth of the deepest node in the tree.",
  },
  {
    word: "height balanced",
    enTrans:
      "The condition the depths of each subtree in a tree are roughly the same.",
  },
  {
    word: "heuristic",
    enTrans:
      "A way to solve a problem that is not guarenteed to be optimal. While it might not be guarenteed to be optimal, it is generally expected (by the agent employing the heuristic) to provide a reasonably efficient solution.",
  },
  {
    word: "heuristic algorithm",
    enTrans:
      "A type of approximation algorithm, that uses a heuristic to find a good, but not necessarily cheapest, solution to an optimization problem.",
  },
  {
    word: "home position",
    enTrans: "In hashing, a synonym for home slot.",
  },
  {
    word: "home slot",
    enTrans:
      "In hashing, this is the slot in the hash table determined for a given key by the hash function.",
  },
  {
    word: "homogeneity",
    enTrans:
      "In a container class, this is the property that all objects stored in the ncontainer are of the same class. For example, if you have a list intended to store Payroll records, is it possible for the programmer to insert an integer onto the list instead?",
  },

  {
    word: "Huffman coding tree",
    enTrans:
      "A Huffman coding tree is a full binary tree that is used to represent letters (or other symbols) efficiently. Each letter is associated with a node in the tree, and is then given a Huffman code based on the position of the associated node. A Huffman coding tree is an example of a binary trie.",
  },
  {
    word: "Huffman tree",
    enTrans: "Shorter form of the term Huffman coding tree.",
  },

  {
    word: "image-space decomposition",
    enTrans:
      "A from of key-space decomposition where the key space splitting points is predetermined (typically by splitting in half). For example, a Huffman coding tree splits the letters being coded into those with codes that start with 0 on the left side, and those with codes that start with 1 on the right side. This regular decomposition of the key space is the basis for a trie data structure. An image-space decomposition is in opposition to an object-space decomposition.",
  },
  {
    word: "in degree",
    enTrans:
      "In graph terminology, the in degree for a vertex is the number of edges directed into the vertex.",
  },
  {
    word: "incident",
    enTrans:
      "In graph terminology, an edge connecting two vertices is said to be incident with those vertices. The two vertices are said to be adjacent.",
  },
  {
    word: "index file",
    enTrans:
      "A file whose records consist of key-value pairs where the pointers are referencing the complete records stored in another file.",
  },

  {
    word: "induction hypothesis",
    enTrans:
      "The key assumption used in a proof by induction, that the theorem to be proved holds for smaller instances of the theorem. The induction hypothesis is equivalent to the recursive call in a recursive function.",
  },
  {
    word: "induction step",
    enTrans:
      "Part of a proof by induction. In its simplest form, this is a proof of the implication that if the theorem holds for \nn−1\nn−1\n, then it holds for \nn\nn\n. As an alternative, see strong induction.",
  },
  {
    word: "induction variable",
    enTrans:
      "The variable used to parameterize the theorem being proved by induction. For example, if we seek to prove that the sum of the integers from 1 to \nn\nn\n is \nn(n+1)/2\nn(n+1)/2\n, then \nn\nn\n is the induction variable. An induction variable must be an integer.",
  },
  {
    word: "information theoretic lower bound",
    enTrans:
      "A lower bound on the amount of resources needed to solve a problem based on the number of bits of information needed to uniquely specify the answer. Sometimes referred to as a “Shannon theoretic lower bound” due to Shannon’s work on information theory and entropy. An example is that sorting has a lower bound of \nΩ(\nlog\n2\nn!)\nΩ(log2⁡n!)\n because there are \nn!\nn!\n possible orderings for \nn\nn\n values. This observation alone does not make the lower bound tight, because it is possible that no algorithm could actually reach the information theory lower limit.",
  },
  {
    word: "inherit",
    enTrans:
      "In object-oriented programming, the process by which a subclass gains data members and methods from a base class.",
  },

  {
    word: "inorder traversal",
    enTrans:
      "In a binary tree, a traversal that first recursively visits the left child, then visits the root, and then recursively visits the right child. In a binary search tree, this traversal will enumerate the nodes in sorted order.",
  },
  {
    word: "Insertion Sort",
    enTrans:
      "A sorting algorithm with \nΘ(\nn\n2\n)\nΘ(n2)\n average and worst case cost, and \nTheta(n)\nTheta(n)\n best case cost. This best case cost makes it useful when we have reason to expect the input to be nearly sorted.",
  },
  {
    word: "instance variable",
    enTrans: "In object-oriented programming, a synonym for data member.",
  },
  {
    word: "integer function",
    enTrans:
      "Any function whose input is an integer and whose output is an integer. It can be proved by diagonalization that the set of integer functions is uncountably infinite.",
  },
  {
    word: "inter-sector gap",
    enTrans:
      "On a disk drive, a physical gap in the data that occurs between the sectors. This allows the I/O head detect the end of the sector.",
  },
  {
    word: "interface",
    enTrans:
      "An interface is a class-like structure that only contains method signatures and fields. An interface does not contain an implementation of the methods or any data members.",
  },
  {
    word: "intermediate code",
    enTrans:
      "A step in a typical compiler is to transform the original high-level language into a form on which it is easier to do other stages of the process. For example, some compilers will transform the original high-level source code into assembly code on which it can do code optimization, before translating it into its final executable form.",
  },
  {
    word: "intermediate code generation",
    enTrans:
      "A phase in a compiler, that walks through a parse tree to produce simple assembly code.",
  },
  {
    word: "internal fragmentation",
    enTrans:
      "A condition that occurs when more than \nm\nm\n bytes are allocated to service a memory request for \nm\nm\n bytes, wasting free storage. This is often done to simplify memory management.",
  },
  {
    word: "internal node",
    enTrans:
      "In a tree, any node that has at least one non-empty child is an internal node.",
  },
  {
    word: "internal sort",
    enTrans:
      "A sorting algorithm that is applied to data stored in main memory. This is in contrast to an external sort that is meant to work on data stored in peripheral storage such as on a disk drive.",
  },
  {
    word: "interpolation",
    enTrans:
      "The act of finding the coefficients of a polynomial, given the values at some points. A polynomal of degree \nn−1\nn−1\n requires \nn\nn\n points to interpolate the coefficients.",
  },
  {
    word: "interpolation search",
    enTrans:
      "Given a sorted array, and knowing the first and last key values stored in some subarray known to contain search key \nK\nK\n, interpolation search will compute the expected location of \nK\nK\n in the subarray as a fraction of the distance between the known key values. So it will next check that computed location, thus narrowing the search for the next iteration. Given reasonable key value distribution, the average case for interpolation search will be \nΘ(loglogn)\nΘ(log⁡log⁡n)\n, or better than the expected cost of binary search. Nonetheless, binary search is expected to be faster in nearly all practical situations due to the small difference between the two costs, combined with the higher constant factors required to implement interpolation search as compared to binary search.",
  },
  {
    word: "interpreter",
    enTrans:
      "In contrast to a compiler that translates a high-level program into something that can be repeatedly executed to perform a computation, an interpreter directly performs computation on the high-level langauge. This tends to make the computation much slower than if it were performed on the directly executable version produced by a compiler.",
  },
  {
    word: "inversion",
    enTrans:
      "A measure of how disordered a series of values is. For each element \nX\nX\n in the series, count one inversion for each element to left of \nX\nX\n that is greater than the value of \nX\nX\n (and so must ultimately be moved to the right of \nX\nX\n during a sorting process).",
  },
  {
    word: "inverted file",
    enTrans:
      "Synonym for inverted list when the inverted list is stored in a disk file.",
  },
  {
    word: "inverted list",
    enTrans:
      "An index which links secondary keys to either the associated primary key or the actual record in the database.",
  },
  {
    word: "irreflexive",
    enTrans:
      "In set notation, binary relation \nR\nR\n on set \nS\nS\n is irreflexive if \naRa\naRa\n is never in the relation for any \na∈S\na∈S\n.",
  },
  {
    word: "ISAM",
    enTrans:
      "Indexed Sequential Access Method: an obsolete method for indexing data for (at the time) fast retrieval. More generally, the term is used also to generically refer to an index that supports both sequential and keyed access to data records. Today, that would nearly always be implemented using a B-Tree.",
  },
  {
    word: "iterator",
    enTrans:
      "In a container such as a List, a separate class that indicates position within the container, with support for traversing through all elements in the container.",
  },
  {
    word: "job",
    enTrans:
      "Common name for processes or tasks to be run by an operating system. They typically need to be processed in order of importance, and so are kept organized by a priority queue. Another common use for this term is for a collection of tasks to be ordered by a topological sort.",
  },
  {
    word: "jump search",
    enTrans:
      "An algorithm for searching a sorted list, that falls between sequential search and binary search in both computational cost and conceptual complexity. The idea is to keep jumping by some fixed number of positions until a value is found that is bigger than search key \nK\nK\n, then do a sequential search over the subarray that is now known to contain the search key. The optimal number of steps to jump will be \nn\n‾\n√\nn\n for an array of size \nn\nn\n, and the worst case cost will be \nΘ(\nn\n‾\n√\n)\nΘ(n)\n.",
  },
  {
    word: "K-ary tree",
    enTrans:
      "A type of full tree where every internal node has exactly \nK\nK\n children.",
  },
  {
    word: "k-path",
    enTrans:
      "In Floyd’s algorithm, a k-path is a path between two vertices \ni\ni\n and \nj\nj\n that can only go through vertices with an index value less than or equal to \nk\nk\n.",
  },
  {
    word: "kd tree",
    enTrans:
      "A spatial data structure that uses a binary tree to store a collection of data records based on their (point) location in space. It uses the concept of a discriminator at each level to decide which single component of the multi-dimensional search key to branch on at that level. It uses a key-space decomposition, meaning that all data records in the left subtree of a node have a value on the corresponding discriminator that is less than that of the node, while all data records in the right subtree have a greater value. The bintree is the image-space decomposition analog of the kd tree.",
  },
  {
    word: "key",
    enTrans:
      "A field or part of a larger record used to represent that record for the purpose of searching or comparing. Another term for search key.",
  },
  {
    word: "key sort",
    enTrans:
      "Any sorting operation applied to a collection of key-value pairs where the value in this case is a reference to a complete record (that is, a pointer to the record in memory or a position for a record on disk). This is in contrast to a sorting operation that works directly on a collection of records. The intention is that the collection of key-value pairs is far smaller than the collection of records themselves. As such, this might allow for an internal sort when sorting the records directly would require an external sort. The collection of key-value pairs can also act as an index.",
  },
  {
    word: "key space",
    enTrans: "The range of values that a key value may take on.",
  },
  {
    word: "key-space decomposition",
    enTrans:
      "The idea that the range for a search key will be split into pieces. There are two general approaches to this: object-space decomposition and image-space decomposition.",
  },
  {
    word: "key-value pair",
    enTrans:
      "A standard solution for solving the problem of how to relate a key value to a record (or how to find the key for a given record) within the context of a particular index. The idea is to simply store as records in the index pairs of keys and records. Specifically, the index will typically store a copy of the key along with a reference to the record. The other standard solution to this problem is to pass a comparator function to the index.",
  },
  {
    word: "knapsack problem",
    enTrans:
      "While there are many variations of this problem, here is a typical version: Given knapsack of a fixed size, and a collection of objects of various sizes, is there a subset of the objects that exactly fits into the knapsack? This problem is known to be NP-complete, but can be solved for problem instances in practical time relatively quickly using dynamic programming. Thus, it is considered to have pseudo-polynomial cost. An optimization problem version is to find the subset that can fit with the greatest amount of items, either in terms of their total size, or in terms of the sum of values associated with each item.",
  },
  {
    word: "Kruskal’s algorithm",
    enTrans:
      "An algorithm for computing the MCST of a graph. During processing, it makes use of the UNION/FIND process to efficiently determine of two vertices are within the same subgraph.",
  },
  {
    word: "labeled graph",
    enTrans: "A graph with labels associated with the nodes.",
  },
  {
    word: "language",
    enTrans: "A set of strings.",
  },
  {
    word: "Las Vegas algorithms",
    enTrans:
      "A form of randomized algorithm. We always find the maximum value, and “usually” we find it fast. Such algorithms have a guaranteed result, but do not guarantee fast running time.",
  },
  {
    word: "leaf node",
    enTrans:
      "In a binary tree, leaf node is any node that has two empty children. (Note that a binary tree is defined so that every node has two children, and that is why the leaf node has to have two empty children, rather than no children.) In a general tree, any node is a leaf node if it has no children.",
  },
  {
    word: "least frequently used",
    enTrans:
      "Abbreviated LFU, it is a heuristic that can be used to decide which buffer in a buffer pool to flush when data in the buffer pool must be replaced by new data being read into a cache. However, least recently used is more popular than LFU. Analogous to the frequency count heuristic for maintaining a self-organizing list.",
  },
  {
    word: "least recently used",
    enTrans:
      "Abbreviated LRU, it is a popular heuristic to use for deciding which buffer in a buffer pool to flush when data in the buffer pool must be replaced by new data being read into a cache. Analogous to the move-to-front heuristic for maintaining a self-organizing list.",
  },
  {
    word: "left recursive",
    enTrans:
      "In automata theory, a production is left recursive if it is of the form \nA→Ax\nA→Ax\n, \nA∈V,x∈(V∪T\n)\n∗\nA∈V,x∈(V∪T)∗\n where \nV\nV\n is the set of non-terminals and \nT\nT\n is the set of terminals in the grammar.",
  },
  {
    word: "length",
    enTrans:
      "In a list, the number of elements. In a string, the number of characters.",
  },
  {
    word: "level",
    enTrans:
      "In a tree, all nodes of depth \nd\nd\n are at level \nd\nd\n in the tree. The root is the only node at level 0, and its depth is 0.",
  },
  {
    word: "lexical analysis",
    enTrans:
      "A phase of a compiler or interpreter responsible for reading in characters of the program or language and grouping them into tokens.",
  },
  {
    word: "lexical scoping",
    enTrans:
      "Within programming languages, the convention of allowing access to a variable only within the block of code in which the variable is defined. A synonym for static scoping.",
  },
  {
    word: "LFU",
    enTrans: "Abbreviation for least frequently used.",
  },
  {
    word: "lifetime",
    enTrans:
      "For a variable, lifetime is the amount of time it will exist before it is destroyed.",
  },
  {
    word: "LIFO",
    enTrans:
      "Abbreviation for “Last-In, First-Out”. This is the access paradigm for a stack, and an old terminolgy for the stack is “LIFO list”.",
  },
  {
    word: "linear congruential method",
    enTrans:
      "In random number theory, a process for computing the next number in a pseudo-random sequence. Starting from a seed, the next term \nr(i)\nr(i)\n in the series is calculated from term \nr(i−1)\nr(i−1)\n by the equation\n\nr(i)=(r(i−1)×b)modt\nr(i)=(r(i−1)×b)modt\n\nwhere \nb\nb\n and \nt\nt\n are constants. These constants must be well chosen for the resulting series of numbers to have desireable properties as a random number sequence.",
  },
  {
    word: "linear growth rate",
    enTrans:
      "For input size \nn\nn\n, a growth rate of \ncn\ncn\n (for \nc\nc\n any positive constant). In other words, the cost of the associated function is linear on the input size.",
  },
  {
    word: "linear index",
    enTrans:
      "A form of indexing that stores key-value pairs in a sorted array. Typically this is used for an index to a large collection of records stored on disk, where the linear index itself might be on disk or in main memory. It allows for efficient search (including for range queries), but it is not good for inserting and deleting entries in the array. Therefore, it is an ideal indexing structure when the system needs to do range queries but the collection of records never changes once the linear index has been created.",
  },
  {
    word: "linear order",
    enTrans: "Another term for total order.",
  },
  {
    word: "linear probing",
    enTrans:
      "In hashing, this is the simplest collision resolution method. Term \ni\ni\n of the probe sequence is simply \ni\ni\n, meaning that collision resolution works by moving sequentially through the hash table from the home slot. While simple, it is also inefficient, since it quickly leads to certain free slots in the hash table having higher probability of being selected during insertion or search.",
  },
  {
    word: "linear probing by steps",
    enTrans:
      "In hashing, this collision resolution method is a variation on simple linear probing. Some constant \nc\nc\n is defined such that term \ni\ni\n of the probe sequence is \nci\nci\n. This means that collision resolution works by moving sequentially through the hash table from the home slot in steps of size \nc\nc\n. While not much improvement on linear probing, it forms the basis of another collision resolution method called double hashing, where each key uses a value for \nc\nc\n defined by a second hash function.",
  },
  {
    word: "linear search",
    enTrans: "Another name for sequential search.",
  },
  {
    word: "link node",
    enTrans:
      "A widely used supporting object that forms the basic building block for a linked list and similar data structures. A link node contains one or more fields that store data, and a pointer or reference to another link node.",
  },
  {
    word: "linked list",
    enTrans:
      "An implementation for the list ADT that uses dynamic allocation of link nodes to store the list elements. Common variants are the singly linked list, doubly linked list and circular list. The overhead required is the pointers in each link node.",
  },
  {
    word: "linked stack",
    enTrans:
      "Analogous to a linked list, this uses dynamic allocation of nodes to store the elements when implementing the stack ADT.",
  },
  {
    word: "list",
    enTrans:
      "A finite, ordered sequence of data items known as elements. This is close to the mathematical concept of a sequence. Note that “ordered” in this definition means that the list elements have position. It does not refer to the relationship between key values for the list elements (that is, “ordered” does not mean “sorted”).",
  },
  {
    word: "literal",
    enTrans:
      "In a Boolean expression, a literal is a Boolean variable or its negation. In the context of compilers, it is any constant value. Similar to a terminal.",
  },
  {
    word: "load factor",
    enTrans:
      "In hashing this is the fraction of the hash table slots that contain a record. Hash systems usually try to keep the load factor below 50%.",
  },
  {
    word: "local storage",
    enTrans: "local storage.",
  },
  {
    word: "local variable",
    enTrans:
      "A variable declared within a function or method. It exists only from the time when the function is called to when the function exits. When a function is suspended (due to calling another function), the function’s local variables are stored in an activation record on the runtime stack.",
  },
  {
    word: "locality of reference",
    enTrans:
      "The concept that accesses within a collection of records is not evenly distributed. This can express itself as some small fraction of the records receiving the bulk of the accesses (80/20 rule). Alternatively, it can express itself as an increased probability that the next or future accesses will come close to the most recent access. This is the fundamental property for success of caching.",
  },
  {
    word: "logarithm",
    enTrans:
      "The logarithm of base \nb\nb\n for value \ny\ny\n is the power to which \nb\nb\n is raised to get \ny\ny\n.",
  },
  {
    word: "logical file",
    enTrans:
      "In file processing, the programmer’s view of a random access file stored on disk as a contiguous series of bytes, with those bytes possibly combining to form data records. This is in contrast to the physical file.",
  },
  {
    word: "logical form",
    enTrans:
      "The definition for a data type in terms of an ADT. Contrast to the physical form for the data type.",
  },
  {
    word: "lookup table",
    enTrans:
      "A table of pre-calculated values, used to speed up processing time when the values are going to be viewed many times. The costs to this approach are the space required for the table and the time required to compute the table. This is an example of a space/time tradeoff.",
  },
  {
    word: "lower bound",
    enTrans:
      "In algorithm analysis, a growth rate that is always less than or equal to the growth rate of the algorithm in question. In practice, this is the fastest-growing function that we know grows no faster than all but a constant number of inputs. It could be a gross under-estimate of the truth. Since the lower bound for the algorithm can be very different for different situations (such as the best case or worst case), we typically have to specify which situation we are referring to.",
  },
  {
    word: "lower bounds proof",
    enTrans:
      "A proof regarding the lower bound, with this term most typically referring to the lower bound for any possible algorithm to solve a given problem. Many problems have a simple lower bound based on the concept that the minimum amount of processing is related to looking at all of the problem’s input. However, some problems have a higher lower bound than that. For example, the lower bound for the problem of sorting (\nΩ(nlogn)\nΩ(nlog⁡n)\n) is greater than the input size to sorting (\nn\nn\n). Proving such “non-trivial” lower bounds for problems is notoriously difficult.",
  },
  {
    word: "LRU",
    enTrans: "Abbreviation for least recently used.",
  },
  {
    word: "main memory",
    enTrans:
      "A synonym for primary storage. In a computer, typically this will be RAM.",
  },
  {
    word: "map",
    enTrans: "A data structure that relates a key to a record.",
  },
  {
    word: "mapping",
    enTrans:
      "A function that maps every element of a given set to a unique element of another set; a correspondence.",
  },
  {
    word: "mark array",
    enTrans:
      "It is typical in graph algorithms that there is a need to track which nodes have been visited at some point in the algorithm. An array of bits or values called the mark array is often maintained for this purpose.",
  },
  {
    word: "mark/sweep algorithm",
    enTrans:
      "An algorithm for garbage collection. All accessible variables, and any space that is reachable by a chain of pointers from any accessible variable, is “marked”. Then a sequential sweep of all memory in the pool is made. Any unmarked memory locations are assumed to not be needed by the program and can be considered as free to be reused.",
  },
  {
    word: "master theorem",
    enTrans:
      "A theorem that makes it easy to solve divide-and-conquer recurrences.",
  },
  {
    word: "matching",
    enTrans:
      "In graph theory, a pairing (or match) of various nodes in a graph.",
  },
  {
    word: "matching problem",
    enTrans:
      "Any problem that involves finding a matching in a graph with some desired property. For example, a well-known NP-complete problem is to find a maximum match for an undirected graph.",
  },
  {
    word: "max heap",
    enTrans:
      "A heap where every node has a key value greater than its children. As a consequence, the node with maximum key value is at the root.",
  },
  {
    word: "maximal match",
    enTrans:
      "In a graph, any matching that leaves no pair of unmatched vertices that are connected. A maximal matching is not necessarily a maximum match. In other words, there might be a larger matching than the maximal matching that was found.",
  },
  {
    word: "maximum lower bound",
    enTrans:
      "The lower bound for the problem of finding the maximum value in an unsorted list is \nΩ(n)\nΩ(n)\n.",
  },
  {
    word: "maximum match",
    enTrans: "In a graph, the largest possible matching.",
  },
  {
    word: "MCST",
  },
  {
    word: "MST",
    enTrans: "Abbreviation for minimal-cost spanning tree.",
  },
  {
    word: "measure of cost",
    enTrans:
      "When comparing two things, such as two algorithms, some event or unit must be used as the basic unit of comparison. It might be number of milliseconds needed or machine instructions expended by a program, but it is usually desirable to have a way to do comparison between two algorithms without writing a program. Thus, some other measure of cost might be used as a basis for comparison between the algorithms. For example, when comparing two sorting algorthms it is traditional to use as a measure of cost the number of comparisons made between the key values of record pairs.",
  },
  {
    word: "member",
    enTrans:
      "In set notation, this is a synonym for element. In abstract design, a data item is a member of a type. In an object-oriented language, data members are data fields in an object.",
  },
  {
    word: "member function",
    enTrans:
      "Each operation associated with the ADT is implemented by a member function or method.",
  },
  {
    word: "memory allocation",
    enTrans: "In a memory manager, the act of honoring a request for memory.",
  },
  {
    word: "memory deallocation",
    enTrans:
      "In a memory manager, the act of freeing a block of memory, which should create or add to a free block.",
  },
  {
    word: "memory hierarchy",
    enTrans:
      "The concept that a computer system stores data in a range of storage types that range from fast but expensive (primary storage) to slow but cheap (secondary storage). When there is too much data to store in primary storage, the goal is to have the data that is needed soon or most often in the primary storage as much as possible, by using caching techniques.",
  },
  {
    word: "memory leak",
    enTrans:
      "In programming, the act of creating garbage. In languages such as C and C++ that do not support garbage collection, repeated memory leaks will evenually cause the program to terminate.",
  },
  {
    word: "memory manager",
    enTrans:
      "Functionality for managing a memory pool. Typically, the memory pool is viewed as an array of bytes by the memory manager. The client of the memory manager will request a collection of (adjacent) bytes of some size, and release the bytes for reuse when the space is no longer needed. The memory manager should not know anything about the interpretation of the data that is being stored by the client into the memory pool. Depending on the precise implementation, the client might pass in the data to be stored, in which case the memory manager will deal with the actual copy of the data into the memory pool. The memory manager will return to the client a handle that can later be used by the client to retrieve the data.",
  },
  {
    word: "memory pool",
    enTrans:
      "Memory (usually in RAM but possibly on disk or peripheral storage device) that is logically viewed as an array of memory positions. A memory pool is usually managed by a memory manager.",
  },
  {
    word: "memory request",
    enTrans:
      "In a memory manager, a request from some client to the memory manager to reserve a block of memory and store some bytes there.",
  },
  {
    word: "merge insert sort",
    enTrans: "A synonym for the Ford and Johnson sort.",
  },
  {
    word: "Mergesort",
    enTrans:
      "A sorting algorithm that requires \nΘ(nlogn)\nΘ(nlog⁡n)\n in the best, average, and worst cases. Conceptually it is simple: Split the list in half, sort the halves, then merge them together. It is a bit complicated to implement efficiently on an array.",
  },
  {
    word: "message",
    enTrans:
      "In a memory manager implementation (particularly a memory manager implemented with a message passing style of interface), the message is the data that the client of the memory manager wishes to have stored in the memory pool. The memory manager will reply to the client by returning a handle that defines the location and size of the message as stored in the memory pool. The client can later recover the message by passing the handle back to the memory manager.",
  },
  {
    word: "message passing",
    enTrans:
      "A common approach to implementing the ADT for a memory manager or buffer pool, where the contents of a message to be stored is explicitly passed between the client and the memory manager. This is in contrast to a buffer passing approach.",
  },
  {
    word: "metaphor",
    enTrans:
      "Humans deal with complexity by assigning a label to an assembly of objects or concepts and then manipulating the label in place of the assembly. Cognitive psychologists call such a label a metaphor.",
  },
  {
    word: "method",
    enTrans:
      "In the object-oriented programming paradigm, a method is an operation on a class. A synonym for member function.",
  },
  {
    word: "mid-square method",
    enTrans:
      "In hashing, an approach to implementing a hash function. The key value is squared, and some number of bits from the middle of the resulting value are extracted as the hash code. Some care must be taken to extract bits that tend to actually be in the middle of the resulting value, which requires some understanding of the typical key values. When done correctly, this has the advantage of having the hash code be affected by all bits of the key",
  },
  {
    word: "min heap",
    enTrans:
      "A heap where every node has a key value less than its children. As a consequence, the node with minimum key value is at the root.",
  },
  {
    word: "minimal-cost spanning tree",
    enTrans:
      "Abbreviated as MCST, or sometimes as MST. Derived from a weighted graph, the MCST is the subset of the graph’s edges that maintains the connectivitiy of the graph while having lowest total cost (as defined by the sum of the weights of the edges in the MCST). The result is referred to as a tree because it would never have a cycle (since an edge could be removed from the cycle and still preserve connectivity). Two algorithms to solve this problem are Prim’s algorithm and Kruskal’s algorithm.",
  },
  {
    word: "minimum external path weight",
    enTrans:
      "Given a collection of objects, each associated with a leaf node in a tree, the binary tree with minimum external path weight is the one with the minimum sum of weighted path lengths for the given set of leaves. This concept is used to create a Huffman coding tree, where a letter with high weight should have low depth, so that it will count the least against the total path length. As a result, another letter might be pushed deeper in the tree if it has less weight.",
  },
  {
    word: "mod",
    enTrans: "Abbreviation for the modulus function.",
  },
  {
    word: "model",
    enTrans:
      "A simplification of reality that preserves only the essential elements. With a model, we can more easily focus on and reason about these essentials. In algorithm analysis, we are especially concerned with the cost model for measuring the cost of an algorithm.",
  },
  {
    word: "modulus",
    enTrans:
      "The modulus function returns the remainder of an integer division. Sometimes written \nnmodm\nnmodm\n in mathematical expressions, the syntax in many programming languages is n % m.",
  },
  {
    word: "Monte Carlo algorithms",
    enTrans:
      "A form of randomized algorithm. We find the maximum value fast, or we don’t get an answer at all (but fast). While such algorithms have good running time, their result is not guaranteed.",
  },
  {
    word: "move-to-front",
    enTrans:
      "A heuristic used to maintain a self-organizing list. Under this heuristic, whenever a record is accessed it is moved to the front of the list. Analogous to the least recently used heuristic for maintaining a buffer pool.",
  },
  {
    word: "multi-dimensional search key",
    enTrans:
      "A search key containing multiple parts, that works in conjunction with a multi-dimensional search structure. Most typically, a spatial search key representing a position in multi-dimensional (2 or 3 dimensions) space. But a multi-dimensional key could be used to organize data within non-spatial dimensions, such as temperature and time.",
  },
  {
    word: "multi-dimensional search structure",
    enTrans:
      "A data structure used to support efficient search on a multi-dimensional search key. The main concept here is that a multi-dimensional search structure works more efficiently by considering the multiple parts of the search key as a whole, rather than making independent searches on each one-dimensional component of the key. A primary example is a spatial data structure that can efficiently represent and search for records in multi-dimensional space.",
  },
  {
    word: "multilist",
    enTrans:
      "A list that may contain sublists. This term is sometimes used as a synonym to the term bag.",
  },
  {
    word: "natural numbers",
    enTrans: "Zero and the positive integers.",
  },
  {
    word: "necessary fallacy",
    enTrans:
      "A common mistake in a lower bounds proof for a problem, where the proof makes an inappropriate assumption that any algorithm must operate in some manner (typically in the way that some known algorithm behaves).",
  },
  {
    word: "neighbor",
    enTrans:
      "In a graph, a node \nw\nw\n is said to be a neighbor of node \nv\nv\n if there is an edge from \nv\nv\n to \nw\nw\n.",
  },
  {
    word: "node",
    enTrans:
      "The objects that make up a linked structure such as a linked list or binary tree. Typically, nodes are allocated using dynamic memory allocation. In graph terminology, the nodes are more commonly called vertices.",
  },
  {
    word: "non-deterministic",
    enTrans:
      "In a finite automata, at least one state has multiple transitions on at least one symbol. This means that it is not deterministic about what transition to take in that situation. A non-deterministic machine is said to accept a string if it completes execution on the string in an accepting state under at least one choice of non-deterministic transitions. Generally, non-determinism can be simulated with a deterministic machine by alternating between the execution that would take place under each of the branching choices.",
  },
  {
    word: "non-deterministic algorithm",
    enTrans:
      "An algorithm that may operate using a non-deterministic choice operation.",
  },
  {
    word: "non-deterministic choice",
    enTrans:
      "An operation that captures the concept of nondeterminism. A nondeterministic choice can be viewed as either “correctly guessing” between a set of choices, or implementing each of the choices in parallel. In the parallel view, the nondeterminism was successful if at least one of the choices leads to a correct answer.",
  },
  {
    word: "non-deterministic polynomial time algorithm",
    enTrans:
      "An algorithm that runs in polynomial time, and which may (or might not) use non-deterministic choice.",
  },
  {
    word: "non-strict partial order",
    enTrans:
      "In set notation, a relation that is reflexive, antisymmetric, and transitive.",
  },
  {
    word: "non-terminal",
    enTrans:
      "In contrast to a terminal, a non-terminal is an abstract state in a production rule. Begining with the start symbol, all non-terminals must be converted into terminals in order to complete a derivation.",
  },
  {
    word: "NP",
    enTrans: "An abbreviation for non-deterministic polynomial.",
  },
  {
    word: "NP-Complete",
    enTrans:
      "A class of problems that are related to each other in this way: If ever one such problem is proved to be solvable in polynomial time, or proved to require exponential time, then all other NP-Complete problems will cost likewise. Since so many real-world problems have been proved to be NP-Complete, it would be extremely useful to determine if they have polynomial or exponential cost. But so far, nobody has been able to determine the truth of the situation. A more technical definition is that a problem is NP-Complete if it is in NP and is NP-hard.",
  },
  {
    word: "NP-Completeness proof",
    enTrans:
      "A type of reduction used to demonstrate that a particular problem is NP-complete. Specifically, an NP-Completeness proof must first show that the problem is in class NP, and then show (by using a reduction to another NP-Complete problem) that the problem is NP-hard.",
  },
  {
    word: "NP-hard",
    enTrans:
      "A problem that is “as hard as” any other problem in NP. That is, Problem X is NP-hard if any algorithm in NP can be reduced to X in polynomial time.",
  },
  {
    word: "nth roots of unity",
    enTrans:
      "All of the points along the unit circle in the complex plane that represent multiples of the primitive nth root of unity.",
  },
  {
    word: "object",
    enTrans:
      "An instance of a class, that is, something that is created and takes up storage during the execution of a computer program. In the object-oriented programming paradigm, objects are the basic units of operation. Objects have state in the form of data members, and they know how to perform certain actions (methods).",
  },
  {
    word: "object-oriented programming paradigm",
    enTrans:
      "An approach to problem-solving where all computations are carried out using objects.",
  },
  {
    word: "object-space decomposition",
    enTrans:
      "A from of key-space decomposition where the key space is determined by the actual values of keys that are found. For example, a BST stores a key value in its root, and all other values in the tree with lesser value are in the left subtree. Thus, the root value has split (or decomposed) the key space for that key based on its value into left and right parts. An object-space decomposition is in opposition to an image-space decomposition.",
  },
  {
    word: "octree",
    enTrans:
      "The three-dimensional equivalent of the quadtree would be a tree with \n2\n3\n23\n or eight branches.",
  },
  {
    word: "Omega notation",
    enTrans:
      "In algorithm analysis, \nΩ\nΩ\n notation is used to describe a lower bound. Roughly (but not completely) analogous to big-Oh notation used to define an upper bound.",
  },
  {
    word: "one-way list",
    enTrans: "A synonym for a singly linked list.",
  },
  {
    word: "open addressing",
    enTrans: "A synonym for closed hashing.",
  },
  {
    word: "open hash system",
    enTrans:
      "A hash system where multiple records might be associated with the same slot of a hash table. Typically this is done using a linked list to store the records. This is in contrast to a closed hash system.",
  },
  {
    word: "operating system",
    enTrans:
      "The control program for a computer. Its purpose is to control hardware, manage resources, and present a standard interface to these to other software components.",
  },
  {
    word: "optimal static ordering",
    enTrans:
      "A theoretical construct defining the best static (non-changing) order in which to place a collection of records so as to minimize the number of records visited by a series of sequential searches. It is a useful concept for the purpose of defining a theoretical optimum against which to compare the performance for a self-organizing list heuristic.",
  },
  {
    word: "optimization problem",
    enTrans:
      "Any problem where there are a (typically large) collection of potential solutions, and the goal is to find the best solution. An example is the Traveling Salesman Problem, where visiting \nn\nn\n cities in some order has a cost, and the goal is to visit in the cheapest order.",
  },
  {
    word: "out degree",
    enTrans:
      "In graph terminology, the out degree for a vertex is the number of edges directed out of the vertex.",
  },
  {
    word: "overflow",
    enTrans:
      "The condition where the amount of data stored in an entity has exceeded its capacity. For example, a node in a B-tree can store a certain number of records. If a record is attempted to be inserted into a node that is full, then something has to be done to handle this case.",
  },
  {
    word: "overflow bucket",
    enTrans:
      "In bucket hashing, this is the bucket into which a record is placed if the bucket containing the record’s home slot is full. The overflow bucket is logically considered to have infinite capacity, though in practice search and insert will become relatively expensive if many records are stored in the overflow bucket.",
  },
  {
    word: "overhead",
    enTrans:
      "All information stored by a data structure aside from the actual data. For example, the pointer fields in a linked list or BST, or the unused positions in an array-based list.",
  },
  {
    word: "page",
    enTrans:
      "A term often used to refer to the contents of a single buffer within a buffer pool or other virtual memory. This corresponds to a single block or sector of data from backing storage, which is the fundamental unit of I/O.",
  },
  {
    word: "parameter",
    enTrans: "The values making up an input to a function.",
  },
  {
    word: "parent",
    enTrans:
      "In a tree, the node \nP\nP\n that directly links to a node \nA\nA\n is the parent of \nA\nA\n. \nA\nA\n is the child of \nP\nP\n.",
  },
  {
    word: "parent pointer representation",
    enTrans:
      "For trees, a node implementation where each node stores only a pointer to its parent, rather than to its children. This makes it easy to go up the tree toward the root, but not down the tree toward the leaves. This is most appropriate for solving the UNION/FIND problem.",
  },
  {
    word: "parity",
    enTrans:
      "The concept of matching even-ness or odd-ness, the basic idea behind using a parity bit for error detection.",
  },
  {
    word: "parity bit",
    enTrans:
      "A common method for checking if transmission of a sequence of bits has been performed correctly. The idea is to count the number of 1 bits in the sequence, and set the parity bit to 1 if this number is odd, and 0 if it is even. Then, the transmitted sequence of bits can be checked to see if its parity matches the value of the parity bit. This will catch certain types of errors, in particular if the value for a single bit has been reversed. This was used, for example, in early versions of ASCII character coding.",
  },
  {
    word: "parse tree",
    enTrans:
      "A tree that represents the syntactic structure of an input string, making it easy to compare against a grammar to see if it is syntactically correct.",
  },
  {
    word: "parser",
    enTrans:
      "A part of a compiler that takes as input the program text (or more typically, the tokens from the scanner), and verifies that the program is syntactically correct. Typically it will build a parse tree as part of the process.",
  },
  {
    word: "partial order",
    enTrans:
      "In set notation, a binary relation is called a partial order if it is antisymmetric and transitive. If the relation is also reflexive, then it is a non-strict partial order. Alternatively, if the relation is also irreflexive, then it is a strict partial order.",
  },
  {
    word: "partially ordered set",
    enTrans:
      "The set on which a partial order is defined is called a partially ordered set.",
  },
  {
    word: "partition",
    enTrans:
      "In Quicksort, the process of splitting a list into two sublists, such that one sublist has values less than the pivot value, and the other with values greater than the pivot. This process takes \nΘ(i)\nΘ(i)\n time on a sublist of length \ni\ni\n.",
  },
  {
    word: "pass by reference",
    enTrans:
      "A reference to the variable is passed to the called function. So, any modifications will affect the original variable.",
  },
  {
    word: "pass by value",
    enTrans:
      "A copy of a variable is passed to the called function. So, any modifications will not affect the original variable.",
  },
  {
    word: "path",
    enTrans:
      "In tree or graph terminology, a sequence of vertices \nv\n1\n,\nv\n2\n,...,\nv\nn\nv1,v2,...,vn\n forms a path of length \nn−1\nn−1\n if there exist edges from \nv\ni\nvi\n to \nv\ni+1\nvi+1\n for \n1≤i<n\n1≤i<n\n.",
  },
  {
    word: "path compression",
    enTrans:
      "When implementing the UNION/FIND algorithm, path compression is a local optimization step that can be performed during the FIND step. Once the root of the tree for the current object has been found, the path to the root can be traced a second time, with all objects in the tree made to point directly to the root. This reduces the depth of the tree from typically \nΘ(logn)\nΘ(log⁡n)\n to nearly constant.",
  },
  {
    word: "peripheral storage",
    enTrans:
      "Any storage device that is not part of the core processing of the computer (that is, RAM). A typical example is a disk drive.",
  },
  {
    word: "permutation",
    enTrans:
      "A permutation of a sequence \nS\nS\n is the elements of \nS\nS\n arranged in some order.",
  },
  {
    word: "persistent",
    enTrans:
      "In the context of computer memory, this refers to a memory that does not lose its stored information when the power is turned off.",
  },
  {
    word: "physical file",
    enTrans:
      "The collection of sectors that comprise a file on a disk drive. This is in contrast to the logical file.",
  },
  {
    word: "physical form",
    enTrans:
      "The implementation of a data type as a data structure. Contrast to the physical form for the data type.",
  },
  {
    word: "Pigeonhole Principle",
    enTrans:
      "A commonly used lemma in Mathematics. A typical variant states: When \nn+1\nn+1\n objects are stored in \nn\nn\n locations, at least one of the locations must store two or more of the objects.",
  },
  {
    word: "pivot",
    enTrans:
      "In Quicksort, the value that is used to split the list into sublists, one with lesser values than the pivot, the other with greater values than the pivot.",
  },
  {
    word: "platter",
    enTrans:
      "In a disk drive, one of a series of flat disks that comprise the storage space for the drive. Typically, each surface (top and bottom) of each platter stores data, and each surface has its own I/O head.",
  },
  {
    word: "point quadtree",
    enTrans:
      "A spatial data structure for storing point data. It is similar to a PR quadtree in that it (in two dimensions) splits the world into four parts. However, it splits using an object-space decomposition. That is, quadrant containing the point is split into four parts at the point. It is similar to the kd tree which splits alternately in each dimension, except that it splits in all dimensions at once.",
  },
  {
    word: "point-region quadtree",
    enTrans: "Formal name for what is commonly referred to as a PR quadtree.",
  },
  {
    word: "pointee",
    enTrans:
      "The term pointee refers to anything that is pointed to by a pointer or reference.",
  },
  {
    word: "pointer",
    enTrans:
      "A variable whose value is the address of another variable; a link.",
  },
  {
    word: "pointer-based implementation for binary tree nodes",
    enTrans:
      "A common way to implement binary tree nodes. Each node stores a data value (or a reference to a data value), and pointers to the left and right children. If either or both of the children does not exist, then a null pointer is stored.",
  },
  {
    word: "polymorphism",
    enTrans:
      "An object-oriented programming term meaning one name, many forms. It describes the ability of software to change its behavior dynamically. Two basic forms exist: run-time polymorphism and compile-time polymorphism.",
  },
  {
    word: "pop",
    enTrans:
      "A specialized term used to indicate removing an element from a stack.",
  },
  {
    word: "poset",
    enTrans: "Another name for a partially ordered set.",
  },
  {
    word: "position",
    enTrans:
      "The defining property of the list ADT, this is the concept that list elements are in a position. Many list ADTs support access by position.",
  },
  {
    word: "postorder traversal",
    enTrans:
      "In a binary tree, a traversal that first recursively visits the left child, then recursively visits the right child, and then visits the root.",
  },
  {
    word: "potential",
    enTrans:
      "A concept related to amortized analysis. Potential is the total or currently available amount of work that can be done.",
  },
  {
    word: "powerset",
    enTrans:
      "For a set \nS\nS\n, the power set is the set of all possible subsets for \nS\nS\n.",
  },
  {
    word: "PR quadtree",
    enTrans:
      "A type of quadtree that stores point data in two dimensions. The root of the PR quadtree represents some square region of 2d space. If that space stores more than one data point, then the region is decomposed into four equal subquadrants, each represented recursively by a subtree of the PR quadtree. Since many leaf nodes of the PR quadtree will contain no data points, implementation often makes use of the Flyweight design pattern. Related to the bintree.",
  },
  {
    word: "prefix property",
    enTrans:
      "Given a collection of strings, the collection has the prefix property if no string in the collection is a prefix for another string in the collection. The significance is that, given a long string composed of members of the collection, it can be uniquely decomposed into the constituent members. An example of such a collection of strings with the prefix property is a set of Huffman codes.",
  },
  {
    word: "preorder traversal",
    enTrans:
      "In a binary tree, a traversal that first visits the root, then recursively visits the left child, then recursively visits the right child.",
  },
  {
    word: "Prim’s algorithm",
    enTrans:
      "A greedy algorithm for computing the MCST of a graph. It is nearly identical to Dijkstra’s algorithm for solving the single-source shortest paths problem, with the only difference being the calculation done to update the best-known distance.",
  },
  {
    word: "primary clustering",
    enTrans:
      "In hashing, the tendency in certain collision resolution methods to create clustering in sections of the hash table. The classic example is linear probing. This tends to happen when a group of keys follow the same probe sequence during collision resolution.",
  },
  {
    word: "primary index",
    enTrans: "Synonym for primary key index.",
  },
  {
    word: "primary key",
    enTrans: "A unique identifier for a record.",
  },
  {
    word: "primary key index",
    enTrans:
      "Relates each primary key value with a pointer to the actual record on disk.",
  },
  {
    word: "primary storage",
    enTrans:
      "The faster but more expensive memory in a computer, most often RAM in modern computers. This is in contrast to secondary storage, which together with primary storage devices make up the computer’s memory hierarchy.",
  },
  {
    word: "primitive data type",
    enTrans:
      "In Java, one of a particular group of simple types that are not implemented as objects. An example is an int.",
  },
  {
    word: "primitive element",
    enTrans:
      "In set notation, this is a single element that is a member of the base type for the set. This is as opposed to an element of the set being another set.",
  },
  {
    word: "primitive nth root of unity",
    enTrans:
      "The \nn\nn\n th root of 1. Normally a complex number. An intuitive way to view this is one \nn\nn\n th of the unit circle in the complex plain.",
  },
  {
    word: "priority",
    enTrans:
      "A quantity assigned to each of a collection of jobs or tasks that indicate importance for order of processing. For example, in an operating system, there could be a collection of processes (jobs) ready to run. The operating system must select the next task to execute, based on their priorities.",
  },
  {
    word: "priority queue",
    enTrans:
      "An ADT whose primary operations of insert of records, and deletion of the greatest (or, in an alternative implementation, the least) valued record. Most often implemented using the heap data structure. The name comes from a common application where the records being stored represent tasks, with the ordering values based on the priorities of the tasks.",
  },
  {
    word: "probabilistic algorithm",
    enTrans:
      "A form of randomized algorithm that might yield an incorrect result, or that might fail to produce a result.",
  },
  {
    word: "probabilistic data structure",
    enTrans:
      "Any data structure that uses probabilistic algorithms to perform its operations. A good example is the skip list.",
  },
  {
    word: "probe function",
    enTrans:
      "In hashing, the function used by a collision resolution method to calculate where to look next in the hash table.",
  },
  {
    word: "probe sequence",
    enTrans:
      "In hashing, the series of slots visited by the probe function during collision resolution.",
  },
  {
    word: "problem",
    enTrans:
      "A task to be performed. It is best thought of as a function or a mapping of inputs to outputs.",
  },
  {
    word: "problem instance",
    enTrans:
      "A specific selection of values for the parameters to a problem. In other words, a specific set of inputs to a problem. A given problem instance has a size under some cost model.",
  },
  {
    word: "problem lower bound",
    enTrans:
      "In algorithm analysis, the tightest lower bound that we can prove over all algorithms for that problem. This is often much harder to determine than the problem upper bound. Since the lower bound for the algorithm can be very different for different situations (such as the best case or worst case), we typically have to specify which situation we are referring to.",
  },
  {
    word: "problem upper bound",
    enTrans:
      "In algorithm analysis, the upper bound for the best algorithm that we know for the problem. Since the upper bound for the algorithm can be very different for different situations (such as the best case or worst case), we typically have to specify which situation we are referring to.",
  },
  {
    word: "procedural",
    enTrans:
      "Typically referring to the procedural programming paradigm, in contrast to the object-oriented programming paradigm.",
  },
  {
    word: "procedural programming paradigm",
    enTrans:
      "Procedural programming uses a list of instructions (and procedure calls) that define a series of computational steps to be carried out. This is in contrast to the object-oriented programming paradigm.",
  },
  {
    word: "production",
  },
  {
    word: "production rule",
    enTrans:
      "A grammar is comprised of production rules. The production rules consist of terminals and non-terminals, with one of the non-terminals being the start symbol. Each production rule replaces one or more non-terminals (perhaps with associated terminals) with one or more terminals and non-terminals. Depending on the restrictions placed on the form of the rules, there are classes of languages that can be represented by specific types of grammars. A derivation is a series of productions that results in a string (that is, all non-terminals), and this derivation can be represented as a parse tree.",
  },
  {
    word: "program",
    enTrans:
      "An instance, or concrete representation, of an algorithm in some programming language.",
  },
  {
    word: "promotion",
    enTrans:
      "In the context of certain balanced tree structures such as the 2-3 tree, a promotion takes place when an insertion causes the node to overflow. In the case of the 2-3 tree, the key with the middlemost value is sent to be stored in the parent.",
  },
  {
    word: "proof",
    enTrans: "The establishment of the truth of anything, a demonstration.",
  },
  {
    word: "proof by contradiction",
    enTrans:
      "A mathematical proof technique that proves a theorem by first assuming that the theorem is false, and then uses a chain of reasoning to reach a logical contradiction. Since when the theorem is false a logical contradiction arises, the conclusion is that the theorem must be true.",
  },
  {
    word: "proof by induction",
    enTrans:
      "A mathematical proof technique similar to recursion. It is used to prove a parameterized theorem \nS(n)\nS(n)\n, that is, a theorem where there is a induction variable involved (such as the sum of the numbers from 1 to \nn\nn\n). One first proves that the theorem holds true for a base case, then one proves the implication that whenever \nS(n)\nS(n)\n is true then \nS(n+1)\nS(n+1)\n is also true. Another variation is strong induction.",
  },
  {
    word: "proving the contrapositive",
    enTrans:
      "We can prove that \nP⇒Q\nP⇒Q\n by proving \n(not Q)⇒(not P)\n(not Q)⇒(not P)\n.",
  },
  {
    word: "pseudo polynomial",
    enTrans:
      "In complexity analysis, refers to the time requirements of an algorithm for an NP-Complete problem that still runs acceptably fast for practical application. An example is the standard dynamic programming algorithm for the knapsack problem.",
  },
  {
    word: "pseudo random",
    enTrans:
      "In random number theory this means that, given all past terms in the series, no future term of the series can be accurately predicted in polynomial time.",
  },
  {
    word: "pseudo-random probing",
    enTrans:
      "In hashing, this is a collision resolution method that stores a random permutation of the values 1 through the size of the hash table. Term \ni\ni\n of the probe sequence is simply the value of position \ni\ni\n in the permuation.",
  },
  {
    word: "push",
    enTrans:
      "A specialized term used to indicate inserting an element onto a stack.",
  },
  {
    word: "pushdown automata",
  },
  {
    word: "PDA",
    enTrans:
      "A type of Finite State Automata that adds a stack memory to the basic Deterministic Finite Automata machine. This extends the set of languages that can be recognize to the context-free languages.",
  },
  {
    word: "quadratic growth rate",
    enTrans:
      "A growth rate function of the form \nc\nn\n2\ncn2\n where \nn\nn\n is the input size and \nc\nc\n is a constant.",
  },
  {
    word: "quadratic probing",
    enTrans:
      "In hashing, this is a collision resolution method that computes term \ni\ni\n of the probe sequence using some quadratic equation \na\ni\n2\nb\ni+c\naib2i+c\n for suitable constants \na,b,c\na,b,c\n. The simplest form is simply to use \ni\n2\ni2\n as term \ni\ni\n of the probe sequence.",
  },
  {
    word: "quadtree",
    enTrans:
      "A full tree where each internal node has four children. Most typically used to store two dimensional spatial data. Related to the bintree. The difference is that the quadtree splits all dimensions simultaneously, while the bintree splits one dimension at each level. Thus, to extend the quadtree concept to more dimensions requires a rapid increase in the number of splits (for example, 8 in three dimensions).",
  },
  {
    word: "queue",
    enTrans:
      "A list-like structure in which elements are inserted only at one end, and removed only from the other one end.",
  },
  {
    word: "Quicksort",
    enTrans:
      "A sort that is \nΘ(nlogn)\nΘ(nlog⁡n)\n in the best and average cases, though \nΘ(\nn\n2\n)\nΘ(n2)\n in the worst case. However, a reasonable implmentation will make the worst case occur under exceedingly rare circumstances. Due to its tight inner loop, it tends to run better than any other known sort in general cases. Thus, it is a popular sort to use in code libraries. It works by divide and conquer, by selecting a pivot value, splitting the list into parts that are either less than or greater than the pivot, and then sorting the two parts.",
  },
  {
    word: "radix",
    enTrans:
      "Synonym for base. The number of digits in a number representation. For example, we typically represent numbers in base (or radix) 10. Hexidecimal is base (or radix) 16.",
  },
  {
    word: "radix sort",
    enTrans:
      "A sorting algorithm that works by processing records with \nk\nk\n digit keys in \nk\nk\n passes, where each pass sorts the records according to the current digit. At the end of the process, the records will be sorted. This can be efficient if the number of digits is small compared to the number of records. However, if the \nn\nn\n records all have unique key values, than at least \nΩ(logn)\nΩ(log⁡n)\n digits are required, leading to an \nΩ(nlogn)\nΩ(nlog⁡n)\n sorting algorithm that tends to be much slower than other sorting algorithms like Quicksort or mergesort.",
  },
  {
    word: "RAM",
    enTrans: "Abbreviation for Random Access Memory.",
  },
  {
    word: "random access",
    enTrans:
      "In file processing terminology, a disk access to a random position within the file. More generally, the ability to access an arbitrary record in the file.",
  },
  {
    word: "random access memory",
    enTrans:
      "Abbreviated RAM, this is the principle example of primary storage in a modern computer. Data access times are typically measured in billionths of a second (microseconds), which is roughly a million times faster than data access from a disk drive. RAM is where data are held for immediate processing, since access times are so much faster than for secondary storage. RAM is a typical part of a computer’s memory hierarchy.",
  },
  {
    word: "random permutation",
    enTrans:
      "One of the \nn!\nn!\n possible permutations for a set of \nn\nn\n element is selected in such a way that each permutation has equal probability of being selected.",
  },
  {
    word: "randomized algorithm",
    enTrans:
      "An algorithm that involves some form of randomness to control its behavior. The ultimate goal of a randomized algorithm is to improve performance over a deterministic algorithm to solve the same problem. There are a number of variations on this theme. A “Las Vegas algorithm” returns a correct result, but the amount of time required might or might not improve over a deterministic algorithm. A “Monte Carlo algorithm” is a form of probabilistic algorithm that is not guarenteed to return a correct result, but will return a result relatively quickly.",
  },
  {
    word: "range",
    enTrans: "The set of possible outputs for a function.",
  },
  {
    word: "range query",
    enTrans:
      "Records are returned if their relevant key value falls with a specified range.",
  },
  {
    word: "read/write head",
    enTrans: "Synonym for I/O head.",
  },
  {
    word: "rebalancing operation",
    enTrans:
      "An operation performed on balanced search trees, such as the AVL Tree or Splay Tree, for the purpose of keeping the tree height balanced.",
  },
  {
    word: "recognize",
    enTrans:
      "In the study of formal languages, the ability to reliably determine whether some string is in a given language or not.",
  },
  {
    word: "record",
    enTrans:
      "A collection of information, typically implemented as an object in an object-oriented programming language. Many data structures are organized containers for a collection of records.",
  },
  {
    word: "recurrence relation",
    enTrans:
      "A recurrence relation (or less formally, recurrence) defines a function by means of an expression that includes one or more (smaller) instances of itself. A classic example is the recursive definition for the factorial function, \nF(n)=n∗F(n−1)\nF(n)=n∗F(n−1)\n.",
  },
  {
    word: "recurrence with full history",
    enTrans:
      "A special form of recurrence relation that includes a summation with a copy of the recurrence inside. The recurrence that represents the average case cost for Quicksort is an example. This internal summation can typically be removed with simple techniques to simplify solving the recurrence.",
  },
  {
    word: "recursion",
    enTrans:
      "The process of using recursive calls. An algorithm is recursive if it calls itself to do part of its work. See recursion.",
  },
  {
    word: "recursive call",
    enTrans:
      "Within a recursive function, it is a call that the function makes to itself.",
  },
  {
    word: "recursive data structure",
    enTrans:
      "A data structure that is partially composed of smaller or simpler instances of the same data structure. For example, linked lists and binary trees can be viewed as recursive data structures.",
  },
  {
    word: "recursive function",
    enTrans: "A function that includes a recursive call.",
  },
  {
    word: "recursively enumerable",
    enTrans:
      "A language \nL\nL\n is recursively enumerable if there exists a Turing machine \nM\nM\n such that \nL=L(M)\nL=L(M)\n.",
  },
  {
    word: "Red-Black Tree",
    enTrans: "A balanced variation on a BST.",
  },
  {
    word: "reduction",
    enTrans:
      "In algorithm analysis, the process of deriving asymptotic bounds for one problem from the asymptotic bounds of another. In particular, if problem A can be used to solve problem B, and problem A is proved to be in \nO(f(n))\nO(f(n))\n, then problem B must also be in \nO(f(n))\nO(f(n))\n. Reductions are often used to show that certain problems are at least as expensive as sorting, or that certain problems are NP-Complete.",
  },
  {
    word: "reference",
    enTrans:
      "A value that enables a program to directly access some particular data item. An example might be a byte position within a file where the record is stored, or a pointer to a record in memory. (Note that Java makes a distinction between a reference and the concept of a pointer, since it does not define a reference to necessarily be a byte position in memory.)",
  },
  {
    word: "reference count algorithm",
    enTrans:
      "An algorithm for garbage collection. Whenever a reference is made from a variable to some memory location, a counter associated with that memory location is incremented. Whenever the reference is changed or deleted, the reference count is decremented. If this count goes to zero, then the memory is considered free for reuse. This approach can fail if there is a cycle in the chain of references.",
  },
  {
    word: "reference parameter",
    enTrans:
      "A parameter that has been passed by reference. Such a parameter can be modified inside the function or method.",
  },
  {
    word: "reflexive",
    enTrans:
      "In set notation, binary relation \nR\nR\n on set \nS\nS\n is reflexive if \naRa\naRa\n for all \na∈S\na∈S\n.",
  },
  {
    word: "Region Quadtree",
    enTrans:
      "A spatial data structure for storing 2D pixel data. The idea is that the root of the tree represents the entire image, and it is recursively divided into four equal subquadrants if not all pixels associated with the current node have the same value. This is structurally equivalent to a PR quadtree, only the decomposition rule is changed.",
  },
  {
    word: "regular expression",
    enTrans:
      "A way to specify a set of strings that define a language using the operators of union, contatenation, and star-closure. A regular expression defines some regular language.",
  },
  {
    word: "regular grammar",
    enTrans:
      "And grammar that is either right-regular or left-regular. Every regular grammar describes a regular language.",
  },
  {
    word: "regular language",
    enTrans:
      "A language \nL\nL\n is a regular language if and only if there exists a Deterministic Finite Automata \nM\nM\n such that \nL=L(M)\nL=L(M)\n.",
  },
  {
    word: "relation",
    enTrans:
      "In set notation, a relation \nR\nR\n over set \nS\nS\n is a set of tuples from \nS\nS\n.",
  },
  {
    word: "replacement selection",
    enTrans:
      "A variant of heapsort most often used as one phase of an external sort. Given a collection of records stored in an array, and a stream of additional records too large to fit into working memory, replacement selection will unload the heap by sending records to an output stream, and seek to bring new records into the heap from the input stream in preference to shrinking the heap size whenever possible.",
  },
  {
    word: "reserved block",
    enTrans:
      "In a memory manager, this refers to space in the memory pool that has been allocated to store data received from the client. This is in contrast to the free blocks that represent space in the memory pool that is not allocated to storing client data.",
  },
  {
    word: "resource constraints",
    enTrans:
      "Examples of resource constraints include the total space available to store the data (possibly divided into separate main memory and disk space constraints) and the time allowed to perform each subtask.",
  },
  {
    word: "root",
    enTrans:
      "In a tree, the topmost node of the tree. All other nodes in the tree are descendants of the root.",
  },
  {
    word: "rotation",
    enTrans:
      "In the AVL Tree and Splay Tree, a rotation is a local operation performed on a node, its children, and its grandchildren that can result in reordering their relationship. The goal of performing a rotation is to make the tree more balanced.",
  },
  {
    word: "rotational delay",
    enTrans:
      "When processing a disk access, the time that it takes for the first byte of the desired data to move to under the I/O head. On average, this will take one half of a disk rotation, and so constitutes a substantial portion of the time required for the disk access.",
  },
  {
    word: "rotational latency",
    enTrans: "A synonym for rotational delay.",
  },
  {
    word: "run",
    enTrans:
      "A series of sorted records. Most often this refers to a (sorted) subset of records that are being sorted by means of an external sort.",
  },
  {
    word: "run file",
    enTrans:
      "A temporary file that is created during the operation of an external sort, the run file contains a collection of runs. A common structure for an external sort is to first create a series of runs (stored in a run file), followed by merging the runs together.",
  },
  {
    word: "run-time polymorphism",
    enTrans:
      "A form of polymorphism known as Overriding. Overridden methods are those which implement a new method with the same signature as a method inherited from its base class. Compare to compile-time polymorphism.",
  },
  {
    word: "runtime environment",
    enTrans:
      "The environment in which a program (of a particular programming language) executes. The runtime environment handles such activities as managing the runtime stack, the free store, and the garbage collector, and it conducts the execution of the program.",
  },
  {
    word: "runtime stack",
    enTrans:
      "The place where an activation record is stored when a subroutine is called during a program’s runtime.",
  },
  {
    word: "scanner",
    enTrans:
      "The part of a compiler that is responsible for doing lexical analysis.",
  },
  {
    word: "scope",
    enTrans: "The parts of a program that can see and access a variable.",
  },
  {
    word: "search key",
    enTrans:
      "A field or part of a record that is used to represent the record when searching. For example, in a database of customer records, we might want to search by name. In this case the name field is used as the search key.",
  },
  {
    word: "search lower bound",
    enTrans:
      "The problem of searching in an array has provable lower bounds for specific variations of the problem. For an unsorted array, it is \nΩ(n)\nΩ(n)\n comparisons in the worst case, typically proved using an adversary argument. For a sorted array, it is \nΩ(logn)\nΩ(log⁡n)\n in the worst case, typically proved using an argument similar to the sorting lower bound proof. However, it is possible to search a sorted array in the average case in \nO(loglogn)\nO(log⁡log⁡n)\n time.",
  },
  {
    word: "search problem",
    enTrans:
      "Given a particular key value \nK\nK\n, the search problem is to locate a record \n(\nk\nj\n,\nI\nj\n)\n(kj,Ij)\n in some collection of records L such that \nk\nj\n=K\nkj=K\n (if one exists). Searching is a systematic method for locating the record (or records) with key value \nk\nj\n=K\nkj=K\n.",
  },
  {
    word: "search tree",
    enTrans:
      "A tree data structure that makes search by key value more efficient. A type of container, it is common to implement an index using a search tree. A good search tree implementation will guarentee that insertion, deletion, and search operations are all \nΘ(logn)\nΘ(log⁡n)\n.",
  },
  {
    word: "search trie",
    enTrans: "Any search tree that is a trie.",
  },
  {
    word: "searching",
    enTrans:
      "Given a search key \nK\nK\n and some collection of records L, searching is a systematic method for locating the record (or records) in L with key value \nk\nj\n=K\nkj=K\n.",
  },
  {
    word: "secondary clustering",
    enTrans:
      "In hashing, the tendency in certain collision resolution methods to create clustering in sections of the hash table. In primary clustering, this is caused by a cluster of keys that don’t necessarily hash to the same slot but which following significant portions of the same probe sequence during collision resolution. Secondary clustering results from the keys hashing to the same slot of the table (and so a collision resolution method that is not affected by the key value must use the same probe sequence for all such keys). This problem can be resolved by double hashing since its probe sequence is determined in part by a second hash function.",
  },
  {
    word: "secondary index",
    enTrans: "Synonym for secondary key index.",
  },
  {
    word: "secondary key",
    enTrans:
      "A key field in a record such as salary, where a particular key value might be duplicated in multiple records. A secondary key is more likely to be used by a user as a search key than is the record’s primary key.",
  },
  {
    word: "secondary key index",
    enTrans:
      "Associates a secondary key value with the primary key of each record having that secondary key value.",
  },
  {
    word: "secondary storage",
    enTrans:
      "Refers to slower but cheaper means of storing data. Typical examples include a disk drive, a USB memory stick, or a solid state drive.",
  },
  {
    word: "sector",
    enTrans:
      "A unit of space on a disk drive that is the amount of data that will be read or written at one time by the disk drive hardware. This is typically 512 bytes.",
  },
  {
    word: "sector header",
    enTrans:
      "On a disk drive, a piece of information at the start of a sector that allows the I/O head to recognize the identity (or equivalently, the address) of the current sector.",
  },
  {
    word: "seed",
    enTrans:
      "In random number theory, the starting value for a random number series. Typically used with any linear congruential method.",
  },
  {
    word: "seek",
    enTrans:
      "On a disk drive, the act of moving the I/O head from one track to another. This is usually considered the most expensive step during a disk access.",
  },
  {
    word: "selection sort",
    enTrans:
      "While this sort requires \nΘ(\nn\n2\n)\nΘ(n2)\n time in the best, average, and worst cases, it requires only \nΘ(n)\nΘ(n)\n swap operations. Thus, it does relatively well in applications where swaps are expensive. It can be viewed as an optimization on bubble sort, where a swap is deferred until the end of each iteration.",
  },
  {
    word: "self-organizing list",
    enTrans:
      "A list that, over a series of search operations, will make use of some heuristic to re-order its elements in an effort to improve search times. Generally speaking, search is done sequentially from the beginning, but the self-organizing heuristic will attempt to put the records that are most likely to be searched for at or near the front of the list. While typically not as efficient as binary search on a sorted list, self-organizing lists do not require that the list be sorted (and so do not pay the cost of doing the sorting operation).",
  },
  {
    word: "self-organizing list heuristic",
    enTrans:
      "A heuristic to use for the purpose of maintaining a self-organizing list. Commonly used heuristics include move-to-front and transpose.",
  },
  {
    word: "separate chaining",
    enTrans: "In hashing, a synonym for open hashing",
  },
  {
    word: "sequence",
    enTrans:
      "In set notation, a collection of elements with an order, and which may contain duplicate-valued elements. A sequence is also sometimes called a tuple or a vector.",
  },
  {
    word: "sequential access",
    enTrans:
      "In file processing terminology, the requirement that all records in a file are accessed in sequential order. Alternatively, a storage device that can only access data sequentially, such as a tape drive.",
  },
  {
    word: "sequential fit",
    enTrans:
      "In a memory manager, the process of searching the memory pool for a free block large enough to service a memory request, possibly reserving the remaining space as a free block. Examples are first fit, circular first fit, best fit, and worst fit.",
  },
  {
    word: "sequential search",
    enTrans:
      "The simplest search algorithm: In an array, simply look at the array elements in the order that they appear.",
  },
  {
    word: "sequential tree representation",
    enTrans:
      "A representation that stores a series of node values with the minimum information needed to reconstruct the tree structure. This is a technique for serializing a tree.",
  },
  {
    word: "serialization",
    enTrans:
      "The process of taking a data structure in memory and representing it as a sequence of bytes. This is sometimes done in order to transmit the data structure across a network or store the data structure in a stream, such as on disk. Deserialization reconstructs the original data structure from the serialized representation.",
  },
  {
    word: "set",
    enTrans: "A collection of distinguishable members or elements.",
  },
  {
    word: "set former",
    enTrans:
      "A way to define the membership of a set, by using a text description. Example: \n{x | x is a positive integer}\n{x | x is a positive integer}\n.",
  },
  {
    word: "set product",
    enTrans:
      "Written \nQ×P\nQ×P\n, the set product is a set of ordered pairs such that ordered pair \n(a,b)\n(a,b)\n is in the product whenever \na∈P\na∈P\n and \nb∈Q\nb∈Q\n. For example, when \nP={2,3,5}\nP={2,3,5}\n and \nQ={5,10}\nQ={5,10}\n, \nQ×P={(2,5), (2,10), (3,5), (3,10), (5,5), (5,10)}\nQ×P={(2,5), (2,10), (3,5), (3,10), (5,5), (5,10)}\n.",
  },
  {
    word: "shallow copy",
    enTrans:
      "Copying the reference or pointer value without copying the actual content.",
  },
  {
    word: "Shellsort",
    enTrans:
      "A sort that relies on the best-case cost of insertion sort to improve over \nΘ(\nn\n2\n)\nΘ(n2)\n worst case cost.",
  },
  {
    word: "shifting method",
    enTrans:
      "A technique for finding a closed-form solution to a summation or recurrence relation.",
  },
  {
    word: "shortest path",
    enTrans:
      "Given a graph with distances or weights on the edges, the shortest path between two nodes is the path with least total distance or weight. Examples of the shortest paths problems are the single-source shortest paths problem and the all-pairs shortest paths problem.",
  },
  {
    word: "sibling",
    enTrans:
      "In a tree, a sibling of node \nA\nA\n is any other node with the same parent as \nA\nA\n.",
  },
  {
    word: "signature",
    enTrans:
      "In a programming language, the signature for a function is its return type and its list of parameters and their types.",
  },
  {
    word: "signature file",
    enTrans:
      "In document processing, a signature file is a type of bitmap used to indicate which documents in a collection contain a given keyword, such that there is a bitmap for each keyword.",
  },
  {
    word: "simple cycle",
    enTrans:
      "In graph terminology, a cycle is simple if its corresponding path is simple, except that the first and last vertices of the cycle are the same.",
  },
  {
    word: "simple path",
    enTrans:
      "In graph terminology, a path is simple if all vertices on the path are distinct.",
  },
  {
    word: "simple type",
    enTrans:
      "A data type whose values contain no subparts. An example is the integers.",
  },
  {
    word: "simulating recursion",
    enTrans:
      "If a programming language does not support recursion, or if you want to implement the effects of recursion more efficiently, you can use a stack to maintain the collection of subproblems that would be waiting for completion during the recursive process. Using a loop, whenever a recursive call would have been made, simply add the necessary program state to the stack. When a return would have been made from the recursive call, pop the previous program state off of the stack.",
  },
  {
    word: "single rotation",
    enTrans:
      "A type of rebalancing operation used by the Splay Tree and AVL Tree.",
  },
  {
    word: "single-source shortest paths problem",
    enTrans:
      "Given a graph with weights or distances on the edges, and a designated start vertex \ns\ns\n, find the shortest path from \ns\ns\n to every other vertex in the graph. One algorithm to solve this problem is Dijkstra’s algorithm.",
  },
  {
    word: "singly linked list",
    enTrans:
      "A linked list implementation variant where each list node contains access an pointer only to the next element in the list.",
  },
  {
    word: "skip list",
    enTrans:
      "A form of linked list that adds additional links to improve the cost of fundamental operations like insert, delete, and search. It is a probabilistic data structure since it adds the additional links using a probabilistic algorithm. It can implement a dictionary more efficiently than a BST, and is roughly as difficult to implement.",
  },
  {
    word: "slot",
    enTrans: "In hashing, a position in a hash table.",
  },
  {
    word: "snowplow argument",
    enTrans:
      "An analogy used to give intuition for why replacement selection will generate runs that are on average twice the size of working memory. Records coming from the input stream have key values that might be of any size, whose size is related to the position of a falling snowflake. The replacement selection process is analogous to a snowplow that moves around a circular track picking up snow. In steady state, given a certain amount of snow equivalent to working memory size \nM\nM\n, an amount of snow (incoming records from the input stream) is expected to fall ahead of the plow as the size of the working memory during one cycle of the plow (analogously, one run of the replacement selection algorithm). Thus, the snowplow is expected in one pass (one run of replacement selection) to pick up \n2M\n2M\n snow.",
  },
  {
    word: "software engineering",
    enTrans:
      "The study and application of engineering to the design, development, and maintenance of software.",
  },
  {
    word: "software reuse",
    enTrans:
      "In software engineering, the concept of reusing a piece of software. In particular, using an existing piece of software (such as a function or library) when creating new software.",
  },
  {
    word: "solution space",
    enTrans:
      "The possible solutions to a problem. This typically refers to an optimization problem, where some solutions are more desireable than others.",
  },
  {
    word: "solution tree",
    enTrans:
      "An ordering imposed on the set of solutions within a solution space in the form of a tree, typically derived from the order that some algorithm would visit the solutions.",
  },
  {
    word: "sorted list",
    enTrans:
      "A list where the records stored in the list are arranged so that their key values are in ascending order. If the list uses an array-based list implementation, then it can use binary search for a cost of \nΘ(logn)\nΘ(log⁡n)\n. But both insertion and deletion will be require \nΘ(n)\nΘ(n)\n time.",
  },
  {
    word: "sorting lower bound",
    enTrans:
      "The lower bound for the problem of sorting is \nΩ(nlogn)\nΩ(nlog⁡n)\n. This is traditionally proved using a decision tree model for sorting algorithms, and recognizing that the minimum depth of the decision tree for any sorting algorithm is \nΩ(nlogn)\nΩ(nlog⁡n)\n since there are \nn!\nn!\n permutations of the \nn\nn\n input records to distinguish between during the sorting process.",
  },
  {
    word: "sorting problem",
    enTrans:
      "Given a set of records \nr\n1\nr1\n, \nr\n2\nr2\n, …, \nr\nn\nrn\n with key values \nk\n1\nk1\n, \nk\n2\nk2\n, …, \nk\nn\nkn\n, the sorting problem is to arrange the records into any order \ns\ns\n such that records \nr\ns\n1\nrs1\n, \nr\ns\n2\nrs2\n, …, \nr\ns\nn\nrsn\n have keys obeying the property \nk\ns\n1\n≤\nk\ns\n2\n≤...≤\nk\ns\nn\nks1≤ks2≤...≤ksn\n. In other words, the sorting problem is to arrange a set of records so that the values of their key fields are in non-decreasing order.",
  },
  {
    word: "space/time tradeoff",
    enTrans:
      "Many programs can be designed to either speed processing at the cost of additional storage, or reduce storage at the cost of additional processing time.",
  },
  {
    word: "sparse graph",
    enTrans:
      "A graph where the actual number of edges is much less than the possible number of edges. Generally, this is interpreted to mean that the degree for any vertex in the graph is relatively low.",
  },
  {
    word: "sparse matrix",
    enTrans:
      "A matrix whose values are mostly zero. There are a number of data structures that have been developed to store sparse matrices, with the goal of reducing the amount of space required to represent it as compared to simply using a regular matrix representation that stores a value for every matrix position.",
  },
  {
    word: "spatial",
    enTrans: "Referring to a position in space.",
  },
  {
    word: "spatial application",
    enTrans:
      "An application what has spatial aspects. In particular, an application that stores records that need to be searched by location.",
  },
  {
    word: "spatial attribute",
    enTrans:
      "An attribute of a record that has a position in space, such as the coordinate. This is typically in two or more dimensions.",
  },
  {
    word: "spatial data",
    enTrans: "Any object or record that has a position (in space).",
  },
  {
    word: "spatial data structure",
    enTrans:
      "A data structure designed to support efficient processing when a spatial attribute is used as the key. In particular, a data structure that supports efficient search by location, or finds all records within a given region in two or more dimensions. Examples of spatial data structures to store point data include the bintree, the PR quadtree and the kd tree.",
  },
  {
    word: "spindle",
    enTrans: "The center of a disk drive that holds the platters in place.",
  },
  {
    word: "Splay Tree",
    enTrans:
      "A variant implementation for the BST, which differs from the standard BST in that it uses modified insert and remove methods in order to keep the tree balanced. Similar to an AVL Tree in that it uses the concept of rotations in the insert and remove operations. While a Splay Tree does not guarentee that the tree is balanced, it does guarentee that a series of \nn\nn\n operations on the tree will have a total cost of \nΘ(nlogn)\nΘ(nlog⁡n)\n cost, meaning that any given operation can be viewed as having amortized cost of \nΘ(logn)\nΘ(log⁡n)\n.",
  },
  {
    word: "splaying",
    enTrans: "The act of performing an rebalancing operation on a Splay Tree.",
  },
  {
    word: "stable",
    enTrans:
      "A sorting algorithm is said to be stable if it does not change the relative ordering of records with identical key values.",
  },
  {
    word: "stack",
    enTrans:
      "A list-like structure in which elements may be inserted or removed from only one end.",
  },
  {
    word: "stack frame",
    enTrans: "Frame of data that pushed into and poped from call stack",
  },
  {
    word: "stack variable",
    enTrans: "Another name for a local variable.",
  },
  {
    word: "stale pointer",
    enTrans:
      "Within the context of a buffer pool or memory manager, this means a reference to a buffer or memory location that is no longer valid. For example, a program might make a memory request to a buffer pool, and be given a reference to the buffer holding the requested data. Over time, due to inactivity, the contents of this buffer might be flushed. If the program holding the buffer reference then tries to access the contents of that buffer again, then the data contents will have changed. The possibility for this to occur depends on the design of the interface to the buffer pool system. Some designs make this impossible to occur. Other designs make it possible in an attempt to deliver greater performance.",
  },
  {
    word: "start state",
    enTrans:
      "In a finite automata, the designated state in which the machine will always begin a computation.",
  },
  {
    word: "start symbol",
    enTrans:
      "In a grammar, the designated non-terminal that is the intial point for deriving a string in the langauge.",
  },
  {
    word: "state",
    enTrans:
      "The condition that something is in at some point in time. In computing, this typically means the collective values of any existing variables at some point in time. In an automata, a state is an abstract condition, possibly with associated information, that is primarily defined in terms of the conditions that the automata may transition from its present state to another state. This type of state is generally represented by a node in the graph that represents the automata.",
  },
  {
    word: "State Machine",
    enTrans: "Synonym for finite automata.",
  },
  {
    word: "static",
    enTrans:
      "Something that is not changing (in contrast to dynamic). In computer programming, static normally refers to something that happens at compile time. For example, static analysis is analysis of the program’s text or structure, as opposed to its run-time behavior. Static binding or static memory allocation occurs at compile time.",
  },
  {
    word: "static scoping",
    enTrans: "A synonym for lexical scoping.",
  },
  {
    word: "Strassen’s algorithm",
    enTrans:
      "A recursive algorithm for matrix multiplication. When multiplying two \nn×n\nn×n\n matrices, this algorithm runs faster than the \nΘ(\nn\n3\n)\nΘ(n3)\n time required by the standard matrix multiplication algorithm. Specifically, Strassen’s algorithm requires time \nTheta(\nn\nlog\n2\n7\n)\nTheta(nlog2⁡7)\n time. This is achieved by refactoring the sub-matrix multiplication and addition operations so as to need only 7 sub-matrix multiplications instead of 8, at a cost of additional sub-matrix addition operations. Thus, while the asymptotic cost is lower, the constant factor in the growth rate equation is higher. This makes Strassen’s algorithm inefficient in practice unless the arrays being multiplied are rather large. Variations on Strassen’s algorithm exist that reduce the number of sub-matrix multiplications even futher at a cost of even more sub-matrix additions.",
  },
  {
    word: "strategy",
    enTrans:
      "An approach to accomplish a task, often encapsulated as an algorithm. Also the name for a design pattern that separates the algorithm for performing a task from the control for applying that task to each member of a collection. A good example is a generic sorting function that takes a collection of records (such as an array) and a “strategy” in the form of an algorithm that knows how to extract the key from a record in the array. Only subtly different from the visitor design pattern, where the difference is primarily one of intent rather than syntax. The strategy design pattern is focused on encapsulating an activity that is part of a larger process, so that different ways of performing that activity can be substituted. The visitor design pattern is focused on encapsulating an activity that will be performed on all members of a collection so that completely different activities can be substituted within a generic method that accesses all of the collection members.",
  },
  {
    word: "stream",
    enTrans: "The process of delivering content in a serialized form.",
  },
  {
    word: "strict partial order",
    enTrans:
      "In set notation, a relation that is irreflexive, antisymmetric, and transitive.",
  },
  {
    word: "strong induction",
    enTrans:
      "An alternative formulation for the induction step in a proof by induction. The induction step for strong induction is: If Thrm holds for all \nk,c≤k<n\nk,c≤k<n\n, then Thrm holds for \nn\nn\n.",
  },
  {
    word: "subclass",
    enTrans:
      "In object-oriented programming, any class within a class hierarchy that inherits from some other class.",
  },
  {
    word: "subgraph",
    enTrans:
      "A subgraph \nS\nS\n is formed from graph \nG\nG\n by selecting a subset \nV\ns\nVs\n of \nG\nG\n’s vertices and a subset \nE\ns\nEs\n of \nG\nG\n’s edges such that for every edge \ne∈\nE\ns\ne∈Es\n, both vertices of \ne\ne\n are in \nV\ns\nVs\n.",
  },
  {
    word: "subset",
    enTrans:
      "In set theory, a set \nA\nA\n is a subset of a set \nB\nB\n, or equivalently \nB\nB\n is a superset of \nA\nA\n, if all elements of \nA\nA\n are also elements of \nB\nB\n.",
  },
  {
    word: "subtract-and-guess",
    enTrans:
      "A technique for finding a closed-form solution to a summation or recurrence relation.",
  },
  {
    word: "subtree",
    enTrans:
      "A subtree is a subset of the nodes of a binary tree that includes some node \nR\nR\n of the tree as the subtree root along with all the descendants of \nR\nR\n.",
  },
  {
    word: "successful search",
    enTrans:
      "When searching for a key value in a collection of records, we might find it. If so, we call this a successful search. The alternative is an unsuccessful search.",
  },
  {
    word: "summation",
    enTrans:
      "The sum of costs for some function applied to a range of parameter values. Often written using Sigma notation. For example, the sum of the integers from 1 to \nn\nn\n can be written as \n∑\nn\ni=1\ni\n∑i=1ni\n.",
  },
  {
    word: "superset",
    enTrans:
      "In set theory, a set \nA\nA\n is a subset of a set \nB\nB\n, or equivalently \nB\nB\n is a superset of \nA\nA\n, if all elements of \nA\nA\n are also elements of \nB\nB\n.",
  },
  {
    word: "symbol table",
    enTrans:
      "As part of a compiler, the symbol table stores all of the identifiers in the program, along with any necessary information needed about the identifier to allow the compiler to do its job.",
  },
  {
    word: "symmetric",
    enTrans:
      "In set notation, relation \nR\nR\n is symmetric if whenever \naRb\naRb\n, then \nbRa\nbRa\n, for all \na,b∈S\na,b∈S\n.",
  },
  {
    word: "symmetric matrix",
    enTrans:
      "A square matrix that is equal to its transpose. Equivalently, for a \nn×n\nn×n\n matrix \nA\nA\n, for all \ni,j<n\ni,j<n\n, \nA[i,j]=A[j,i]\nA[i,j]=A[j,i]\n.",
  },
  {
    word: "syntax analysis",
    enTrans:
      "A phase of compilation that accepts tokens, checks if program is syntactically correct, and then generates a parse tree.",
  },
  {
    word: "tail",
    enTrans: "The end of a list.",
  },
  {
    word: "terminal",
    enTrans:
      "A specific character or string that appears in a production rule. In contrast to a non-terminal, which represents an abstract state in the production. Similar to a literal, but this is the term more typically used in the context of a compiler.",
  },
  {
    word: "testing",
    enTrans:
      "Determining whether a program operates as we intend. This is in contrast to debugging.",
  },
  {
    word: "Theta notation",
    enTrans:
      "In algorithm analysis, \nΘ\nΘ\n notation is used to indicate that the upper bound and lower bound for an algorithm or problem match.",
  },
  {
    word: "token",
    enTrans:
      "The basic logical units of a program, as deterimined by lexical analysis. These are things like arithmetic operators, language keywords, variable or function names, or numbers.",
  },
  {
    word: "tombstone",
    enTrans:
      "In hashing, a tombstone is used to mark a slot in the hash table where a record has been deleted. Its purpose is to allow the collision resolution process to probe through that slot (so that records further down the probe sequence are not unreachable after deleting the record), while also allowing the slot to be reused by a future insert operation.",
  },
  {
    word: "topological sort",
    enTrans:
      "The process of laying out the vertices of a DAG in a linear order such that no vertex \nA\nA\n in the order is preceded by a vertex that can be reached by a (directed) path from \nA\nA\n. Usually the (directed) edges in the graph define a prerequisite system, and the goal of the topological sort is to list the vertices in an order such that no prerequisites are violated.",
  },
  {
    word: "total order",
    enTrans:
      "A binary relation on a set where every pair of distinct elements in the set are comparable (that is, one can determine which of the pair is greater than the other).",
  },
  {
    word: "total path length",
    enTrans: "In a tree, the sum of the levels for each node.",
  },
  {
    word: "Towers of Hanoi problem",
    enTrans:
      "A standard example of a recursive algorithm. The problem starts with a stack of disks (each with unique size) stacked decreasing order on the left pole, and two additional poles. The problem is to move the disks to the right pole, with the constraints that only one disk can be moved at a time and a disk may never be on top of a smaller disk. For \nn\nn\n disks, this problem requires \nΘ(\n2\nn\n)\nΘ(2n)\n moves. The standard solution is to move \nn−1\nn−1\n disks to the middle pole, move the bottom disk to the right pole, and then move the \nn−1\nn−1\n disks on the middle pole to the right pole.",
  },
  {
    word: "track",
    enTrans:
      "On a disk drive, a concentric circle representing all of the sectors that can be viewed by the I/O head as the disk rotates. The significance is that, for a given placement of the I/O head, the sectors on the track can be read without performing a (relatively expensive) seek operation.",
  },
  {
    word: "track-to-track seek time",
    enTrans:
      "Expected (average) time to perform a seek operation from a random track to an adjacent track. Thus, this can be viewed as the minimum possible seek time for the disk drive. This is one of two metrics commonly provided by disk drive vendors for disk drive performance, with the other being average seek time.",
  },
  {
    word: "trailer node",
    enTrans:
      "Commonly used in implementations for a linked list or related structure, this node follows the last element of the list. Its purpose is to simplify the code implementation by reducing the number of special cases that must be programmed for.",
  },
  {
    word: "transducer",
    enTrans:
      "A machine that takes an input and creates an output. A Turing Machine is an example of a transducer.",
  },
  {
    word: "transitive",
    enTrans:
      "In set notation, relation \nR\nR\n is transitive if whenever \naRb\naRb\n and \nbRc\nbRc\n, then \naRc\naRc\n, for all \na,b,c∈S\na,b,c∈S\n.",
  },
  {
    word: "transpose",
    enTrans:
      "In the context of linear algebra, the transpose of a matrix \nA\nA\n is another matrix \nA\nT\nAT\n created by writing the rows of \nA\nA\n as the columns of \nA\nT\nAT\n. In the context of a self-organizing list, transpose is a heuristic used to maintain the list. Under this heuristic, whenever a record is accessed it is moved one position closer to the front of the list.",
  },
  {
    word: "trap state",
    enTrans:
      "In a FSA, any state that has all transitions cycle back to itself. Such a state might be final.",
  },
  {
    word: "traversal",
    enTrans:
      "Any process for visiting all of the objects in a collection (such as a tree or graph) in some order.",
  },
  {
    word: "tree",
    enTrans:
      "A tree \nT\nT\n is a finite set of one or more nodes such that there is one designated node \nR\nR\n, called the root of \nT\nT\n. If the set \n(T−{R})\n(T−{R})\n is not empty, these nodes are partitioned into \nn>0\nn>0\n disjoint sets \nT\n0\nT0\n, \nT\n1\nT1\n, …, \nT\nn−1\nTn−1\n, each of which is a tree, and whose roots \nR\n1\n,\nR\n2\n,...,\nR\nn\nR1,R2,...,Rn\n, respectively, are children of \nR\nR\n.",
  },
  {
    word: "tree traversal",
    enTrans:
      "A traversal performed on a tree. Traditional tree traversals include preorder and postorder traversals for both binary and general trees, and inorder traversal that is most appropriate for a BST.",
  },
  {
    word: "trie",
    enTrans:
      "A form of search tree where an internal node represents a split in the key space at a predetermined location, rather than split based on the actual key values seen. For example, a simple binary search trie for key values in the range 0 to 1023 would store all records with key values less than 512 on the left side of the tree, and all records with key values equal to or greater than 512 on the right side of the tree. A trie is always a full tree. Folklore has it that the term comes from “retrieval”, and should be pronounced as “try” (in contrast to “tree”, to distinguish the differences in the space decomposition method of a search tree versus a search trie). The term “trie” is also sometimes used as a synonym for the alphabet trie.",
  },
  {
    word: "truth table",
    enTrans:
      "In symbolic logic, a table that contains as rows all possible combinations of the boolean variables, with a column that shows the outcome (true or false) for the expression when given that row’s truth assignment for the boolean variables.",
  },
  {
    word: "tuple",
    enTrans: "In set notation, another term for a sequence.",
  },
  {
    word: "Turing machine",
    enTrans:
      "A type of finite automata that, while simple to define completely, is capable of performing any computation that can be performed by any known computer.",
  },
  {
    word: "Turing-acceptable",
    enTrans:
      "A language is \nTuring−acceptable\nTuring−acceptable\n if there is some Turing machine that accepts it. That is, the machine will halt in an accepting configuration if the string is in the language, and go into a hanging configuration if the string is not in the language.",
  },
  {
    word: "Turing-computable function",
    enTrans:
      "Any function for which there exists a Turing machine that can perform the necessary work to compute the function.",
  },
  {
    word: "Turing-decidable",
    enTrans:
      "A language is Turing-decideable if there exists a Turing machine that can clearly indicate for every string whether that string is in the language or not. Every Turing-decidable language is also Turing-acceptable, because the Turing machine that can decide if the string is in the language can be modified to go into a hanging configuration if the string is not in the language.",
  },
  {
    word: "two-coloring",
    enTrans:
      "An assignment from two colors to regions in an image such that no two regions sharing a side have the same color.",
  },
  {
    word: "type",
    enTrans: "A collection of values.",
  },
  {
    word: "unary notation",
    enTrans:
      "A way to represent natural numbers, where the value of zero is represented by the empty string, and the value \nn\nn\n is represented by a series of \nn\nn\n marks.",
  },
  {
    word: "uncountably infinite",
  },
  {
    word: "uncountable",
    enTrans:
      "An infinite set is uncountably infinite if there does not exist any mapping from it to the set of integers. This is often proved using a diagonalization argument. The real numbers is an example of an uncountably infinite set.",
  },
  {
    word: "underflow",
    enTrans:
      "The condition where the amount of data stored in an entity has dropped below some minimum threshold. For example, a node in a B-tree is required to be at least half full. If a record deletion causes the node to be less than half full, then it is in a condition of underflow, and something has to be done to correct this.",
  },
  {
    word: "undirected edge",
    enTrans:
      "An edge that connects two vertices with no direction between them. Many graph representations will represent such an edge with two directed edges.",
  },
  {
    word: "undirected graph",
    enTrans: "A graph whose edges do not have a direction.",
    trans: "无向图",
  },
  {
    word: "uninitialized",
    enTrans: "Uninitialized variable means it has no initial value.",
    trans: "",
  },

  {
    word: "unit production",
    enTrans:
      "A unit production is a production in a grammar of the form \nA→B\nA→B\n, where \nA,B∈\nA,B∈\n the set of non-terminals for the grammar. Any grammar with unit productions can be rewritten to remove them.",
    trans: "",
  },
  {
    word: "unsolveable problem",
    enTrans:
      "A problem that can proved impossible to solve on a computer. The classic example is the halting problem.",
    trans: "",
  },
  {
    word: "unsorted list",
    enTrans:
      "A list where the records stored in the list can appear in any order (as opposed to a sorted list). An unsorted list can support efficient (\nΘ(1)\nΘ(1)\n) insertion time (since you can put the record anywhere convenient), but requires \nΘ(n)\nΘ(n)\n time for both search and and deletion.",
    trans: "",
  },

  {
    word: "unvisited",
    enTrans:
      "In graph algorithms, this refers to a node that has not been processed at the current point in the algorithm. This information is typically maintained by using a mark array.",
    trans: "未访问的",
  },
  {
    word: "upper bound",
    enTrans:
      "In algorithm analysis, a growth rate that is always greater than or equal to the growth rate of the algorithm in question. In practice, this is the slowest-growing function that we know grows at least as fast as all but a constant number of inputs. It could be a gross over-estimate of the truth. Since the upper bound for the algorithm can be very different for different situations (such as the best case or worst case), we typically have to specify which situation we are referring to.",
    trans: "上界；最大值",
  },

  {
    word: "variable-length coding",
    enTrans:
      "Given a collection of objects, a variable-length coding scheme assigns a code to each object in the collection using codes that can be of different lengths. Typically this is done in a way such that the objects that are most likely to be used have the shortest codes, with the goal of minimizing the total space needed to represent a sequence of objects, such as when representing the characters in a document. Huffman coding is an example of a variable-length coding scheme. This is in contrast to fixed-length coding.",
  },
  {
    word: "vector",
    enTrans:
      "In set notation, another term for a sequence. As a data structure, the term vector usually used as a snyonym for a dynamic array.",
    trans: "向量",
  },
  {
    word: "vertex",
    enTrans: "Another name for a node in a graph.",
    trans: "顶点",
  },
  {
    word: "virtual memory",
    enTrans:
      "A memory management technique for making relatively fast but small memory appear larger to the program. The large “virtual” data space is actually stored on a relatively slow but large backing storage device, and portions of the data are copied into the smaller, faster memory as needed by use of a buffer pool. A common example is to use RAM to manage access to a large virtual space that is actually stored on a disk drive. The programmer can implement a program as though the entire data content were stored in RAM, even if that is larger than the physical RAM available making it easier to implement.",
    trans: "虚拟内存",
  },

  {
    word: "visitor",
    enTrans:
      "A design pattern where a traversal process is given a function (known as the visitor) that is applied to every object in the collection being traversed. For example, a generic tree or graph traversal might be designed such that it takes a function parameter, where that function is applied to each node.",
    trans: "",
  },
  {
    word: "volatile",
    enTrans:
      "In the context of computer memory, this refers to a memory that loses all stored information when the power is turned off.",
    trans: "变量",
  },
  {
    word: "weight",
    enTrans:
      "A cost or distance most often associated with an edge in a graph.",
    trans: "权重",
  },
  {
    word: "weighted graph",
    enTrans: "A graph whose edges each have an associated weight or cost.",
    trans: "加权图",
  },
  {
    word: "weighted path length",
    enTrans:
      "Given a tree, and given a weight for each leaf in the tree, the weighted path length for a leaf is its weight times its depth.",
    trans: "加权路径长度",
  },
  {
    word: "weighted union rule",
    enTrans:
      "When merging two disjoint sets using the UNION/FIND algorithm, the weighted union rule is used to determine which subtree’s root points to the other. The root of the subtree with fewer nodes will be set to point to the root of the subtree with more nodes. In this way, the average depth of nodes in the resulting tree will be less than if the assignment had been made in the other direction.",
    trans: "并查集",
  },
  {
    word: "working memory",
    enTrans:
      "The portion of main memory available to an algorithm for its use. Typically refers to main memory made available to an algorithm that is operating on large amounts of data stored in peripheral storage, the working memory represents space that can hold some subset of the total data being processed.",
  },
  {
    word: "worst case",
    enTrans:
      "In algorithm analysis, the problem instance from among all problem instances for a given input size \nn\nn\n that has the greatest cost. Note that the worst case is not when \nn\nn\n is big, since we are referring to the wrost from a class of inputs (i.e, we want the worst of those inputs of size \nn\nn\n).",
    trans: "最差",
  },
  {
    word: "worst fit",
    enTrans:
      "In a memory manager, worst fit is a heuristic for deciding which free block to use when allocating memory from a memory pool. Worst fit will always allocate from the largest free block. The rationale is that this will be the method least likely to cause external fragmentation in the form of small, unuseable memory blocks. The disadvantage is that it tends to eliminate the availability of large freeblocks needed for unusually large requests.",
    trans: "最适合",
  },
  {
    word: "zone",
    enTrans:
      "In memory management, the concept that different parts of the memory pool are handled in different ways. For example, some of the memory might be handled by a simple freelist, while other portions of the memory pool might be handled by a sequential fit memory manager. On a disk drive the concept of a zone relates to the fact that there are limits to the maximum data density, combined with the fact that the need for the same angular distance to be used for a sector in each track means that tracks further from the center of the disk will become progressively less dense. A zone in this case is a series of adjacent tracks whose data density is set by the maximum density of the innermost track of that zone. The next zone can then reset the data density for its innermost track, thereby gaining more total storage space while preserving angular distance for each sector.",
  },
];

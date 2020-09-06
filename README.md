* Intro To Singly Linked list (110)
    1. What is a Linked list? 
        a. A data Structure that contains a head, tail and length property. 
        b. linked list consist of nodes, and each node has a value and a pointer to another node or null 
    2. Comparison with arrays
        a. Do not have Indexes!
        b. connect via nodes with a next  pointer 
        c. random access is not allowed. You have to transverse the entire link list to find the node
        d. best used for insertions and deletions of large data sets.
* Big O Notation of a Singly link list.
    1. insertion 
        a. constat time
    2. removal 
        a. constant time for the first value
        b. removing to from end requires iteration through the entire list. linear time 
        c. searching is linear time 
        d. access is linear time;
    3. 
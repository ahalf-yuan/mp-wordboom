// https://raima.com/database-terminology/

export default [
  {
    word: "ACID ",
    enTrans:
      " The acronym standing for the properties maintained by standard database management systems, standing for Atomicity, Consistency, Isolation, and Durability.",
  },
  {
    word: "Aperiodic Server ",
    enTrans:
      " Software that is specific to a particular embedded system. Such application",
  },
  {
    word: "Atomicity ",
    enTrans:
      " The property of a transaction that guarantees that either all or none of the changes made by the transaction are written to the database.",
  },
  {
    word: "BLOB ",
    enTrans:
      " An abbreviation for Binary Large OBject. In SQL, BLOB can be a general term for any data of type long varbinary, long varchar, or long wvarchar. It is also a specific term (and synonym) for data of type long varbinary.",
  },
  {
    word: "Breakpoint ",
    enTrans:
      " A location in a program at which execution is to be stopped and control of the processor switched to the debugger. Mechanisms for creating and removing breakpoints are provided by most debugging tools.",
  },
  {
    word: "Cache ",
    enTrans:
      " The computer memory that is set aside to contain a portion of the database data that has most recently been accessed by the database application program. A cache is used to minimize the amount of physical disk I/O performed by the DBMS.",
  },
  {
    word: "Cascade ",
    enTrans:
      " A foreign key attribute that automatically migrates the changes made to a referenced (i.e., primary key) table to all of the referencing (foreign key) table rows.",
  },
  {
    word: "Catalog ",
    enTrans: " A repository for the computer",
  },
  {
    word: "Checksum ",
    enTrans:
      " A numerical check value calculated from a larger set of data. A checksum is most often used when sending a packet of data over a network or other communications channel. One checksum formula is a simple addition, with overflow ignored, wherein the bytes of the packet are added together into a variable of a fixed size/width (say, 16 bits) as they are sent. The checksum is typically sent at the end of the packet and used at the receiving end to confirm the integrity of the preceding data. ",
  },
  {
    word: "Client/Server ",
    enTrans:
      " A server is a program that runs on a computer that directly manages the database. A client is a separate program (or process) that communicates with the database server through some kind of Remote Procedure Call (RPC) in order to perform application",
  },
  {
    word: "Cloud ",
    enTrans:
      ' Cloud is a recently coined term used to describe an execution model for computing systems where functions and data are invoked by a name that refers to a remote system whose location is irrelevant (hence the concept of it being "out there somewhere." like a cloud). Cloud',
  },
  {
    word: "Column ",
    enTrans:
      " A single unit of named data that has a particular data type (e.g., number, text, or date). Columns only exist in tables.",
  },
  {
    word: "Compiler ",
    enTrans: " A software",
  },
  {
    word: "Commit ",
    enTrans:
      " The action that causes the all of the changes made by a particular transaction to be reliably written to the database files and made visible to other users.",
  },
  {
    word: "Concurrency ",
    enTrans:
      " The property in which two or more computing processes are executing at the same time.",
  },
  {
    word: "Connection ",
    enTrans:
      " The means of communication between a client and a server. A process may have multiple connections opened, each in its own thread, to one or more databases at a time.",
  },
  {
    word: "Consistency ",
    enTrans:
      " The property of a transaction that guarantees that the state of the database both before and after execution of the transaction remains consistent (i.e., free of any data integrity errors) whether or not the transaction commits or is rolled back.",
  },
  {
    word: "Cost",
    enTrans: "based Optimization ",
  },
  {
    word: "Cross",
    enTrans: "compiler ",
  },
  {
    word: "Cursor ",
    enTrans:
      " A collection of rows grouped by common criteria (key sequence, set membership, SELECT result set) that can be navigated and updated.",
  },
  {
    word: "Database Instance ",
    enTrans:
      " An independent database that shares the same schema as another database. Used only in RDM.",
  },
  {
    word: "DBMS ",
    enTrans: " An acronym for Database Management System.",
  },
  {
    word: "DDL ",
    enTrans: " Database Definition Language.",
  },
  {
    word: "Deadlock ",
    enTrans:
      " A situation in which resources (i.e. locks) are held by two or more connections that are each needed by the other connections so that they are stuck in an infinite wait loop. For example, connection 1 has a lock on table1 and is requesting a lock on table2 that is currently held by connection 2, which is also requesting a lock on table1. Programming practices can be used to prevent deadlocks from occurring.",
  },
  {
    word: "Deterministic ",
    enTrans:
      " An attribute of a section of code whereby the limit on the time required to execute the code is known, or determined, ahead of time. This is commonly associated with real",
  },
  {
    word: "Distributed Database ",
    enTrans:
      " A database in which data is distributed among multiple computers or devices (nodes), allowing multiple computers to simultaneously access data residing on separate nodes. The Internet of Things (IoT) is frequently considered a vast grid of data collection devices, requiring distributed database functionality to manage.",
  },
  {
    word: "DLL ",
    enTrans:
      " Dynamic Link Library. A library of related functions that are not loaded into memory until they are called by the application program. All RDM APIs are contained in DLLs on those operating systems that support them (e.g., MS",
  },
  {
    word: "DML ",
    enTrans:
      " Database Manipulation Language. In SQL, such statements as UPDATE, INSERT and DELETE are considered DML.",
  },
  {
    word: "Documentation ",
    enTrans: " All product",
  },
  {
    word: "Domain ",
    enTrans:
      " An alternate name for a base data type that is defined using the RDM SQL create domain statement.",
  },
  {
    word: "Durability ",
    enTrans:
      " The property of a transaction in which the DBMS guarantees that all committed transactions will survive any kind of system failure.",
  },
  {
    word: "Dynamic DDL ",
    enTrans:
      " The ability to change the definition of a database (its schema) after data has been stored in the database without having to take the database off",
  },
  {
    word: "Edge Computing ",
    enTrans:
      " Edge computing refers to the computing infrastructure at the edge of the network, close to the sources of data. Edge computing reduces the communications bandwidth needed between sensors and the datacenter. Databases with tiny footprints e.g RDM are optimized for edge computing.",
  },
  {
    word: "Embedded Database ",
    enTrans:
      " An embedded database is the combination of a database and the database software which typically resides within an application. The database holds information and the software control the database to access or store information. The application software, or the user",
  },
  {
    word: "Encryption ",
    enTrans:
      " The encoding of data so that it cannot be understood by a human reader. This usually requires the use of an encryption key. A common encryption algorithm is called AES, which uses encryption keys of 128, 192 or 256 bits. See Wikipedia ",
  },
  {
    word: "Fog Computing ",
    enTrans:
      " An architecture that distributes computing, storage, and networking closer to users, and anywhere along the Cloud",
  },
  {
    word: "Foreign Key ",
    enTrans:
      " One or more columns in a table intended to contain only values that match the related primary/unique key column(s) in the referenced table. Foreign and primary keys explicitly define the direct relationships between tables. Referential Integrity is maintained when every foreign key refers to one and only one existing primary key.",
  },
  {
    word: "Geospatial datatypes ",
    enTrans:
      " Data types which are specifically optimized for storage of geographic coordinate based data.",
  },
  {
    word: "Grouped Lock Request ",
    enTrans:
      " A single operation that requests locks on more than one table or rows at a time. Either all or none of the requested locks will be granted. Issuing a grouped lock request at the beginning of a transaction that includes all of the tables/rows that can potentially be accessed by the transaction guarantees that a deadlock will not occur.",
  },
  {
    word: "GUI ",
    enTrans: " Graphical User Interface.",
  },
  {
    word: "Handle ",
    enTrans:
      " A software identification variable that is used to identify and manage the context associated with a particular computing process or thread. For example, SQL uses handles for each user connection (connection handle) and SQL statement (statement handle) among other things.",
  },
  {
    word: "Hash ",
    enTrans:
      " An indexing method that provides for a fast retrieval (usually in only one additional disk access) of the row that has a matching column value. See Wikipedia ",
  },
  {
    word: "Hierarchical Model ",
    enTrans:
      " A special case of a network model database in which each record type can participate only as the member of one set.",
  },
  {
    word: "Hot Spot ",
    enTrans:
      " In a database, a hot spot is a single shared row of a table that is used and updated so often that it creates a performance bottleneck on the system.",
  },
  {
    word: "I/O ",
    enTrans:
      " Input/output. For a DBMS, this is normally a disk drive, used to create database durability.",
  },
  {
    word: "IEC ",
    enTrans:
      " International Electrotechnical Commission. Along with the ISO, the IEC controls the SQL standard (ISO/IEC 9075) and many others as well.",
  },
  {
    word: "IIOT ",
    enTrans: " Abbreviation of Industrial Internet of Things.",
  },
  {
    word: "Implicit Locking ",
    enTrans:
      " Done by SQL to automatically apply the locks needed to safely execute an SQL statement in a multiuser (i.e., shared database) operational environment.",
  },
  {
    word: "IMDB ",
    enTrans: " Abbreviation of In",
  },
  {
    word: "Index ",
    enTrans:
      " A separate structure that allows fast access to a table's rows based on the data values of the columns used in the index. RDM supports two indexing types: hash and b",
  },
  {
    word: "Inner Join ",
    enTrans:
      " A join between two tables where only the rows with matching foreign and primary key values are returned.",
  },
  {
    word: "Internet of Things ",
    enTrans:
      " A recently coined phrase describing the extended reach of connected devices. In particular, devices that use computing power to control or sense their environment and use wifi or wires to connect to the internet.",
  },
  {
    word: "IoT ",
    enTrans: " Abbreviation of Internet Of Things",
  },
  {
    word: "IP Address ",
    enTrans:
      " A numerical identification tag assigned to a computing device in a network. Originally, internet IP addresses consisted of 32 bits of data, displayed as a set of four 3",
  },
  {
    word: "ISO ",
    enTrans:
      " International Organization for Standardization. Along with the IEC, the ISO controls the SQL standard (ISO/IEC 9075) and many others as well.",
  },
  {
    word: "Isolation ",
    enTrans:
      " The property of a transaction that guarantees that the changes made by a transaction are isolated from the rest of the system until after the transaction has committed.",
  },
  {
    word: "JDBC ",
    enTrans:
      " Java Database Connectivity API. JDBC provides a standard database access and manipulations API for Java programs. RDM supports JDBC.",
  },
  {
    word: "Join ",
    enTrans:
      " An operation in which the rows of one table are related to the rows of another through common column values.",
  },
  {
    word: "LAN ",
    enTrans:
      " A Local Area Network is used to interconnect the computers in a single geographic location. Contrasted to Wide Area Networks (WAN). Bandwidth (speed) is a primary difference between local and wide",
  },
  {
    word: "Library ",
    enTrans:
      " The container for a set of common software API functions. Frequently, a library is contained in a DLL or Shared Library.",
  },
  {
    word: "Licensee ",
    enTrans:
      " A customer that has obtained the right to use and/or distribute Raima Product(s).",
  },
  {
    word: "Little",
    enTrans: "endian is the opposite of big",
  },
  {
    word: "Local Procedure Call ",
    enTrans: " A software function call to a library function that exists in",
  },
  {
    word: "Locking ",
    enTrans:
      " A method for safely protecting objects from being changed by two or more users (processes/threads) at the same time. A write (exclusive) lock allows access from only one user (process/thread) at a time. A read (shared) lock allows read",
  },
  {
    word: "Maintenance and Support ",
    enTrans:
      " The maintenance and support services for a Product under an Agreement (Maintenance and Support Addendum).",
  },
  {
    word: "Marks ",
    enTrans:
      " Trademarks, trade names, service marks or logos identified on a company's website and/or printed material.",
  },
  {
    word: "Memory Database ",
    enTrans:
      " A DBMS that keeps the entire contents of a database or table available in computer memory at all times while the database is opened. Frequently, in",
  },
  {
    word: "Meta",
    enTrans: "data ",
  },
  {
    word: "Mirroring ",
    enTrans:
      " The ability to copy the changes each transaction made to the database from the master database to one or more slave databases so that exact copies of the master database are always available on the slaves.",
  },
  {
    word: "MMDB ",
    enTrans: " An acronym for Main Memory Database, also called In",
  },
  {
    word: "Modification Stored Procedure ",
    enTrans:
      " An SQL stored procedure that contains one or more INSERT, UPDATE, and/or DELETE statements.",
  },
  {
    word: "Multi",
    enTrans: "platform ",
  },
  {
    word: "Multi",
    enTrans: "version Concurrency Control (MVCC) ",
  },
  {
    word: "Natural Join ",
    enTrans:
      " A join formed between two tables where the values of identically named and defined columns are equal.",
  },
  {
    word: "Network Model ",
    enTrans: " A database in which inter",
  },
  {
    word: "NoSQL ",
    enTrans:
      " A classification of data storage systems that are not primarily designed to be relationally accessed through the common SQL language. NoSQL systems are characterized by dynamic creation and deletion of key/value pairs and are structured to be highly scalable to multiple computers.",
  },
  {
    word: "Open Source Software (OSS) ",
    enTrans:
      " Software that is released under a Software License that (1) permits each recipient of the software to copy and modify the software; (2) permits each recipient to distribute the software in modified or unmodified form; and (3) does not require recipients to pay a fee or royalty for the permission to copy, modify, or distribute the software.",
  },
  {
    word: "Optimizer ",
    enTrans:
      " A component of the SQL system that estimates the optimum (i.e., fastest) method to access the database data requested is by particular SQL SELECT, UPDATE, or DELETE statement.",
  },
  {
    word: "Outer Join ",
    enTrans:
      " A join formed between two tables that in addition to including the rows from the two tables with matching join column values will also include the values from one table that do not have matching rows in the other.",
  },

  {
    word: "Party ",
    enTrans: " A party to an Agreement (between Raima and Customer)",
  },
  {
    word: "PLC ",
    enTrans: " Programmable Logic Controller.",
  },
  {
    word: "Port ",
    enTrans:
      " A network portal through which two computing processes can communicate. Where one IP Address typically identifies a device, a Port on that device identifies one of multiple potential communication channels.",
  },
  {
    word: "Portable ",
    enTrans:
      " Software that has been developed to be able to run on many different computer hardware and operating systems with little or no change.",
  },
  {
    word: "Positioned Update/Delete ",
    enTrans:
      " An SQL UPDATE or DELETE statement that modifies the current row of a cursor.",
  },
  {
    word: "Primary Key ",
    enTrans:
      " A column or group of columns in a given table that uniquely identifies each row of the table. The primary key is used in conjunction with a foreign key in another (or even the same) table to relate the two tables together. For example, the primary key in an author table would match the foreign key in a book table in order to relate a particular author to that author's books.",
  },
  {
    word: "Process ",
    enTrans:
      " An instance of the execution of a program on a single computer. A process can consist of one or more threads executing, more or less, concurrently. The private memory used by a process cannot be accessed by any other process.",
  },
  {
    word: "Product ",
    enTrans:
      " The Raima software product(s) licensed to Licensee under an Agreement, including all bug fixes, upgrades, updates, and releases. Product(s) does not include any Third Party Software or any OSS that may be included and distributed with the Product(s).",
  },
  {
    word: "Protocol ",
    enTrans:
      " A specific method in which messages are formulated, formatted, and passed between computers in a network. Internet messages are passed between computers using the TCP/IP protocol.",
  },
  {
    word: "Query ",
    enTrans:
      " A complete SELECT statement that specifies 1) the columns and tables from which data is to be retrieved; 2) optionally, conditions that the data must satisfy; 3) optionally, computations that are to be performed on the retrieved column values; and 4) optionally, a desired ordering of the result set.",
  },
  {
    word: "RDM ",
    enTrans: " Raima Database Manager.",
  },
  {
    word: "RDM Server ",
    enTrans:
      " Raima's client/server DBMS originally released in 1993, named RDS (Raima Database Server), Velocis, and finally RDM Server. Still supported for existing customers.",
  },
  {
    word: "Read",
    enTrans: "only Transaction ",
  },
  {
    word: "Real",
    enTrans: "time ",
  },
  {
    word: "Record Instance/Occurrence ",
    enTrans:
      " One set of related data field values associated with a specific record type—equivalent to an SQL row.",
  },
  {
    word: "Record Type ",
    enTrans:
      " A collection of closely related data fields—equivalent to an SQL table. Similar to a C struct, a record type is defined by a set of closely related data fields.",
  },
  {
    word: "Referential Integrity ",
    enTrans:
      " A condition in which the foreign key column values in all of the rows in one table have matching rows in the referenced primary key table. Referential integrity is maintained by SQL during the processing of an INSERT and DELETE statement and any UPDATE statement that modifies a foreign or primary key value.",
  },
  {
    word: "Relational Model ",
    enTrans: " A database in which inter",
  },
  {
    word: "Remote Procedure Call ",
    enTrans:
      " A method of interprocess communication where a function residing within another process is called as though it is a local (in",
  },
  {
    word: "Replication ",
    enTrans:
      " A process where selected modifications in a master database is replicated (re",
  },
  {
    word: "Restriction Factor ",
    enTrans:
      " Each relational expression specified in the WHERE clause of a query has an associated restriction factor that is estimated by the SQL optimizer, which specifies the fraction (or percentage) of the table for which the expression will be true. For example, in the query select * from book where bookid = 'austen013px' the relational expression bookid = 'austen013px' has a restriction factor equal to .003 (only one out of 3213px rows will satisfy this expression).",
  },
  {
    word: "Result Set ",
    enTrans:
      " The complete set of rows that is returned by a particular SELECT statement.",
  },
  {
    word: "Rollback ",
    enTrans:
      " An operation, usually performed by the SQL ROLLBACK statement, that discards all of the changes made by all INSERT, UPDATE and DELETE statements that have been executed since the most recently started transaction (e.g., START TRANSACTION statement).",
  },
  {
    word: "Row ",
    enTrans:
      " One set of related values for all of the columns declared in a given table. Also known as a record occurrence.",
  },
  {
    word: "Royalty ",
    enTrans:
      " A License fee set forth in an Agreement (Product and Pricing Addendum).",
  },
  {
    word: "RTOS ",
    enTrans: " A common abbreviation for real",
  },
  {
    word: "Runtime ",
    enTrans:
      " A portion of a DBMS that is included within the process space of an application program.",
  },
  {
    word: "Scalability ",
    enTrans:
      " A software system is scalable when its performance and overall system throughput continues to improve as more computing resources are made available for its use. This usually comes in the form of the number of CPUs and cores available in the computer on which the software system is run.",
  },
  {
    word: "Scalar Function ",
    enTrans: " Either a built",
  },
  {
    word: "Schema ",
    enTrans:
      " A representation of the structure of a database. It may be graphical or textual. Graphical representations typically involve the use of boxes that represent database tables and arrows that represent inter",
  },
  {
    word: "Searched Update/Delete ",
    enTrans:
      " An SQL update or delete statement in which the rows to be updated/deleted are those for which the conditional expression specified in the WHERE clause is true.",
  },
  {
    word: "Seat ",
    enTrans:
      " A copy of a Product, or any of its components, installed on a single machine.",
  },
  {
    word: "Semaphore ",
    enTrans:
      ' A primitive computing operation that is used to synchronize shared access to data. Sometimes called a "mutex" meaning a "mutually exclusive section." Semaphores control concurrent access to data by restricting access to critical sections of code that manipulate that data.',
  },
  {
    word: "Server (Software) ",
    enTrans:
      " A Seat that resides on a single Server machine and is capable of accepting connections from one or more Seats residing on Client machines.",
  },
  {
    word: "Set ",
    enTrans: " A method used to implement the one",
  },
  {
    word: "Snapshot Isolation ",
    enTrans:
      " When a snapshot of the database is taken, an instance of the database is frozen and concurrent reads are allowed to occur on that snapshot.  Database writes are allowed to continue while reads on the snapshot are happening.",
  },
  {
    word: "Source Code (Raima) ",
    enTrans:
      " The English language source code version of a Product, and any accompanying comments or other programmer Documentation, provided by Raima to Licensee pursuant to the terms of an Agreement. The capitalized term Source Code as used in an Agreement does not include OSS.",
  },
  {
    word: "SQL ",
    enTrans:
      ' The standardized and commonly accepted language used for defining, querying and manipulating a relational database. The etymology of "SQL" is unclear, possibly a progression from "QueL" (Query Language) to "SeQueL" to "SQL." However, some experts don\'t like the expansion "Structured Query Language" because its structure is inconsistent and a historical patchwork. See Wikipedia ',
  },
  {
    word: "SQL PL ",
    enTrans:
      " A SQL based programming language.  This allows for a SQL programmer to use programming constructs like variables, conditionals and loops purely through the use of SQL statements.",
  },
  {
    word: "Stack ",
    enTrans:
      " A stack is a conceptual structure consisting of a set of homogeneous elements and is based on the principle of last in first out (LIFO). It is a commonly used abstract data type with two major operations, namely push and pop. Push and pop are carried out on the topmost element, which is the item most recently added to the stack. The push operation adds an element to the stack while the pop operation removes an element from the top position. The stack concept is used in programming and memory organization in computers.\n\nStored Procedure ",
  },
  {
    word: "Synchronization ",
    enTrans:
      " The implementation method (frequently using semaphores) by which concurrently executing multiple computer threads or processes can safely access and update shared data.",
  },
  {
    word: "Table ",
    enTrans:
      " A collection of closely related columns. A table consists of rows each of which shares the same columns but vary in the column values.",
  },
  {
    word: "Third Party Software ",
    enTrans:
      " Software that is licensed separately by a third party with the Product(s) or Documentation.",
  },
  {
    word: "Thread ",
    enTrans:
      " A single, sequential execution of a computer program or program segment. A program can consist of one or more concurrently executing threads. Where multiple threads access the same data, some kind of synchronization method needs to be employed to ensure that the data is accessed only by one thread at a time.",
  },
  {
    word: "Timeout ",
    enTrans:
      " Occurs when a lock request has waited longer than the prescribed wait time for the request to be granted.",
  },
  {
    word: "Transaction Log ",
    enTrans:
      " A sequential record of all of the database changes made by each transaction in the order they were issued. The transaction log is used to ensure that a database conforms to the ACID properties. Transaction logs are also used to mirror or replicate data to other databases.",
  },
  {
    word: "Transaction ",
    enTrans:
      " A set of logically related database modifications that is written to the database as a unit. The database changes associated with a given transaction are guaranteed by the DBMS to be written completely to the database; in the event of a system failure, none are written. The state of the database both before and after a transaction will be consistent with its design.",
  },
  {
    word: "Transactional File Server (TFS) ",
    enTrans:
      " An architectural piece of Raima's RDM system that may be linked in",
  },
  {
    word: "Transactional Stored Procedure ",
    enTrans:
      " A modification stored procedure in which the database changes made by the procedure are encapsulated in its own transaction.",
  },
  {
    word: "Update (of Product) ",
    enTrans:
      " A Product that has been modified in a minor way, including but not limited to bug fixes, and has been furnished to Licensee under this Agreement. An Update is represented by a Product version number that increments to the right of the decimal point.",
  },
  {
    word: "Upgrade (of Product) ",
    enTrans:
      " A Product that has been modified in a major way, and is released as a new version of the Product. An Upgrade is represented by a Product version number that increments to the left of the decimal point.",
  },
  {
    word: "Vacuuming  ",
    enTrans:
      " Databases that use MVCC to isolate transactions from each other need to periodically scan the tables to delete outdated copies of rows. In MVCC, when a row is updated or deleted, it cannot be immediately recycled because there might be active transactions that can still see the old version of the row. Instead of checking if that is the case, which could be quite costly, old rows are assumed to stay relevant. Database Vacuuming ",
  },
  {
    word: "Velocis ",
    enTrans: " Former name of a DBMS product, now called RDM Server.",
  },
  {
    word: "Virtual Table ",
    enTrans: " An SQL table that is defined through a set of application",
  },
  {
    word: "WAN ",
    enTrans:
      " A Wide Area Network, as contrasted to Local Area Networks (LAN), Normally WAN refers to the internet. Bandwidth (speed) is a primary difference between local and wide",
  },
  {
    word: "XML ",
    enTrans:
      " Extensible Markup Language. XML documents are much used in the internet's World Wide Web but are also used in many computing contexts in which data needs to be shared.",
  },
];

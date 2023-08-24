// Q-1 Which of the following is NOT the benefit of DBMS with respect to file based system?

// A) sharing
// B) Centralization
// C) Integration
// D) Flexibility
// E) Efficient Data retrieval rate
// F) None of these

// Res: E) Efficient Data retrieval rate
// Reason:

// Q-2 How many maximum Table_level PRIMARY KEY constraints can a table have?

// A) 0
// B) Unlimited
// C) 2
// D) 1

// Res: D) 1
// Reason: As primary key constraints always said to be ONE per table, then maximum is 1 which should be unique and not NULL.

// Q-3 Consider the EMP table having the columns (ENO number primary key, Ename char (30), deptno number, job char (20), salary number). Which one of the following is correct SQL statement for the query to display the total salary of each job within each department?

// A) Select sum(sal), dno, job from emp group by dno, job;
// B) Select total(sal), dno, job from emp group by dno, job;
// C) Select sum(sal), dno, job from emp group by job, dno;
// D) Select sum(sal), sum(job) from emp group by dno, job;

// Res: A) Select sum(sal), dno, job from emp group by dno, job;
// Reason: They group by job and to get total salary of each job used SUM aggregate function within each dept

// Q-4 Lets consider the structure of table and the data in the table are given as below Emp(empid char(3) primary key, ename varchar2(25)) ;
/* EMPID ENAME
102 -
101 Sonal
A10 Geeta
Teacher wants student should modify the data of employee id A10 to 103 for employee name Geeta in the relation. For the same which of the following SQL query will be correct.
*/

// A) update emp set ename='rohan' where empid='A10'
// B) update table emp set ename='rohan' where empid='A10'
// C) alter emp set id='103' where empid='102'
// D) alter emp modify eid=103 where ename=’Geeta'
// E) None of these

// Res: E) None of these
// Reason: In A) ename should be Geeta & not mentioned 103 | In B) table is not needed in update syntax & after set we need to declare id='103' | In C) and D) Alter command is used to modify, add & delete the attributes of a table & by default initializes values of all the tuple/rows as NULL.  whereas Update command is used to update existing records/row/tuples of table in a db & sets specified values in the command to the tuples/rows

// Q-5 Which of the following statements contains an error?

// A) Select * from emp where empid = 10003;
// B) Select empid from emp where empid = 10006;
// C) Select empid from emp
// D) Select empid where empid = 102 and ename = ‘geeta’;

// Res: D) Select empid where empid = 102 and ename = ‘geeta’;
// Reason: from TABLENAME is missing only in above query

// Q-6 Which of the following is true about order by clause?

// A) By default Order by clause gives the output in ascending order
// B) Order by clause can work on column aliases also
// C) Order by clause can work on multiple columns
// D) all of these

// Res: D) all of these
// Reason: ORDER BY clause is true in cases of A) By default Order by clause gives the output in ascending order B) Order by clause can work on column aliases also & C) Order by clause can work on multiple columns options

// Q-7 Which of the following sql statement will generate ERROR?(assume student table is created)

// A) select * from student limit 1
// B) Select age , distinct name from student;
// C) Select age from student group by age;
// D) Select count(*) , age from student group by age;

// Res: B) Select age , distinct name from student;
// Reason: There should be no spave in between distinct and name. It should be like distince_name.

// Q-8 Which of the following conditions has to be satisfied for INNER JOIN to work?

// A) Columns used for joining must have same name
// B) Columns used for joining can have same or different name
// C) Columns used for joining must have different names
// D) Columns used for joining must have different names

// Res: B) Columns used for joining can have same or different name
// Reason: In Inner join, columns used for joining can have same or different names.

// Q-9 Why we need to create an index if the primary key is already present in a table?

// A) Index improves the speed of data retrieval operations on a table.
// B) Indexes are special lookup tables that will be used by the database search engine.
// C) Indexes are synonyms of a column in a table.
// D) All of these

// Res: A) Index improves the speed of data retrieval operations on a table.
// Reason: Index is like Contents with Page no in Books which is used to retrieve quickly.

// Q-10:
/*
    SELECT emp_name  
    FROM department     
    WHERE dept_name LIKE ' _____ Computer Science'; 

In the above-given Query, which of the following can be placed in the Query's blank portion to select the "dept_name" that also contains Computer Science as its ending string?
*/

// A) &
// B) _
// C) %
// D) $

// Res: C) % (starts/EndsWith)
// Reason: LIKE operator in MySQL is similar to Regex pattern match in JS & is used in a WHERE clause to search for a specified pattern in a column. This % symbol denotes here is Finds any values that end with "Computer Science"

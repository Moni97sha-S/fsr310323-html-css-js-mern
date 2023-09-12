// Q-1 Which entities are showing Total Participation?
/*
Ac_no(circle&underscore)--Account(square) & Balance(circle)--Account(square);
Account==Account branch(Diamond)-->Branch(square)--b_name(circle&underscore),b_city(circle),Assets(circle);
Account--Depositor(Diamond)--Customer(square)--C_city(circle),C_name(circle&underscore),C_street(circle);
Customer--Borrower(Diamond)--Loan(square)--L_no(circle&underscore)--Amt(circle);
Loan==Loan Branch(Diamond)-->Branch;
*/

// A) Loan with Loan Branch Relationship
// B) Customer with Borrower Relationship
// C) Branch with Loan Branch Relationship
// D) a) c)

// Res: D) a) c)
// Reason:

// Q-2 What are the different Relationships in the above ER Diagram?

// A) Customer
// B) Account
// C) Loan branch
// D) Loan

// Res: C) Loan branch
// Reason:

// Q-3 Time can be divided into hour, minute and seconds. What kind of Property of Attribute is it?

// A) Simple attribute
// B) Composite attribute
// C) Multivalued attribute
// D) Derived attribute

// Res: B) Composite attribute
// Reason: An attribute that can be split into components like examples:- The address can be further split into house number, street number, city, state, country, and pin code; the name can also be split into first name middle name, and last name.

// Q-4 Vendor Sells Ice Creams. What are the different Entities in this sentence?

// A) Sells
// B) Cold Drinks
// C) Entities
// D) Ice Creams

// Res: D) Ice Creams
// Reason: An entity in a database is a thing, place, person or object that is independent of another. In databases, you store information about things in the real world, and these things are database entities.

// Q-5 Which are correct about lossless decomposition in context of Normalization in DBMS?

// A) When decomposing to Tables 1 and 2 , one of them should have a common Attribute as an Candidate key.
// B) Number of Rows reduces if we join tables, which had lossy decomposition
// C) When decomposing to Tables 1 and 2 , none of them should have a common Attribute as an Candidate key.
// D) None of the above

// Res: A) When decomposing to Tables 1 and 2 , one of them should have a common Attribute as an Candidate key.
// Reason: ONE common Attribute is must like ID.

// Q-6 Primary Key is just one of the Candidate key we wish to choose.

// A) False
// B) True

// Res: B) True
// Reason: Only one Primary Key (unique) should be present in a table which is one of Candidate keys & except Primary key rest are Alternate/Secondary keys.

// Q-7 Which are valid Functional Dependency for the above table?
/*
A Column | B Column
    a    |     e
    a    |     m
    b    |     n
    b    |     n
*/
// A) A->B
// B) B->n
// C) B->A

// Res: C) B->A
// Reason: B functionally dependent on A column/attribute.

// Q-8 Why do we need Normalization?
// A) To feel good with many tables
// B) To add Redundancy
// C) To add Anomalies(Insert,Update,Delete) operations
// D) None of the above

// Res: D) None of the above
// Reason: Normalization is meant for reusability by dividing into multiple tables & to reduce redundancy while incorporating anomalies operations like Insert, Update, Delete etc.

// Q-9 Which one of them is wrong syntax of Aggregate Functions? Here column1 and column2 are Int Type.

// A) sum(column1,column2)
// B) sum(column1+column2)
// C) count(distinct sex)
// D) count(*)

// Res: A) sum(column1,column2)
// Reason:

// Q-10: If Having Clause is used without Group By, Which Clause does it behave as?

// A) Limit
// B) Condition
// C) Where
// D) Order by

// Res: C) Where
// Reason: Having clause is used to filter from the group by values with some condition. So without Group By, Having clause is equivalent to Where clause.

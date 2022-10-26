use employeedetails1;

/* Write an SQL query to fetch “FIRST_NAME” from employee table using the alias name as
<WORKER_NAME>. */

SELECT First_Name AS WORKER_NAME FROM employee;

/*Write an SQL query to fetch unique values of DEPARTMENT from employee table.*/

SELECT distinct DEPARTMENT FROM employee;

/*Write an SQL query to show the last 5 record from a table.*/

SELECT * FROM employee
order by ID DESC
limit 5;

/* Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces
from the right side */

SELECT rtrim(First_Name) FROM employee;

/*Write an SQL query to print the name of employees who have highest salary in each
department -*/ 
SELECT First_Name,Salary, DEPARTMENT  FROM employee
WHERE Salary = (
SELECT max(Salary) FROM employee);

/* Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and
prints its length */

SELECT distinct length(DEPARTMENT) FROM employee;

/* Write an SQL query to print all Worker details from the Worker table order FIRST_NAME
Ascending and DEPARTMENT Descending */

SELECT * FROM employee
order by First_Name ASC, DEPARTMENT DESC;

/* Write an SQL query to fetch the names of workers who earn the highest salary.
 */
SELECT First_Name, Salary FROM employee
WHERE Salary = (
SELECT max(Salary) FROM employee);

/*Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and
contains six alphabets.*/

Select * from employee where First_Name like '_____h';

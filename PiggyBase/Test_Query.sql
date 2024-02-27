

select * from debit_Accounts where id_account = 2;
select * from debit_movements;

--drop table Debit_Movements
CREATE TABLE Debit_Movements(
	id_movement SERIAL PRIMARY KEY,
	id_account INT NOT NULL,
	amount NUMERIC(10,2) NOT NULL,
	description_movement VARCHAR(200) NULL,
	type_movement BOOL NOT NULL,
	date_movement TIMESTAMP
)
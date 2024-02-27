CREATE TABLE Users(
	id_user SERIAL PRIMARY KEY,
	user_name VARCHAR(100) NOT NULL,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	main_debit_account INT NULL,
	date_created TIMESTAMP
)

CREATE TABLE Debit_Accounts(
	id_account SERIAL PRIMARY KEY,
	id_user INT NOT NULL,
	cardholder_name VARCHAR(100) NOT NULL,
	issuing_bank VARCHAR(100) NOT NULL,
	card_number VARCHAR(16) NOT NULL,
	allows_sections BIT NOT NULL,
	current_balance NUMERIC(10,2) NOT NULL,
	last_update_balance TIMESTAMP
)

DROP TABLE Debit_Movements;
CREATE TABLE Debit_Movements(
	id_movement SERIAL PRIMARY KEY,
	id_account INT NOT NULL,
	amount NUMERIC(10,2) NOT NULL,
	description_movement VARCHAR(200) NULL,
	type_movement BOOL NOT NULL,
	date_movement DATE NOT NULL,
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
CREATE TABLE Account_Sections (
	id_section SERIAL PRIMARY KEY,
	id_account INT NOT NULL,
	section_name VARCHAR(100) NOT NULL,
	current_amount NUMERIC(10,2) NOT NULL,
	last_update_amount TIMESTAMP
)
CREATE TABLE Account_Movement (
	id_movement SERIAL PRIMARY KEY,
	id_section INT NOT NULL,
	amount NUMERIC(10,2) NOT NULL,
	description_movement VARCHAR(200) NULL,
	type_movement BIT NOT NULL,
	date_movement TIMESTAMP
)






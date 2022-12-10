DROP TABLE IF EXISTS guest;

CREATE TABLE guest (
    id serial PRIMARY KEY, 
    name varchar(20),
    phone varchar(20),
    relation varchar(20)
);


INSERT INTO guest (name, phone, relation) VALUES ('Robert', '5551234567', 'father');
INSERT INTO guest (name, phone, relation) VALUES ('Alayna', '5551234567', 'mother');
INSERT INTO guest (name, phone, relation) VALUES ('John', '5551234567', 'brother');
INSERT INTO guest (name, phone, relation) VALUES ('Angela', '5551234567', 'sister');
INSERT INTO guest (name, phone, relation) VALUES ('Ray', '5551234567', 'friend');
INSERT INTO guest (name, phone, relation) VALUES ('Alex', '5551234567', 'friend');
INSERT INTO guest (name, phone, relation) VALUES ('Stephanie', '5551234567', 'friend');

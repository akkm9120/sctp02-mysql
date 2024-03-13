## creating tables ( Data Defination Language )
create table parents(
    parent_id int unsigned auto_increment primary key, 
    first_name varchar(200) not null,
    last_name varchar(200) default ''

) engine = innodb;

create table location(
    location_id int unsigned auto_increment primary key,
    name varchar(255),
    address varchar(255)
) engine = innodb;

# insert into table (DML Data Modeling language )
insert into parents (first_name , last_name) VALUES ("John","Snow");

## show all rows from table
select * from parents ; 

## insert many rows 
insert into parents (first_name, last_name) VALUES 
                    ("Mary" , "Su"),
                    ("Snow" , "White"),
                    ("Jon" , "Wick");


insert into location (name, address ) VALUES 
("Yishun Swimming Complex","351 Yishun Ave 3, Singapore 769057"),
("Jurong West Swimming Complex", "21 Jurong West Street 93, Singapore 648965"),
("Tampines Swimming Complex","1 Tampines Walk, Singapore 528523"),
("Choa Chu Kang Swimming","1 Choa Chu Kang Street 53, Singapore 689236");


## foreign keys 

        create table students (
            student_id int unsigned auto_increment primary key,
            name varchar(45) not null,
            swimming_level varchar(45),
            dob date not null
        ) engine = innodb;

### Add column for foreign key 
    `alter table` make changes to table 

    alter table students add column parent_id INT unsigned; 

## define foreign key 
ALter table students add constraint fk_students_parents
    foreign key (parent_id) references parents(parent_id);

# my database
CREATE TABLE `clinic`
(
 `clinic_id`      int unsigned NOT NULL ,
 `name`           varchar(40) NOT NULL ,
 `address`        varchar(255) NOT NULL ,
 `contact_number` varchar(12) NOT NULL ,
 primary key (`clinic_id`)
);

CREATE TABLE `dentist`
(
 `dentist_id`     int unsigned NOT NULL ,
 `name`           varchar(50) NOT NULL ,
 `contact_number` varchar(20) NOT NULL ,
 `email`          varchar(30) NOT NULL ,
 `address`        varchar(255) NOT NULL ,
 primary key (`dentist_id`)
);


CREATE TABLE `treatment`
(
 `treatment_id` int unsigned NOT NULL ,
 `name`         varchar(45) NOT NULL ,
 `description`  varchar(255) NOT NULL,
 primary key (`treatment_id`)
);

CREATE TABLE `patient`
(
 `patient_id`     int unsigned NOT NULL ,
 `name`           varchar(45) NOT NULL ,
 `contact_number` varchar(45) NOT NULL ,
 `suffering`      varchar(255) NOT NULL ,
 `dentist_id`     int unsigned NOT NULL,

 primary key (`patient_id`),
 foreign key (`dentist_id`) references dentist(dentist_id)
);


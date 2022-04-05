CREATE DATABASE project1;

create type genre as enum('beginner', 'intermediatetip', 'advancetips', 'javatip', 'reacttip', 'jstip', 'pythontip');

create type accountType as enum('associate', 'admin');

CREATE TABLE users(
  userid serial primary key,
  firstname varchar(30),
  lastname varchar(30),
  username varchar(30) not null,
  password varchar(30) not null,
  city varchar(30),
  state varchar(30),
  email varchar(50),
  account accountType
);


CREATE TABLE posts(
    postid serial primary key,
    authorid int references users(userid),
    posttext text,
    postdate timestamp,
    likes int
 );


create table category (
      title text,
      mainbodycontent text,
      genreCategory genre
);

insert into category(title, mainbodycontent, genreCategory)
values ('Training Tip', 'Sql basic.we will start here.', 'beginner'),
       ('Get excited for JAva', 'Java exerises .....', 'javatip'),
       ('React componet explained', 'Demo for component .....', 'reacttip');

insert into users (userid, firstname, lastname, username, password, city, state, email, account)
values 	       (1, 'Stefan', 'Riley', 'StefMan', 'pass', 'Balitmore', 'MA', 'stefan@email.com', 'associate');
select * from users;


-- CREATE TABLE categoryContent(
--     skills,
--     languages
-- );
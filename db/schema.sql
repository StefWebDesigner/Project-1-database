CREATE DATABASE project1;



CREATE TABLE users(
    userid serial primary key,
    firstname varchar(30),
    lastname varchar(30),
    username varchar(30) not null,
    password varchar(30) not null,
    city varchar(30),
    state varchar(30),
    email varchar(50),
    accountType varchar(10),
    posts int[]
);

CREATE TABLE posts(
    postid serial primary key,
    authorid int references users(userid),
    posttext text,
    postdate timestamp,
    likes int
 );




create type genre as enum('beginner', 'intermediatetip', 'advancetips', 'javatip', 'reacttip', 'jstip', 'pythontip');

create table category (
      title text,
      mainbodycontent text,
      genreCategory genre
);

insert into category(title, mainbodycontent, genreCategory)
values ('Training Tip', 'Sql basic.we will start here.', 'beginner'),
       ('Get excited for JAva', 'Java exerises .....', 'javatip'),
       ('React componet explained', 'Demo for component .....', 'reacttip');




-- CREATE TABLE categoryContent(
--     skills,
--     languages
-- );
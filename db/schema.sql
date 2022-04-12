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
  account accountType,
  post int[]
);


CREATE TABLE posts(
    postid serial primary key,
    authorid int ,
    posttext text,
    postdate timestamp,
    image varchar(70),
    likes int
 );


create table category (
      id int primary key,
      title text,
      mainbodycontent text,
      genreCategory varchar(50)
);

CREATE DATABASE project1;

create type genre as enum('beginner', 'intermediatetip', 'advancetips', 'javatip', 'reacttip', 'jstip', 'pythontip');

create type accountType as enum('associate', 'admin', 'trainer', 'alumni');
--alter type accountType add value 'trainer';
--alter type accountType add value 'alumni';

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
  pic varchar(30)
);


CREATE TABLE posts(
    postid serial primary key,
    authorid int ,
    posttext text,
    postdate timestamp,
    image varchar(70),
    likes int
 );

-- the original
create table category (
      id int primary key,
      title text,
      mainbodycontent text,
      genreCategory varchar(50)
);

-- the new change
create table category (
      id int primary key,
	   categoryid int,
      title text,
      mainbodycontent text,
      genreCategory varchar(50)
);

create table tips (
	tipid serial primary key,
	tiptitle varchar(30),
	tipbody text,
	tipgenre varchar(60)
);

create table report (
    caseid serial primary key,
    reportid int references users(userid),
    username varchar(30),
    issue text
);




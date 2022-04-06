CREATE DATABASE project1;

CREATE TABLE users(
    userid serial primary key,
    firstname varchar(30),
    lastname varchar(30),
    username varchar(30) not null,
    password varchar(30) not null,
    email varchar(50),
    city varchar(30),
    state varchar(30),
    accounttype varchar(10),
    posts int[]
);

CREATE TABLE posts(
    postid serial primary key,
    authorid int references users(userid),
    posttext text,
    postdate timestamp,
    likes int,
    tag varchar(20)
);

-- CREATE TABLE categoryContent(
--     skills,
--     languages
-- );
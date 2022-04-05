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


-- TABLE FOR CATEGORY
CREATE TABLE categoryContent {
    categoryid serial primary,
    beginnertips int[],
    intermediatetip int[],
    advancetips int[],
    javatip int[],
    reacttip int[],
    jstip int[],
    pythontip int[]
};




table

-- CREATE TABLE categoryContent(
--     skills,
--     languages
-- );
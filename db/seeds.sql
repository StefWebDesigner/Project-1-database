-- users seeds --

insert into users(firstname,lastname, username, password, city, state, email, account) 
 values ('Luke','Shaw', 'lukeshaw', 'password1', 'Mosscow', 'Idaho', 'luck@mosscow.com', 'admin');
 
 insert into users( firstname,lastname, username, password, city, state, email, account) 
 values ('Anthony','Martial','anthonymartial','password2', 'SanJose', 'CA', 'anthony@sans.com', 'associate');
 
 insert into users( firstname,lastname, username, password, city, state, email, account) 
 values ('Marcus','Rashford', 'marcusrashy','password3','Tampa', 'Fl', 'marcus@florida.com', 'associate');
 
 insert into users(firstname,lastname, username, password, city, state, email, account)
 values ('David','Degea','davidsdegea', 'password4', 'Jacksonvile', 'FL', 'davidson@florida.com', 'associate');
 
 insert into users(firstname,lastname, username, password, city, state, email, account) 
 values ('Cristiano','Ronaldo','CR7junior','password5', 'Redmond', 'WA', 'cristiano@portugal.com', 'associate');
 insert into users( firstname,lastname, username, password, city, state, email, account) 
 values ( 'Edinson','Cavani','edinsonca','password6', 'NewYork', 'NY', 'edinsonca@uraguay.com', 'associate');
 
 insert into users( firstname,lastname, username, password, city, state, email, account) 
 values ( 'Chirstian','Pulisic','pulisic22','password7', 'Hershey', 'Pennsylvania', 'captainAmerica@usa.com', 'associate' );

-- posts seeds --
insert into posts( authorid, posttext, image, likes) 
 values (1, 'Java stands out when it comes to OOP. ', 'https://imgur.com/ZciDcYT', 256 );

 insert into posts( authorid, posttext, image, likes) 
 values (2, 'React is one the popular JS front-end libraries.', 'https://imgur.com/84FTa8k', 155 );

 insert into posts( authorid, posttext,  image, likes) 
 values (3, 'JS can do both front-end and back-end jobs.', 'https://imgur.com/37o8AdA', 388 );

 insert into posts( authorid, posttext,  image, likes) 
 values (4, 'Typescript is the super hand of javascript', 'https://imgur.com/fZiBhZ8', 567 );

 insert into posts( authorid, posttext, image, likes) 
 values (5, 'Node JS a javascript work environment',  'https://imgur.com/kbDOHV2', 654 );

-- category seeds --
insert into category (categoryid, title, mainbodycontent)
values (2,'React for beginners', 'Today, we are working on a Hello World project to make React less scary.');
insert into category (categoryid, title, mainbodycontent)
values (2,'React hooks', 'using all hookes...when to use them and how to use them. All here with this article');
insert into category (categoryid, title, mainbodycontent)
values (3,'Beginner to coding', 'Hello World');
insert into category (categoryid, title, mainbodycontent)
values (3,'Start with HTML ', 'HTML for learners');
insert into category (categoryid, title, mainbodycontent)
values (4,'Typescript', 'Getting started with typescript by creating classes...lets start here...');
insert into category (categoryid, title, mainbodycontent)
values (4,'Using Redux Today', 'The pros and cons of using redux and how to incorperate in your next projec.');
insert into category (categoryid, title, mainbodycontent)
values (5,'Way to expand you programming skills', 'To improve you program skills, you need to experiement with some of these concepts...');
insert into category (categoryid, title, mainbodycontent)
values (5,'How to build a full stack project ', 'To build a full stack site, you need to make a database and website. Follow for more...');

--  report seeds
insert into report (postid, userid, username, issue)
values (13, 2, 'anthonymartial', 'link to java tutorial didnt work');
insert into report (postid, userid, username, issue)
values (14, 7, 'pulisic22', 'Made an inappropriate comment');
insert into report (postid, userid, username, issue)
values (15, 5, 'CR7junior', 'Made a false statement...Messi is better');

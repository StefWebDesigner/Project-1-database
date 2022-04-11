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

insert into category( id, title, mainbodycontent, genreCategory)
values( 22, 'Super fun activity', 'bicking is super fun That I would love to bick very often', 'Activity');


insert into category(id, title, mainbodycontent, genreCategory)
values(23, 'Super delicious food', 'Wagiyu beef is so delicious  that I want to eat it  very often', 'Food');


insert into category(id, title, mainbodycontent, genreCategory)
values(24, 'New cocktail drink in town', 'a cocktail called pain killer is so good  that I would love to have it  very often', 'Drink')


 
 
 
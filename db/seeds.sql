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
 values (1, 'Astra launched its first rocket from Florida ', 'https://imgur.com/a/x0bVVic', 256 );

 insert into posts( authorid, posttext, image, likes) 
 values (2, 'Travllers having fun in Germany', 'https://imgur.com/zJTZBpV', 155 );

 insert into posts( authorid, posttext,  image, likes) 
 values (3, 'Not one of the best posts', 'https://imgur.com/NnhgPJU', 388 );

 insert into posts( authorid, posttext,  image, likes) 
 values (4, 'Beautiful lake Bohinji Slovenia', 'https://imgur.com/Hu6oQXp', 567 );

 insert into posts( authorid, posttext, image, likes) 
 values (5, 'A night in Amesterdam',  'https://imgur.com/uG2HAXB', 654 );

 insert into posts( authorid, posttext, image, likes) 
 values (6, 'Beautiful Pula', 'https://imgur.com/JzQqUdw', 345 );

-- category seeds --

insert into category( id, title, mainbodycontent, genreCategory)
values( 22, 'Super fun activity', 'bicking is super fun That I would love to bick very often', 'Activity');


insert into category(id, title, mainbodycontent, genreCategory)
values(23, 'Super delicious food', 'Wagiyu beef is so delicious  that I want to eat it  very often', 'Food');


insert into category(id, title, mainbodycontent, genreCategory)
values(24, 'New cocktail drink in town', 'a cocktail called pain killer is so good  that I would love to have it  very often', 'Drink')




 insert into tips (tiptitle, tipbody, tipgenre)
 values('title example', 'fact to java', 'Java');
 
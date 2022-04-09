-- users seeds --

insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post) 
 values (01134, 'Luke','Shaw', 'lukeshaw', 'password1', 'Mosscow', 'Idaho', 'luck@mosscow.com', 'Admin', 3);
 
 insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post) 
 values (01135, 'Anthony','Martial','anthonymartial','password2', 'SanJose', 'CA', 'anthony@sans.com', 'user', 5);
 
 insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post) 
 values (01136, 'Marcus','Rashford', 'marcusrashy','password3','Tampa', 'Fl', 'marcus@florida.com', 'user', 6);
 
 insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post)
 values (01137, 'David','Degea','davidsdegea', 'password4', 'Jacksonvile', 'FL', 'davidson@florida.com', 'user', 7);
 
 insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post) 
 values (01138,'Cristiano','Ronaldo','CR7junior','password5', 'Redmond', 'WA', 'cristiano@portugal.com', 'user', 8);
 insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post) 
 values (01139, 'Edinson','Cavani','edinsonca','password6', 'NewYork', 'NY', 'edinsonca@uraguay.com', 'user', 9 );
 
 insert into users(userid, firstname,lastname, username, password, city, state, email, accountType, post) 
 values (01139, 'Chirstian','Pulisic','pulisic22','password7', 'Hershey', 'Pennsylvania', 'captainAmerica@usa.com', 'user', [10, 2] );



-- posts seeds --
insert into posts(postid, authorid, posttext, postdate, likes) 
 values (101, 115567, 'This is super nice', '', 256 );

 insert into posts(postid, authorid, posttext, postdate, likes) 
 values (102, 115568, 'Just a reminder', '', 155 );

 insert into posts(postid, authorid, posttext, postdate, likes) 
 values (102, 115569, 'Not one of the best posts', '', 388 );

 insert into posts(postid, authorid, posttext, postdate, likes) 
 values (102, 115569, 'Done this many times before but never liked it this much', '', 567 );

 insert into posts(postid, authorid, posttext, postdate, likes) 
 values (102, 115569, 'Not to mention their food, the drink itself was great', '', 654 );

 insert into posts(postid, authorid, posttext, postdate, likes) 
 values (102, 115569, 'Greatest of the films I have watched', '', 345 );

-- category seeds --

insert into category(title, mainbodycontent, genreCategory)
values('Super fun activity', 'bicking is super fun That I would love to bick very often', 'Activity');


insert into category(title, mainbodycontent, genreCategory)
values('Super delicious food', 'Wagiyu beef is so delicious  that I want to eat it  very often', 'Food');


insert into category(title, mainbodycontent, genreCategory)
values('New cocktail drink in town', 'a cocktail called pain killer is so good  that I would love to have it  very often', 'Drink')


 
 
 
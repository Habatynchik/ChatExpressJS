create table users
(
    id       serial,
    username varchar(64),
    password varchar,

    primary key (id)
);

create table messages
(
    id      serial,
    message varchar,
    user_id int,

    primary key (id),
    foreign key (user_id) references users (id)
);

create table friends
(
    id             serial,
    first_user_id  int,
    second_user_id int,

    primary key (id),
    foreign key (first_user_id) references users (id),
    foreign key (second_user_id) references users (id)
);

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

create table chats
(
    id          serial,
    name        varchar(64),
    description varchar,
    logo_url    varchar,

    primary key (id)
);


alter table messages
    add chat_id int,
    add foreign key (chat_id) references chats(id);
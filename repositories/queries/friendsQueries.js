const friendsQueries = {
    CREATE_FRIENDSHIP: `
        INSERT INTO friends (first_user_id, second_user_id)
        VALUES ($1, $2);
    `,
    DELETE_FRIENDSHIP: `
        DELETE FROM friends 
        WHERE first_user_id = $1 AND second_user_id = $2 
            OR first_user_id = $2 AND second_user_id = $1;
    `,
    SELECT_ALL_FRIENDS_BY_USER_ID: `
        SELECT f.second_user_id FROM friends f 
        WHERE first_user_id = $1 
        UNION 
        SELECT f.first_user_id FROM friends f 
        WHERE second_user_id = $1;
    `,
}

module.exports = friendsQueries;
const runQuery = require('../configurations/db')
const friendsQueries = require('./queries/friendsQueries')

const friendsRepository = {
    createFriendship: async (first_user_id, second_user_id) => {
        try {
            let result = await runQuery(friendsQueries.CREATE_FRIENDSHIP, [first_user_id, second_user_id])
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },
    deleteFriendship: async (user_id) => {
        try {
            await runQuery(friendsQueries.DELETE_FRIENDSHIP, [user_id])
            return true;
        } catch (error) {
            throw error;
        }
    },
    getAllFriendships: async (user_id) => {
        try {
            let result = await runQuery(friendsQueries.SELECT_ALL_FRIENDS_BY_USER_ID, [user_id])
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = friendsRepository

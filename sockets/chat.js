module.exports = function (io) {
    io.on('connection', function (socket) {
        console.log('A user connected');

        socket.on('join-chat', function (chatId) {
            socket.join(chatId);
            console.log(`User joined chat: ${chatId}`);
        });

        socket.on('leave-chat', function (chatId) {
            socket.leave(chatId);
            console.log(`User left chat: ${chatId}`);
        });

        socket.on('start-writing', function (data) {
            io.to(data.chatId).emit('start-writing', data);
        });

        socket.on('end-writing', function (data) {
            io.to(data.chatId).emit('end-writing', data);
        });

        socket.on('new-message', function (data) {
            io.to(data.chatId).emit('message-received', data);
        });

        socket.on('disconnect', function () {
            console.log('A user disconnected');
        });
    });
};

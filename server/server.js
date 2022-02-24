// for testing using dummy code
const { chats } = require("./dummy_data/dummy_data")

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { 
    console.log(`The server is now listening on PORT ${ PORT }`);
});

// template function for getting data on desired chats
app.get("/chat/:id", (req, res) => { 
    const requestedChatId = req.params.id;
    const desiredChat = chats.find(chat => 
        chat.chatId === requestedChatId
    );

    res.send(desiredChat);
});
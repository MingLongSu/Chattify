const chats = [
    {
        isGroupChat: false,
        users: [
            {
                name: "Ren Swanson",
                id: "7774",
            },
            {
                name: "Kakashi Hatake",
                id: "8824",
            }
        ],
        chatId: "8cb3ebb8-30f9-11e5-a151-feff819cdc9f",
        chatName: "Ren Swanson",
    },
    {
        isGroupChat: true,
        users: [
            {
                name: "Billy Bob",
                id: "8921",
            },
            {
                name: "Joe Hasashi",
                id: "8824",
            },
            {
                name: "Sai Dah",
                id: "4356",
            },
            {
                name: "Mi Chaeng",
                id: "5563",
            },
            {
                name: "Two Yeon",
                id: "5678",
            }
        ], 
        chatId: "9bc1ef9c-6719-4041-afd3-c5b87c90690d",
        chatName: "Best Friends",
        groupAdmin: {
            name: "Two Yeon",
            id: "5678",
        }
    }

]

module.exports = { chats };
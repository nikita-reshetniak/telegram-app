import joaquin_phoenix from './imgs/joaquin_phoenix.jpg';
import keanu from './imgs/keanu.png';

let users = [
    {
        name: "Joaquin Phoenix",
        avatarUrl: joaquin_phoenix,
        lastSeen: "5 minutes",
        messages: [
                {
                    message: ")",
                    time: new Date(2020, 3, 7, 9, 45)
                },
                {
                    message: "Forgive my laughter. I have a condition.",
                    time: new Date(2020, 3, 7, 9, 45)
                },
                {
                    message: "You don't listen, do you?",
                    time: new Date(2020, 3, 7, 11, 15)
                },
                {
                    message: "???",
                    time: new Date(2020, 3, 7, 11, 15)
                },
                {
                    message: "(♠_♦)",
                    time: new Date(2020, 3, 7, 11, 15)
                },
                {
                    message: "Someone who hides behind a mask.",
                    time: new Date(2020, 3, 7, 11, 16)
                },
                {
                    message: "I hope my death makes more cents than my life.",
                    time: new Date(2020, 3, 7, 13, 28)
                },
                {
                    message: "Ahahhaa)",
                    time: new Date(2020, 3, 7, 16, 37)
                },
                {
                    message: "You wouldn't get it",
                    time: new Date(2020, 3, 7, 16, 37)
                }
        ]
    },
    {
        name: "Keanu Reeves",
        avatarUrl: keanu,
        lastSeen: "2 hours",
        messages: [
                {
                    message: "Do I look civilised to you?",
                    time: new Date(2020, 3, 7, 9, 45)
                },
                {
                    message: "It's personal.",
                    time: new Date(2020, 3, 7, 9, 45)
                },
                {
                    message: "People keep asking if I'm back and I haven't really had an answer...",
                    time: new Date(2020, 3, 7, 11, 15)
                },
                {
                    message: "But now, yeah, I'm thinkin' I'm back!",
                    time: new Date(2020, 3, 7, 11, 15)
                },
                {
                    message: "So you could either hand over your son or you can die screaming alongside him!",
                    time: new Date(2020, 3, 7, 11, 15)
                },
                {
                    message: "I'd like a dinner reservation for twelve.",
                    time: new Date(2020, 3, 7, 13, 27)
                }
        ]
    }
]

export {users};
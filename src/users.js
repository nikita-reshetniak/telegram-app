import joaquin_phoenix from './imgs/joaquin_phoenix.jpg';
import keanu_reeves from './imgs/keanu_reeves.jpg';
import mufasa from './imgs/mufasa.png';

let users = [
    {
        name: "Arthur",
        avatarUrl: joaquin_phoenix,
        lastSeen: "5 minutes",
        messages: [
            {
                message: "Forgive my laughter. I have a condition.",
                time: new Date(2020, 3, 7, 9, 45)
            },
            {
                message: "* It's a medical condition causing sudden, frequent, uncontrollable laughter that doesn’t match how you feel. It can happen in people with a brain injury or certain neurological conditions. *",
                time: new Date(2020, 3, 7, 9, 45)
            },
            {
                message: "I heard this song on the radio the other day.",
                time: new Date(2020, 3, 7, 10, 27)
            },
            {
                message: "And the guy was singing that his name was Carnival.",
                time: new Date(2020, 3, 7, 10, 27)
            },
            {
                message: "Which is crazy, because that’s my clown name.",
                time: new Date(2020, 3, 7, 10, 28)
            },
            {
                message: "At work, until a little while ago, it was like nobody ever saw me.",
                time: new Date(2020, 3, 7, 10, 28)
            },
            {
                message: "Even I didn’t know if I really existed.",
                time: new Date(2020, 3, 7, 10, 28)
            },
            {
                message: "You don't listen, do you?",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "I don’t think you ever really listened to me.",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "You just ask the same questions every week.",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "\"How’s your job?\"",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "\"Are you having any negative thoughts?\"",
                time: new Date(2020, 3, 7, 11, 16)
            },
            {
                message: "All I have are negative thoughts.",
                time: new Date(2020, 3, 7, 11, 16)
            },
            {
                message: "But you don’t listen.",
                time: new Date(2020, 3, 7, 11, 17)
            },
            {
                message: "Anyway, I said, for my whole life, I didn’t know if I even really existed.",
                time: new Date(2020, 3, 7, 11, 33)
            },
            {
                message: "But I do.",
                time: new Date(2020, 3, 7, 11, 33)
            },
            {
                message: "And people are starting to notice.",
                time: new Date(2020, 3, 7, 11, 34)
            },
            {
                message: "I've been using it as a journal, but also a joke diary.",
                time: new Date(2020, 3, 7, 13, 24)
            },
            {
                message: "Funny thoughts or, or observations",
                time: new Date(2020, 3, 7, 13, 24)
            },
            {
                message: "Did I tell you I'm pursuing a career in stand-up comedy?",
                time: new Date(2020, 3, 7, 13, 25)
            },
            {
                message: "I think I did.",
                time: new Date(2020, 3, 7, 13, 25)
            },
            {
                message: "I didn't realize you wanted to read it.",
                time: new Date(2020, 3, 7, 13, 27)
            },
            {
                message: "\"I just hope my death makes more cents than my life.\"",
                time: new Date(2020, 3, 7, 13, 28)
            },
            {
                message: "I think I felt better when I was locked up, in the hospital.",
                time: new Date(2020, 3, 7, 13, 44)
            },
            {
                message: "My mother thought I was mentally ill, so she had me committed.",
                time: new Date(2020, 3, 7, 13, 44)
            },
            {
                message: "I was wondering if you could ask the doctor to increase my medication.",
                time: new Date(2020, 3, 7, 13, 45)
            },
            {
                message: "I just don’t want to feel so bad anymore.",
                time: new Date(2020, 3, 7, 13, 45)
            },
            {
                message: "Just thinking of this joke.",
                time: new Date(2020, 3, 7, 16, 37)
            },
            {
                message: "You wouldn't get it",
                time: new Date(2020, 3, 7, 16, 37)
            }
        ]
    },
    {
        name: "John Wick",
        avatarUrl: keanu_reeves,
        lastSeen: "2 hours",
        messages: [
            {
                message: "This is Wick.",
                time: new Date(2020, 3, 6, 18, 32)
            },
            {
                message: "John Wick, that’s right.",
                time: new Date(2020, 3, 6, 18, 32)
            },
            {
                message: "Yeah, it has been awhile.",
                time: new Date(2020, 3, 6, 18, 32)
            },
            {
                message: "I’d like to make a reservation for four.",
                time: new Date(2020, 3, 6, 18, 33)
            },
            {
                message: "Can you send me up a hamburger - rare, mustard, onions, pickle- and fries?",
                time: new Date(2020, 3, 7, 9, 45)
            },
            {
                message: "A nice Pinot. Mid-range. I’ll leave that to your discretion.",
                time: new Date(2020, 3, 7, 9, 45)
            },
            {
                message: "My name is John Wick.",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "You took my car.",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "You killed my dog.",
                time: new Date(2020, 3, 7, 11, 15)
            },
            {
                message: "Where",
                time: new Date(2020, 3, 7, 11, 16)
            },
            {
                message: "is",
                time: new Date(2020, 3, 7, 11, 16)
            },
            {
                message: "Iosef?",
                time: new Date(2020, 3, 7, 11, 16)
            },
            {
                message: "And where is Viggo?",
                time: new Date(2020, 3, 7, 11, 17)
            },
            {
                message: "Please close out my tab.",
                time: new Date(2020, 3, 7, 13, 27)
            },
            {
                message: "Viktor is dead.",
                time: new Date(2020, 3, 7, 15, 10)
            },
            {
                message: "As for the car, I got that back, but as for Moose, well...",
                time: new Date(2020, 3, 7, 15, 10)
            },
            {
                message: "I’m takin’ a page from Exodus on that one: an eye for an eye.",
                time: new Date(2020, 3, 7, 15, 11)
            },
            {
                message: "No... no, better yet, Genesis.",
                time: new Date(2020, 3, 7, 15, 11)
            },
            {
                message: "Adah and Zillah, hear my voice.",
                time: new Date(2020, 3, 7, 15, 13)
            },
            {
                message: "Wives of Lamech, listen to my speech.",
                time: new Date(2020, 3, 7, 15, 13)
            },
            {
                message: "For I have killed a man for wounding me, even a young man for hurting me.",
                time: new Date(2020, 3, 7, 15, 14)
            },
            {
                message: "If Cain shall be avenged sevenfold, then Lamech seventy-sevenfold.",
                time: new Date(2020, 3, 7, 15, 14)
            },
            {
                message: "Make your peace with God, Iosef...",
                time: new Date(2020, 3, 7, 15, 15)
            },
            {
                message: "...for the Devil shall see you soon.",
                time: new Date(2020, 3, 7, 15, 15)
            },
        ]
    },
    {
        name: "Mufasa",
        avatarUrl: mufasa,
        lastSeen: "5 years",
        messages: [
            {
                message: "Look Simba.",
                time: new Date(2020, 3, 6, 17, 30)
            },
            {
                message: "Everything the light touches is our kingdom.",
                time: new Date(2020, 3, 6, 17, 30)
            },
            {
                message: "A king's time as ruler rises and falls like the sun.",
                time: new Date(2020, 3, 6, 17, 30)
            },
            {
                message: "One day Simba, the sun will set on my time here",
                time: new Date(2020, 3, 6, 17, 31)
            },
            {
                message: "and will rise with you as the new king.",
                time: new Date(2020, 3, 6, 17, 31)
            },
            {
                message: "Everything you see exists together, in a delicate balance.",
                time: new Date(2020, 3, 6, 17, 31)
            },
            {
                message: "As king, you need to understand that balance, and respect all the creatures",
                time: new Date(2020, 3, 6, 17, 32)
            },
            {
                message: "from the crawling ant to the leaping antelope.",
                time: new Date(2020, 3, 6, 17, 32)
            },
            {
                message: "When we die, our bodies become the grass.",
                time: new Date(2020, 3, 6, 17, 32)
            },
            {
                message: "And the antelope eat the grass.",
                time: new Date(2020, 3, 6, 17, 33)
            },
            {
                message: "And so we are all connected in the great Circle of Life.",
                time: new Date(2020, 3, 6, 17, 33)
            }
        ]
    }
]

export default users;
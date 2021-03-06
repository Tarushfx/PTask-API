const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/quote", () =>
  console.log("quotes connected")
);

let quotes = [
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    by: "Carol Burnett",
    tags: [],
  },
  {
    quote: "Nothing is impossible. The word itself says ‘I'm possible!'",
    by: "Audrey Hepburn",
    tags: [],
  },
  {
    quote: "There is nothing impossible to they who will try.",
    by: "Alexander the Great",
    tags: [],
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    by: "Michael Altshuler",
    tags: [],
  },
  {
    quote:
      "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    by: "Nicole Kidman",
    tags: [],
  },
  {
    quote:
      "Keep your face always toward the sunshine, and shadows will fall behind you.",
    by: "Walt Whitman",
    tags: [],
  },
  {
    quote:
      "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    by: "Amal Clooney",
    tags: [],
  },
  {
    quote:
      "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.",
    by: "Duchess Meghan",
    tags: [],
  },
  {
    quote:
      "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened .... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please.",
    by: "Taylor Swift",
    tags: [],
  },
  {
    quote:
      "You define your own life. Don't let other people write your script.",
    by: "Oprah Winfrey",
    tags: [],
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    by: "Malala Yousafzai",
    tags: [],
  },
  {
    quote:
      "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
    by: "Dr. Phil",
    tags: [],
  },
  {
    quote:
      "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.",
    by: "Carrie Ann Moss",
    tags: [],
  },
  {
    quote:
      "For me, becoming isn't about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
    by: "Michelle Obama",
    tags: [],
  },
  {
    quote: "Spread love everywhere you go.",
    by: "Mother Teresa",
    tags: [],
  },
  {
    quote:
      "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    by: "Lady Gaga",
    tags: [],
  },
  {
    quote:
      "If you make your internal life a priority, then everything else you need on the outside will be given to you and it will be extremely clear what the next step is.",
    by: "Gabrielle Bernstein",
    tags: [],
  },
  {
    quote:
      "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    by: "Mandy Hale",
    tags: [],
  },
  {
    quote:
      "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    by: "Ralph Waldo Emerson",
    tags: [],
  },
  {
    quote:
      "I'm going to be gone one day, and I have to accept that tomorrow isn't promised. Am I OK with how I'm living today? It's the only thing I can help. If I didn't have another one, what have I done with all my todays? Am I doing a good job?",
    by: "Hayley Williams",
    tags: [],
  },
  {
    quote:
      "I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this.",
    by: "Alexandria Ocasio-Cortez in Knock Down The House",
    tags: [],
  },
  {
    quote: "Belief creates the actual fact.",
    by: "William James",
    tags: [],
  },
  {
    quote:
      "No matter what people tell you, words and ideas can change the world.",
    by: "Robin Williams  as John Keating in Dead Poets Society",
    tags: [],
  },
  {
    quote:
      "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
    by: "Ava DuVernay",
    tags: [],
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    by: "Aristotle",
    tags: [],
  },
  {
    quote:
      "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    by: "Marie Forleo",
    tags: [],
  },
  {
    quote: "Weaknesses are just strengths in the wrong environment.",
    by: "Marianne Cantwell",
    tags: [],
  },
  {
    quote:
      "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    by: "Ella Fitzgerald",
    tags: [],
  },
  {
    quote: "Silence is the last thing the world will ever hear from me.",
    by: "Marlee Matlin",
    tags: [],
  },
  {
    quote: "In a gentle way, you can shake the world.",
    by: "Mahatma Gandhi",
    tags: [],
  },
  {
    quote:
      "Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.",
    by: "Morgan Freeman",
    tags: [],
  },
  {
    quote:
      "Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!",
    by: "Anne Frank",
    tags: [],
  },
  {
    quote:
      "All you need is the plan, the road map, and the courage to press on to your destination.",
    by: "Earl Nightingale",
    tags: [],
  },
  {
    quote:
      "I care about decency and humanity and kindness. Kindness today is an act of rebellion.",
    by: "Pink",
    tags: [],
  },
  {
    quote:
      "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    by: "Roald Dahl",
    tags: [],
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    by: "Maya Angelou",
    tags: [],
  },
  {
    quote:
      "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    by: "Joseph Campbell",
    tags: [],
  },
  {
    quote:
      "Find out who you are and be that person. That's what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come.",
    by: "Ellen DeGeneres",
    tags: [],
  },
  {
    quote: "Real change, enduring change, happens one step at a time.",
    by: "Ruth Bader Ginsburg",
    tags: [],
  },
  {
    quote: "Wake up determined, go to bed satisfied. ”— Dwayne  “The Rock",
    by: "Dwayne  “The Rock ” Johnson",
    tags: [],
  },
  {
    quote: "Nobody built like you, you design yourself.",
    by: "Jay-Z",
    tags: [],
  },
  {
    quote:
      "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, ‘I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
    by: "Eleanor Roosevelt",
    tags: [],
  },
  {
    quote: "Live your beliefs and you can turn the world around.",
    by: "Henry David Thoreau",
    tags: [],
  },
  {
    quote:
      "Our lives are stories in which we write, direct and star in the leading role. Some chapters are happy while others bring lessons to learn, but we always have the power to be the heroes of our own adventures.",
    by: "Joelle Speranza",
    tags: [],
  },
  {
    quote:
      "Don't try to lessen yourself for the world; let the world catch up to you.",
    by: "Beyoncé",
    tags: [],
  },
  {
    quote: "There's nothing more powerful than not giving a f—k.",
    by: "Amy Schumer",
    tags: [],
  },
  {
    quote: "Faith is love taking the form of aspiration.",
    by: "illiam Ellery Channing",
    tags: [],
  },
  {
    quote: "When it comes to luck, you make your own.",
    by: "Bruce Springsteen",
    tags: [],
  },
  {
    quote:
      "If you don't like the road you're walking, start paving another one!",
    by: "Dolly Parton",
    tags: [],
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.",
    by: "Rosa Parks",
    tags: [],
  },
  {
    quote:
      "The moral of my story is the sun always comes out after the storm. Being optimistic and surrounding yourself with positive loving people is for me, living life on the sunny side of the street.",
    by: "Janice Dean",
    tags: [],
  },
  {
    quote: "We generate fears while we sit. We overcome them by action.",
    by: "Dr. Henry Link",
    tags: [],
  },
  {
    quote:
      "Dreams don't have to just be dreams. You can make it a reality; if you just keep pushing and keep trying, then eventually you'll reach your goal. And if that takes a few years, then that's great, but if it takes 10 or 20, then that's part of the process.",
    by: "Naomi Osaka",
    tags: [],
  },
  {
    quote: "We are not our best intentions. We are what we do.",
    by: "Amy Dickinson",
    tags: [],
  },
  {
    quote:
      "I've noticed when I fear something, if I just end up doing it, I'm grateful in the end.",
    by: "Colleen Hoover",
    tags: [],
  },
  {
    quote: "Work hard, know your s—t, show your s—t, and then feel entitled.",
    by: "Mindy Kaling",
    tags: [],
  },
  {
    quote:
      "We've been making our own opportunities, and as you prove your worth and value to people, they can't put you in a box. You hustle it into happening, right?",
    by: "Jennifer Lopez",
    tags: [],
  },
  {
    quote:
      "When you've seen beyond yourself, then you may find, peace of mind is waiting there.",
    by: "George Harrison",
    tags: [],
  },
  {
    quote: "Out of the mountain of despair, a stone of hope.",
    by: "Martin Luther King, Jr.",
    tags: [],
  },
  {
    quote:
      "I'm realizing how much I've diminished my own power. I'm not doing that no more.",
    by: "Alicia Keys",
    tags: [],
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    by: "C.S. Lewis",
    tags: [],
  },
  {
    quote:
      "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving.",
    by: "Tina Turner",
    tags: [],
  },
  {
    quote: "How wild it was, to let it be.",
    by: "Cheryl Strayed",
    tags: [],
  },
  {
    quote:
      "The simple act of listening to someone and making them feel as if they have truly been heard is a most treasured gift.",
    by: "L. A. Villafane",
    tags: [],
  },
  {
    quote: "You have to be where you are to get where you need to go.",
    by: "Amy Poehler",
    tags: [],
  },
  {
    quote:
      "Don't be afraid. Because you're going to be afraid. But remember when you become afraid, just don't be afraid.",
    by: "Joan Jett",
    tags: [],
  },
  {
    quote:
      "We need to take risks. We need to go broke. We need to prove them wrong, simply by not giving up.",
    by: "Awkwafina",
    tags: [],
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts today.",
    by: "Franklin Delano Roosevelt",
    tags: [],
  },
  {
    quote: "It is never too late to be what you might have been.",
    by: "George Eliot",
    tags: [],
  },
  {
    quote: "You do not find the happy life. You make it.",
    by: "Camilla Eyring Kimball",
    tags: [],
  },
  {
    quote:
      "We all have problems. But it's not what happens to us, [it's] the choices we make after.",
    by: "Elizabeth Smart",
    tags: [],
  },
  {
    quote:
      "You don't have to be defined or confined by your environment, by your family circumstances, and certainly not by your race or gender.",
    by: "Mariah Carey",
    tags: [],
  },
  {
    quote:
      "When we let fear be our master, we cannot be happy and free as a butterfly. But when we choose to trust the journey and embrace love and joy, we are free to fly.",
    by: "Annicken R. Day",
    tags: [],
  },
  {
    quote: "Definitions belong to the definers, not the defined.",
    by: "Toni Morrison",
    tags: [],
  },
  {
    quote:
      "You must find the place inside yourself where nothing is impossible.",
    by: "Deepak Chopra",
    tags: [],
  },
  {
    quote:
      "Whatever you think the world is withholding from you, you are withholding from the world.",
    by: "Eckhart Tolle",
    tags: [],
  },
  {
    quote:
      "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    by: "Vince Lombardi",
    tags: [],
  },
  {
    quote:
      "A lot of people are afraid to say what they want. That's why they don't get what they want.",
    by: "Madonna",
    tags: [],
  },
  {
    quote:
      "We have to let go of who we think we should be and embrace what is.",
    by: "Achea Redd",
    tags: [],
  },
  {
    quote: "Being vulnerable is a strength, not a weakness.",
    by: "Selena Gomez",
    tags: [],
  },
  {
    quote:
      "In order for the light to shine so brightly, the darkness must be present.",
    by: "Sir Francis Bacon",
    tags: [],
  },
  {
    quote:
      "I don't look ahead. I'm right here with you. It's a good way to be.",
    by: "Danny DeVito",
    tags: [],
  },
  {
    quote:
      "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    by: "Sylvester Stallone in Rocky Balboa",
    tags: [],
  },
  {
    quote: "I will not let anyone scare me out of my full potential.",
    by: "Nicki Minaj",
    tags: [],
  },
  {
    quote:
      "We have to be better. We have to love more, hate less. We've gotta listen more and talk less. We've gotta know that this is everybody's responsibility.",
    by: "Meghan Rapinoe",
    tags: [],
  },
  {
    quote:
      "Trying to grow up is hurting. You make mistakes. You try to learn from them, and when you don't, it hurts even more.",
    by: "Aretha Franklin",
    tags: [],
  },
  {
    quote: "Let love rule.",
    by: "Lenny Kravitz",
    tags: [],
  },
  {
    quote: "The power of imagination makes us infinite.",
    by: "John Muir",
    tags: [],
  },
  {
    quote: "The only journey is the one within.",
    by: "Rainer Maria Rilke",
    tags: [],
  },
  {
    quote:
      "If my mind can conceive it, if my heart can believe it, then I can achieve it.",
    by: "Muhammad Ali",
    tags: [],
  },
  {
    quote: "Embrace the glorious mess that you are.",
    by: "Elizabeth Gilbert",
    tags: [],
  },
  {
    quote:
      "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
    by: "Rabindranath Tagore",
    tags: [],
  },
];
let x = quotes.filter((quote) => quote.by === "Beyonc é");
console.log(x);

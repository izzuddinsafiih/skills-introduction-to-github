// Questions database with 80 questions
const questions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        id: 3,
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: 1
    },
    {
        id: 4,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2
    },
    {
        id: 5,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        id: 6,
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1
    },
    {
        id: 7,
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Leopard", "Tiger"],
        correct: 1
    },
    {
        id: 8,
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        id: 9,
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2
    },
    {
        id: 10,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correct: 2
    },
    {
        id: 11,
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
        correct: 2
    },
    {
        id: 12,
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 1
    },
    {
        id: 13,
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correct: 2
    },
    {
        id: 14,
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correct: 1
    },
    {
        id: 15,
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        id: 16,
        question: "Which continent has the most countries?",
        options: ["Asia", "Europe", "Africa", "South America"],
        correct: 2
    },
    {
        id: 17,
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correct: 1
    },
    {
        id: 18,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    },
    {
        id: 19,
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1
    },
    {
        id: 20,
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Silver", "Oxygen", "Iron"],
        correct: 2
    },
    {
        id: 21,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },
    {
        id: 22,
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        id: 23,
        question: "Which is the highest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correct: 1
    },
    {
        id: 24,
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        correct: 1
    },
    {
        id: 25,
        question: "Which country is famous for inventing pizza?",
        options: ["France", "Spain", "Italy", "Greece"],
        correct: 2
    },
    {
        id: 26,
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2
    },
    {
        id: 27,
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Lion", "Leopard", "Cheetah"],
        correct: 1
    },
    {
        id: 28,
        question: "What is the freezing point of water?",
        options: ["-1°C", "0°C", "1°C", "2°C"],
        correct: 1
    },
    {
        id: 29,
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correct: 2
    },
    {
        id: 30,
        question: "What is the largest organ in the human body?",
        options: ["Brain", "Liver", "Lung", "Skin"],
        correct: 3
    },
    {
        id: 31,
        question: "Which sport is known as 'America's pastime'?",
        options: ["Football", "Basketball", "Baseball", "Hockey"],
        correct: 2
    },
    {
        id: 32,
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correct: 3
    },
    {
        id: 33,
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        id: 34,
        question: "Which is the deepest ocean trench?",
        options: ["Puerto Rico Trench", "Mariana Trench", "Java Trench", "Peru-Chile Trench"],
        correct: 1
    },
    {
        id: 35,
        question: "What is the study of earthquakes called?",
        options: ["Geology", "Seismology", "Meteorology", "Oceanography"],
        correct: 1
    },
    {
        id: 36,
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        correct: 3
    },
    {
        id: 37,
        question: "What is the longest bone in the human body?",
        options: ["Tibia", "Femur", "Humerus", "Radius"],
        correct: 1
    },
    {
        id: 38,
        question: "Which country has the most time zones?",
        options: ["Russia", "USA", "China", "Canada"],
        correct: 0
    },
    {
        id: 39,
        question: "What is the most abundant gas in the universe?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        correct: 1
    },
    {
        id: 40,
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3
    },
    {
        id: 41,
        question: "What is the capital of Brazil?",
        options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correct: 2
    },
    {
        id: 42,
        question: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        correct: 1
    },
    {
        id: 43,
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correct: 0
    },
    {
        id: 44,
        question: "Which is the fastest bird in the world?",
        options: ["Eagle", "Falcon", "Peregrine Falcon", "Hawk"],
        correct: 2
    },
    {
        id: 45,
        question: "What is the largest island in the world?",
        options: ["Australia", "Greenland", "New Guinea", "Borneo"],
        correct: 1
    },
    {
        id: 46,
        question: "How many hearts does an octopus have?",
        options: ["1", "2", "3", "4"],
        correct: 2
    },
    {
        id: 47,
        question: "Which metal is liquid at room temperature?",
        options: ["Lead", "Mercury", "Tin", "Zinc"],
        correct: 1
    },
    {
        id: 48,
        question: "What is the smallest unit of matter?",
        options: ["Molecule", "Atom", "Electron", "Proton"],
        correct: 1
    },
    {
        id: 49,
        question: "Which country is both in Europe and Asia?",
        options: ["Russia", "Turkey", "Kazakhstan", "All of the above"],
        correct: 3
    },
    {
        id: 50,
        question: "What is the speed of light in vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correct: 0
    },
    {
        id: 51,
        question: "Which mammal can fly?",
        options: ["Flying squirrel", "Bat", "Sugar glider", "Flying lemur"],
        correct: 1
    },
    {
        id: 52,
        question: "What is the largest lake in the world?",
        options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Huron"],
        correct: 1
    },
    {
        id: 53,
        question: "Which country invented tea?",
        options: ["India", "England", "China", "Japan"],
        correct: 2
    },
    {
        id: 54,
        question: "What is the most spoken language in the world?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        correct: 1
    },
    {
        id: 55,
        question: "Which organ produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2
    },
    {
        id: 56,
        question: "What is the tallest tree species in the world?",
        options: ["Oak", "Pine", "Redwood", "Eucalyptus"],
        correct: 2
    },
    {
        id: 57,
        question: "Which is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        correct: 1
    },
    {
        id: 58,
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound", "Franc"],
        correct: 2
    },
    {
        id: 59,
        question: "Which is the longest wall in the world?",
        options: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
        correct: 1
    },
    {
        id: 60,
        question: "What is the study of plants called?",
        options: ["Zoology", "Botany", "Geology", "Biology"],
        correct: 1
    },
    {
        id: 61,
        question: "Which is the most abundant element in Earth's crust?",
        options: ["Silicon", "Aluminum", "Iron", "Oxygen"],
        correct: 3
    },
    {
        id: 62,
        question: "What is the largest waterfall in the world?",
        options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        correct: 2
    },
    {
        id: 63,
        question: "Which animal has the longest lifespan?",
        options: ["Elephant", "Turtle", "Whale", "Parrot"],
        correct: 1
    },
    {
        id: 64,
        question: "What is the smallest country in Asia?",
        options: ["Singapore", "Maldives", "Brunei", "Bahrain"],
        correct: 1
    },
    {
        id: 65,
        question: "Which is the driest place on Earth?",
        options: ["Sahara Desert", "Atacama Desert", "Death Valley", "Gobi Desert"],
        correct: 1
    },
    {
        id: 66,
        question: "What is the most common blood type?",
        options: ["A+", "B+", "AB+", "O+"],
        correct: 3
    },
    {
        id: 67,
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1
    },
    {
        id: 68,
        question: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Luxor", "Aswan"],
        correct: 1
    },
    {
        id: 69,
        question: "Which is the largest freshwater lake by surface area?",
        options: ["Lake Baikal", "Lake Superior", "Lake Victoria", "Lake Huron"],
        correct: 1
    },
    {
        id: 70,
        question: "What is the main component of natural gas?",
        options: ["Ethane", "Propane", "Methane", "Butane"],
        correct: 2
    },
    {
        id: 71,
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correct: 1
    },
    {
        id: 72,
        question: "What is the hardest rock?",
        options: ["Granite", "Marble", "Diamond", "Quartz"],
        correct: 2
    },
    {
        id: 73,
        question: "Which is the most venomous snake in the world?",
        options: ["King Cobra", "Black Mamba", "Inland Taipan", "Death Adder"],
        correct: 2
    },
    {
        id: 74,
        question: "What is the largest volcano in the world?",
        options: ["Mount Vesuvius", "Mount Etna", "Mauna Loa", "Mount Fuji"],
        correct: 2
    },
    {
        id: 75,
        question: "Which is the coldest continent?",
        options: ["Asia", "Antarctica", "North America", "Europe"],
        correct: 1
    },
    {
        id: 76,
        question: "What is the most recycled material in the world?",
        options: ["Paper", "Plastic", "Glass", "Steel"],
        correct: 3
    },
    {
        id: 77,
        question: "Which is the largest coral reef system?",
        options: ["Belize Barrier Reef", "Great Barrier Reef", "Red Sea Coral Reef", "Caribbean Reef"],
        correct: 1
    },
    {
        id: 78,
        question: "What is the study of weather called?",
        options: ["Geology", "Meteorology", "Oceanography", "Astronomy"],
        correct: 1
    },
    {
        id: 79,
        question: "Which is the fastest fish in the ocean?",
        options: ["Tuna", "Shark", "Sailfish", "Marlin"],
        correct: 2
    },
    {
        id: 80,
        question: "What is the largest muscle in the human body?",
        options: ["Bicep", "Quadriceps", "Gluteus Maximus", "Latissimus Dorsi"],
        correct: 2
    }
];

// Function to get a question by ID
function getQuestionById(id) {
    return questions.find(question => question.id === id);
}

// Function to get a random question
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}
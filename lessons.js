let lessons=[
    {
        id: 1001,
        title: "<em>Math</em>",
        location: "London",
        price: 2000,
        spaces: 5,
        image: "images/math.jpg"
    },
    {
        id: 1002,
        title: "<em>Science</em>",
        location: "London",
        price: 200,
        spaces: 5,
        image: "images/science.png"
    },
    {
        id: 1003,
        title: "<em>English</em>",
        location: "London",
        price: 300,
        spaces: 5,
        image: "images/english.jpg"
    },
    {
        id: 1004,
        title: "<em>Computers</em>",
        location: "London",
        price: 400,
        spaces: 5,
        image: "images/computer.jpg"
    },
    {
        id: 1005,
        title: "<em>Physics</em>",
        location: "Spain",
        price: 500,
        spaces: 5,
        image: "images/physics.jpg"
    },
    {
        id: 1006,
        title: "<em>Chemistry</em>",
        location: "India",
        price: 600,
        spaces: 5,
        image: "images/chem.jpg"
    },
    {
        id: 1007,
        title: "<em>Sales</em>",
        location: "Argentina",
        price: 700,
        spaces: 5,
        image: "images/sales.jpg"
    },
    {
        id: 1008,
        title: "<em>Architecture</em>",
        location: "London",
        price: 800,
        spaces: 5,
        image: "images/architect.jpg"
    },
    {
        id: 1009,
        title: "<em>Construction</em>",
        location: "Dubai",
        price: 900,
        spaces: 5,
        image: "images/constr.png"
    },
    {
        id: 1010,
        title: "<em>Philosophy</em>",
        location: "London",
        price: 1000,
        spaces: 5,
        image: "images/phil.jpg"
    },
]

function masking(input, textbox) {
    if (input.length == 4 || input.length == 9 || input.length == 14) {
        input = input + '-';
        textbox.value = input;
    }
}

interface typequestion {
    question: string,
    option: Array<string>,
    answer: number,
    points: number
}

const questions: typequestion[] = [
    {
        question: "traduza maça para italiano:",
        option: [
            "mela",
            "anguria",
            "banana",
            "pesca"
        ],
        answer: 0,
        points: 1,
    },
]
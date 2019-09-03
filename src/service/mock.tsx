const mock_users = () => {
    return [
        {
            id: 1,
            first_name: 'Andre',
            hobbies: [
                {
                    passion: 'High',
                    hobby: 'Listening to music',
                    year: new Date('2015-1-4'),
                },
                {
                    passion: 'Medium',
                    hobby: 'Playing football',
                    year: new Date('2015-1-4')
                }
            ],

        },
        {
            id: 2,
            first_name: 'Peter',
            hobbies: [
                {
                    passion: 'High',
                    hobby: 'Listening to music',
                    year: new Date('2015-1-4'),
                }
            ]
        },
        {
            id: 3,
            first_name: 'Markus',
            hobbies: [
                {
                    passion: 'High',
                    hobby: 'Listening to music',
                    year: new Date('2015-1-4'),
                },
                {
                    passion: 'Medium',
                    hobby: 'Playing football',
                    year: new Date('2015-1-4')
                },
                {
                    passion: 'Low',
                    hobby: 'Going to Concert',
                    year: new Date('2013-6-4')
                }
            ]

        }
    ]
}

export default mock_users
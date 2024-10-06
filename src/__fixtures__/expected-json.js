const expectedJson = `[
    {
        "name": "common",
        "status": "object-changed",
        "value": [
            {
                "name": "follow",
                "status": "added",
                "value": false
            },
            {
                "name": "setting1",
                "status": "not changed",
                "value": "Value 1"
            },
            {
                "name": "setting2",
                "status": "deleted",
                "value": 200
            },
            {
                "name": "setting3",
                "status": "changed",
                "valueBefore": true,
                "valueAfter": null
            },
            {
                "name": "setting4",
                "status": "added",
                "value": "blah blah"
            },
            {
                "name": "setting5",
                "status": "added",
                "value": [
                    {
                        "name": "key5",
                        "value": "value5"
                    }
                ]
            },
            {
                "name": "setting6",
                "status": "object-changed",
                "value": [
                    {
                        "name": "doge",
                        "status": "object-changed",
                        "value": [
                            {
                                "name": "wow",
                                "status": "changed",
                                "valueBefore": "",
                                "valueAfter": "so much"
                            }
                        ]
                    },
                    {
                        "name": "key",
                        "status": "not changed",
                        "value": "value"
                    },
                    {
                        "name": "ops",
                        "status": "added",
                        "value": "vops"
                    }
                ]
            }
        ]
    },
    {
        "name": "group1",
        "status": "object-changed",
        "value": [
            {
                "name": "baz",
                "status": "changed",
                "valueBefore": "bas",
                "valueAfter": "bars"
            },
            {
                "name": "foo",
                "status": "not changed",
                "value": "bar"
            },
            {
                "name": "nest",
                "status": "changed",
                "valueBefore": [
                    {
                        "name": "key",
                        "value": "value"
                    }
                ],
                "valueAfter": "str"
            }
        ]
    },
    {
        "name": "group2",
        "status": "deleted",
        "value": [
            {
                "name": "abc",
                "value": 12345
            },
            {
                "name": "deep",
                "value": [
                    {
                        "name": "id",
                        "value": 45
                    }
                ]
            }
        ]
    },
    {
        "name": "group3",
        "status": "added",
        "value": [
            {
                "name": "deep",
                "value": [
                    {
                        "name": "id",
                        "value": [
                            {
                                "name": "number",
                                "value": 45
                            }
                        ]
                    }
                ]
            },
            {
                "name": "fee",
                "value": 100500
            }
        ]
    }
]`;

export default expectedJson;
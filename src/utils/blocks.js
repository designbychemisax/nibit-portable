export default [
    {
        name : 'Send Message',
        type : 'send_message',
        description: 'Send a message to slack.',
        color: '#52cf67',
        textColor: '#ffffff',
        params: [
            {
                name : 'to',
                type : 'pulldown_other',
                label : 'To',
                options: [
                    {
                        label: "Source",
                        value: 'channel'
                    },
                    {
                        label: "Campana",
                        value: '@campana'
                    },
                    {
                        label: "Channel",
                        value: "%other%"
                    }
                ]
            },
            {
                name: 'message',
                type: 'text',
                label: 'Message'
            },
            {
                name: 'delay',
                type: 'text',
                label: 'Delay',
                default: '100'
            }
        ]
    },
    {
        name : 'Update User',
        type : 'update_status',
        description: 'Change the status of a user.',
        color: '#b8aa52',
        textColor: '#ffffff',
        params: [
            {
                name : 'slack_id',
                label : 'User',
                type : 'pulldown',
                default: 'campana',
                options: [
                    {
                        label: "campana",
                        value: 'UFF876AS'
                    },
                    {
                        label: "yobata",
                        value: 'UFF876ASA'
                    }
                ]
            },
            {
                name : 'comment',
                label : 'Comment',
                type: 'text'
            },
            {
                name: 'status',
                label: 'Status',
                type: 'pulldown',
                default: 'working',
                options: [
                    {
                        label: "Away",
                        value: 'away'
                    },
                    {
                        label: "Busy",
                        value: 'busy'
                    },
                    {
                        label: "Working",
                        value: "working"
                    }
                ]
            }
        ]
    },
    {
        name : 'Update Pickupon',
        type : 'update_pickupon',
        description: 'Change the status of your bot.',
        color: '#cf7e5c',
        textColor: '#ffffff',
        params: [
            {
                name : 'comment',
                label : 'Comment',
                type: 'text'
            },
            {
                name : 'status',
                label : 'Status',
                type: 'text',
                default : 'working'
            }
        ]
    },
    {
        name : 'Update sensor',
        type : 'set_sensor',
        description: 'Update the value of a sensor.',
        color: '#a247b8',
        textColor: '#ffffff',
        params: [
            {
                name : 'name',
                label : 'Sensor',
                type : 'pulldown',
                default: 'toilet',
                options: [
                    {
                        label: 'Toilet',
                        value: 'toilet'
                    },
                    {
                        label: 'Canica',
                        value: 'caninca'
                    }
                ]
            },
            {
                name : 'value',
                label : 'Value',
                type: 'text'
            }
        ]
    },
    {
        name : 'Send image',
        type : 'send_attachment',
        description: 'Send an image to a slack channel.',
        color: '#3a81cf',
        textColor: '#ffffff',
        params: [
            {
                name : 'file',
                label : 'File id',
                type : 'text'
            },
            {
                name : 'filename',
                label : 'Filename',
                type: 'text'
            },
            {
                name : 'title',
                label : 'Title',
                type: 'text'
            },
            {
                name: 'initial_comment',
                label : 'Comment',
                type: 'text'
            },
            {
                name: 'channel',
                label: 'Channel',
                type: 'text'
            }
        ]
    }
]
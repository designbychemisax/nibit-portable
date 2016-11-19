#NibitPortable a React.JS algorithm creator based on js.bit

This is a includable version of https://nibit.chemisax.com

### install

```
npm i --save nibit-portable
```

### usage

```javascript
<Nibit
    onChange={blocks => this.setState({blocks})}
    config={config}
    blocks={this.state.blocks}
/>
```

##block format
```javascript
[
    {
        type: 'block_type',
        params: {
            param1: 'value',
            param2: 'value'
        }
    },
]
```

#config format
```javascript
[
    {
        name: 'Block Name',
        type: 'block_type',
        description: 'This is the block description',
        color: '#ffffff',
        textColor: '#000000',
        params: [
            {
                name: 'param1',
                label: 'Param 1',
                type: 'text',
                default: 'placeholder'
            },
            {
                name: 'param2',
                label: 'Param 2',
                type: 'pulldown',
                options: [
                    {
                        label: 'Option 1',
                        value: 'option1'
                    },
                    {
                        label: 'Option 2',
                        value: 'option2'
                    }
                ]
            }
        ]
    },
]
```



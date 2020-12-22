# vue-inheritance-loader-jest

Jest transform to support testing on components that use [vue-inheritance-loader](https://github.com/mrodal/vue-inheritance-loader). 

This is a fork of the official [vue-inheritance-loader-jest](https://github.com/mrodal/vue-inheritance-loader-jest) because that version relies on [deasync](https://github.com/abbr/deasync), which I've found to be unreliable when running tests on Windows with recent versions of node. Where the official package calls into vue-inheritance-loader and then uses deasync to force it to return synchronously, this fork takes the alternative approach of just copying the logic from vue-inheritance-loader but modifying it to be naturally synchronous, therefore removing the need for deasync.

## Note of caution

I've developed this to get around the specific deasync problem on a specific project, so I don't know how widely this solution works for other situations. Use at your own risk.

## Installation

    > npm install --save-dev @timbarclay/vue-inheritance-loader-jest

In your jest config

```javascript
transform: {
    '^.+\\.vue$': '@timbarclay/vue-inheritance-loader-jest'
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)
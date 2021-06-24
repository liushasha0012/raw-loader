module.exports = function (source) {
    let json = JSON.stringify(source)
      .replace('foo', 'grape');
    return `export default ${json}`;
};

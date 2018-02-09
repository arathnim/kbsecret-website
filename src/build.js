var marked = require('marked');
var fs = require('fs');
var fs2 = require('fs-extra');
const matter = require('gray-matter');
const $ = require('cheerio');

function handlePost(s) {
  var m = matter(s);
  m.content = marked(m.content);
  return m;
}

console.log("Running build script");

var intro = handlePost(fs.readFileSync('./intro.md', 'utf8'))
fs.writeFileSync('./public/intro.json', JSON.stringify(intro))

var qs = handlePost(fs.readFileSync('./quickstart.md', 'utf8'))
fs.writeFileSync('./public/quickstart.json', JSON.stringify(qs))

var installation = handlePost(fs.readFileSync('./installation.md', 'utf8'))
fs.writeFileSync('./public/install.json', JSON.stringify(installation))

var custom = handlePost(fs.readFileSync('./customization.md', 'utf8'))
fs.writeFileSync('./public/customize.json', JSON.stringify(custom))

console.log("Markdown written");

fs2.copy("./man", "./public/man", function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});

console.log("man pages copied");

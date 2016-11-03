#readme-doc

![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000?style=plastic)
![node](https://img.shields.io/badge/node-4.x-blue.svg)


As a back-end nodejs developer , After the completion of coding , you need a document to show what did you prepare for user

This project help you to generate api document automatically

#Installation

using [npm](http://npmjs.org/) (the recommended way):

 ```
$ npm install readme-doc --save-dev
 ```

And readme-doc will be installed  to your project path.

#Usage

* ###Init

 ```
$ cd /path/to/your/project
$ readme-doc init
```
now ,you got    **README.template**  file  in the root path of your project

 ```
# Brief
### headers:
.
|        **name**         |       **value**       |
| :-----------------      | :-------------------: |
|  x-authorization-token  |          token        |
|  x-app-platform         |     web , web-admin   |
|  x-app-error            |     true , false      |
.
### querys:
-
|        **name**         |       **detail**       |
| :-----------------      | :-------------------: |
|        sort             |          排序           |
|        limit            |       限制返回数量（分页） |
|        skip             |       跳过返回数量（分页） |
.
<!- errors /test/data/exception.js ->
.
<!- models /test/data/models ->
.
<!- routes /test/data/routes.js ->
```

* ### Setup the config file
 
  you can remove tag if you don't need such as 
      <!- errors /test/data/exception.js ->

 you can change your headers table or querys table

 the most importment things is to change the tag's path if you need it 
      <!- errors /path/to/your/exception/file ->
      <!- routes /path/to/your/routes/file ->

* ### Generate reade file   

 ```
$ readme-doc gen
```

now , your readme.md will update automatically
#enjoy!

## License

  MIT

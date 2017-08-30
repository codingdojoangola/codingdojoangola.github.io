[![license](https://img.shields.io/badge/license-GNU%20-brightgreen.svg)](https://github.com/codingdojoangola/codingdojoangola.github.io/blob/develop/LICENSE) [![Slack](https://img.shields.io/badge/Coding%20Dojo%20Angola-slack-blue.svg)](https://codingdojoangola.now.sh) 

# Coding Dojo Angola Landing Page
Repositório da Landing Page do projecto Coding Dojo Angola.

## Contribuições

Tendo o NodeJS instalado na sua máquina, abra o terminal do git e execute:


* Faça o [fork](https://github.com/codingdojoangola/codingdojoangola.github.io/fork) do projeto para a sua conta
* Faça o clone do repositório para sua máquina:
  `git clone git@github.com:seunome-do-github/codingdojoangola.github.io.git`
*Entre no directório do projecto
  `cd codingdojoangola.github.io`
* Crie um branch baseado no branch **develop**
  `git checkout -b nome-da-feature-nova`

 * Caso ainda não tenha o gulp instalado instale com o comando:
  `npm i -g gulp`
 * Instale as dependẽncias
  `npm i`

* Execute o task runner com o comando (Para executar todas e continuar aguardando por mudanças)
  `gulp`

  - As tarefas definidas são:

 `gulp webserver`, `gulp styles`, `gulp imagemin`, `gulp watch`

 |Comando| Descrição|
 | :---: | --- |
 | `gulp webserver` | Inicia o servidor local com gulp-connect |
 | `gulp styles` | Compila o *Sass* para *css* e Minifica o css gerado |
 | `gulp imagemin` | Minfica as imagens diminuindo o tamanho das mesmas |
 | `gulp watch` | Aguarda por mudanças nos ficheiros (**scss** e **imagens**) para reexecutar cada tarefa acima |


* Organização dos ficheiros / directórios
>
```
 assets
   |_/bootstrap
   |_/css
   |_style.css
   |_/img
   |_/js
   |_script.js
 src
   |_/sass
   |_style.scss
 |_index.html
 |_.gitignore
 |_gulpfile.js
 |_package.json
 |_LICENSE
 ```

Utilize os ficheiros `index.html`, `style.scss` e `script.js` para fazer as alterações.
```
 assets
   |_/bootstrap
   |_/css
   |_style.css
   |_/img
   |_/js
   |_script.js
 src
   |_/sass
   |_style.scss
 |_index.html
 |_.gitignore
 |_gulpfile.js
 |_package.json
 |_LICENSE
 ```

Utilize os ficheiros `index.html`, `style.scss` e `script.js` para fazer as alterações.

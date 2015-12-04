# ionic es6 Webpack

> Template [Ionic sidemenu](http://ionicframework.com/getting-started/) using [ES6](https://github.com/lukehoban/es6features#readme) + [Webpack](https://webpack.github.io/) + [NG6](https://github.com/AngularClass/NG6-starter)

Esse repositorio serve para a criação projeto inicial feito em ionic usando a template sidemenu, porem com uma adapatação baseado no projeto [NG6-starter](https://github.com/AngularClass/NG6-starter) para ser escrito em Angular.js usando o ES6, Webpack + Babel e Gulp para gerenciar tarefas e gerar códigos.

Serão descritas aqui as principais modificações feitas para rodar um projeto Ionic, para as demais explicações acesse o projeto [NG6-starter](https://github.com/AngularClass/NG6-starter).  

# Getting Started

## Dependencies

Para rodar esse app é necessario:
+ [Node.js](https://nodejs.org/en/)
+ [Ionic](http://ionicframework.com/)
+ [Webpack](https://webpack.github.io/)
+ [Babel](https://babeljs.io/)

## Run

```sh
#clone
$  https://github.com/felisio/ionic-es6-webpack.git newProject && cd newProject

#install dependencies
$ npm install

#run
gulp
```

## Component

Baseado no gerador de component do NG6-starter, porem com as devidas adpatações para gerar um componente para o ionic. Sua criação é simples, bastar chamar umas task do gulp e ira assim criar o component dentro da pasta www/app/components. Assim gerando na seguinte estrutura:

```sh
  componentName/
    |__ componentName.component.html #Pagina aonde ficara os htmls do seu modulo
    |__ componentName.component.js #Arquivo da diretiva que linca ctrl e view
    |__ componentName.controller.js #Ctrl da diretiva
    |__ componentName.factory.js #resource para chamar serviços
    |__ componentName.html #Html que carrega components do ionic e da view
    |__ componentName.js #Criação do modulo angular para dispatch
    |__ componentName.spec.js #demosntrações de tests


```

## Code generator

Chame o seguinte comando no seu terminal

```sh
#generator
gulp component --name componentName
```

# Desafio Técnico Tecsomobi

Este projeto consiste em elaborar testes automatizados para uma função que exibe menus. O objetivo é simular diferentes cenários de acesso aos menus, verificando se o retorno da função está de acordo com as permissões de cada tipo de usuário.

## Escopo do Teste

Levando em consideração o exemplo abaixo, imagine que seja o retorno de uma função que mostra menus, elabore os testes usando qualquer biblioteca e linguagem (preferencialmente em JS):

1 - Simular usuário administrador (deverá dar OK, adm acessa todos os menus).
2 - Simular usuário NÃO administrador (deverá dar Não OK, pois a lista está retornando acessos de adm), logar no retorno da função todos os ítens que não deveriam estar aparecendo.

## Tecnologias Utilizadas

- Linguagem de Programação: JavaScript
- Biblioteca de Testes: Jest

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

## Instalação

1. Faça o download do projeto do GitHub clicando no botão "Code" e selecionando a opção "Download ZIP".

2. Extraia o arquivo ZIP em um diretório de sua escolha.

3. Abra o terminal e navegue até o diretório do projeto.

4. Execute o seguinte comando para instalar as dependências do projeto:

   npm install

5. Execute o seguinte comamdo para instalar o Jest

   npm install jest --save -dev
   
Executando os Testes

Para executar os testes, no terminal, dentro do diretório do projeto, execute o seguinte comando:

npx jest
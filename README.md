# Projeto Angular - Tabela de Países com Gráfico de População

Este é um projeto para teste em Angular que exibe uma tabela com informações sobre países, incluindo capital, região, população e bandeira. Além disso, ele apresenta um gráfico interativo que mostra a distribuição da população por região usando a biblioteca Chart.js. O projeto também inclui funcionalidade de busca e paginação.

## Tecnologias Utilizadas

- Angular
- TypeScript
- Chart.js
- ngx-pagination
- RxJS
- HTML/CSS

## Funcionalidades

- **Skeleton Loader**: Com a ajuda de um delay de 2sec para uma melhor UX, adicionei um skeleton para uma pré visualização da table.
- **Tabela de Países**: Exibe uma lista de países com informações detalhadas.
- **Gráfico Interativo**: Utiliza Chart.js para mostrar a distribuição da população por região.
- **Busca**: Permite buscar países pelo nome.
- **Paginação**: Implementada com ngx-pagination para facilitar a navegação na tabela.

## Estrutura do Projeto

O projeto possui os seguintes componentes principais:

- `app-header`: Exibe o nome da empresa e do participante.
- `app-table`: Exibe a tabela de países e o gráfico de população.

## Instalação

Para instalar e rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/AlissonDevPort/Country-Test.git
   cd Country-Test
   npm install
   ng serve
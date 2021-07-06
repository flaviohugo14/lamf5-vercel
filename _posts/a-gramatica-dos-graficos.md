---
title: 'A Gramática dos Gráficos'
excerpt: 'Apesar de parecer simples, não é uma tarefa fácil resumir o trabalho de um mês inteiro em gráficos que chamam a atenção do seu público e que mostram da forma mais clara possível o que aconteceu.'
coverImage: '/assets/blog/grammar.jpg'
date: '2021-07-05T05:35:07.322Z'
author:
  name: Flávio Pangrácio
  picture: '/assets/blog/authors/fh.png'
ogImage:
  url: '/assets/blog/grammar.jpg'
---

Se você pretende trabalhar como gestor de carteiras, certamente precisará ler e elaborar gráficos para justificar suas escolhas aos investidores, pois os gráficos são uma forma de simplificar e tornar visual toda uma análise.

Apesar de parecer simples, não é uma tarefa fácil resumir o trabalho de um mês inteiro em gráficos que chamam a atenção do seu público e que mostram da forma mais clara possível o que aconteceu.

A boa notícia é que já existe uma gramática dos gráficos, um acordo muito amplo sobre quais gráficos utilizar para cada situação e de que forma gerá-los. Em ["The Grammar of Graphics (Statistics and Computing)"](https://www.amazon.com.br/Grammar-Graphics-Leland-Wilkinson/dp/0387245448/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=the%20grammar%20of%20graphics&qid=1624051675&sr=8-1) de Leland Wilkinson encontramos um vasto conteúdo sobre elaboração de gráficos, aliás, a famosa biblioteca [ggplot2](https://ggplot2.tidyverse.org/), do [R](https://www.r-project.org/), se baseia nesse livro para construir gráficos.

Agora, vamos desdobrar essa gramática, falando das camadas que compõem um gráfico:

### Dados

Essa é a primeira camada, a base para o que vamos construir nas próximas etapas.

Os dados escolhidos devem ser capazes de responder às suas perguntas. Portanto, faça as perguntas certas, pense nas variáveis que vai utilizar e, claro, faça uma limpeza nesses dados, queremos mostrar apenas o que é confiável.

### Estética

Nessa camada, começamos a estruturar o gráfico. É como esboçar a embalagem de um produto, um elemento importante na hora de vendê-lo.

É na camada de estética é que definimos as escalas dos dados que escolhemos na primeira camada.

Não subestime o poder das escalas, escalas mal definidas podem confundir a análise de quem observa o gráfico.

### Geometria

É aqui que definimos a forma, o tamanho e a posição relativa do gráfico. É o desenho. Nesse momento o gráfico começa a tomar forma, e elementos como, pontos, linhas e intervalos são inseridos dentro do gráfico.

### Facets

A camada Facets é muito boa para quando precisamos visualizar muitos gráficos ou tem muita informação num mesmo gráfico. Podemos particionar o gráfico e dividir a visualização em porções menores, lado a lado.

### Estatística

Até agora só estruturamos como mostrar os dados, mas ainda não aplicamos nenhuma análise estatística para auxiliar na interpretação ou ainda inferir sobre algum resultado, logo, nessa camada, definimos qual método estatístico vamos utilizar (*análise de regressão* ou *análise de cluster*, por exemplo) e assim, apresentamos os dados de forma resumida.

### Coordenadas

Se você precisa plotar dados em um mapa, provavelmente você terá que definir as coordenadas da sua área de análise.

### Temas
Depois do gráfico pronto, precisamos rever se as camadas estão conversando bem entre si, e se o que você gerou faz sentido para a área de negócio, ou seja, para o público. Não apresente informações que confundam ou que fogem do tema da apresentação.

### Conclusão

Esse texto é apenas uma gota no oceano de informações presentes no livro citado acima. Para aprender de verdade, você precisa ler, estudar, e criar!

Fica a recomendação do [livro](https://www.amazon.com.br/Grammar-Graphics-Leland-Wilkinson/dp/0387245448/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=the%20grammar%20of%20graphics&qid=1624051675&sr=8-1), da [linguagem](https://www.r-project.org/) e da [biblioteca](https://ggplot2.tidyverse.org/). Bons estudos.

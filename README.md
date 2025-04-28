# Projeto - Dental Insurance

**FIAP - Faculdade de Informática e Administração Paulista**  
**Integrantes:**  
- Alissa Silva Cezero - RM552535  
- Melissa Barbosa de Souza - RM553954  
- Nicolas Paiffer do Carmo - RM554145  

**Challenge Odontoprev**  
**2ª Sprint**  
São Paulo, 2024

---

## Sumário

1. [Definição do Escopo e Requisitos](#1-definição-do-escopo-e-requisitos)
2. [Arquitetura](#2-arquitetura)
3. [Comunicação entre os Backends](#3-comunicação-entre-os-backends)
4. [Tecnologias Utilizadas](#4-tecnologias-utilizadas)
5. [Integração com Bancos de Dados](#5-integração-com-bancos-de-dados)
6. [Autenticação e Autorização](#6-autenticação-e-autorização)
7. [Frontend](#7-frontend)
8. [Manutenção e Escalabilidade](#8-manutenção-e-escalabilidade)
9. [Testes](#9-testes)
10. [Monitoramento e Logging](#10-monitoramento-e-logging)
11. [Produtos semelhantes no mercado](#produtos-semelhantes-no-mercado)
12. [Exemplo de Fluxo de um Sinistro](#exemplo-de-fluxo-de-um-sinistro)
13. [Avaliação do Potencial de Mercado](#avaliação-do-potencial-de-mercado)
14. [Protótipo das Telas](#protótipo-das-telas)
15. [Conclusão](#conclusão)

---

## Introdução

### Projeto - Dental Insurance

Este projeto implementa um sistema de gestão de sinistros odontológicos para a empresa Odontoprev, utilizando dois backends distintos: um desenvolvido em Java e outro em C#. A aplicação é responsável por gerenciar cadastros de clientes, processamento de sinistros, validação de documentos, além de oferecer uma interface para seguradoras e administradores.

---

## 1. Definição do Escopo e Requisitos

**Sinistros:**
- Implementar a definição, registro, processamento e resolução de sinistros odontológicos.

**Funcionalidades principais:**
- Cadastro de clientes
- Registro e acompanhamento de sinistros
- Atualização do status do sinistro
- Histórico de sinistros
- Envio e validação de documentação
- Integração com seguradoras

**Divisão de funcionalidades entre os backends:**
- **Backend Java:** Cadastro de clientes, gestão de contratos e consultas.
- **Backend C#:** Processamento e gestão de sinistros, emissão de relatórios e validação de documentos.

---

## 2. Arquitetura

- **Modelo adotado:** Utilizar uma arquitetura de microserviços, onde cada backend é um serviço isolado que se comunica via API RESTful.
- **APIs RESTful:** Expor endpoints REST em ambos os backends para integração e comunicação com o frontend.

---

## 3. Comunicação entre os Backends

- **APIs HTTP/REST:** Estabelecer comunicação entre os backends em Java e C# via chamadas HTTP.

---

## 4. Tecnologias Utilizadas

**Backend Java:**
- Framework: Spring Boot
- ORM: Hibernate (para mapeamento objeto-relacional)
- Banco de Dados: Oracle SQL Developer

**Backend C#:**
- Framework: ASP.NET Core
- ORM: Entity Framework
- Banco de Dados: Oracle SQL Developer

**Frontend Android:**
- Framework: Gradle
- Banco de Dados: Oracle SQL Developer

**Testes em Q&A:**
- Framework: JUnit5

---

## 5. Integração com Bancos de Dados

- **Estratégia de banco de dados:** Adotar um banco de dados compartilhado para os backends, com sincronização via API.
- **ORM:** Utilizar Hibernate (Java) e Entity Framework (C#) para gerenciar as operações com o banco de dados.

---

## 6. Autenticação e Autorização

- **OAuth2/JWT:** Implementar autenticação baseada em OAuth2 ou JWT, permitindo autenticação segura e autorização centralizada.
- **Controle de Acesso Baseado em Funções (RBAC):** Garantir que diferentes tipos de usuários (dentistas, seguradoras, administradores) tenham permissões adequadas.

---

## 7. Frontend

- **Desenvolvimento:** O frontend se comunica com ambos os backends via APIs REST.
- **Tecnologias sugeridas:** Frameworks como Gradle podem ser utilizados para o desenvolvimento do frontend em mobile, assim como Jetpack Compose.

---

## 8. Manutenção e Escalabilidade

- **Contêineres:** Implementar o uso de contêineres Docker para facilitar o empacotamento e o deploy dos backends.
- **Orquestração (opcional):** Usar Kubernetes para gerenciar a escalabilidade e disponibilidade dos serviços em produção.

---

## 9. Testes

- **Testes Unitários e de Integração**
- Para o backend Java, usar JUnit.
- Para o backend C#, usar xUnit.
- **Testes de API:** Utilizaremos ferramentas como Postman para validar as interações entre as APIs dos dois backends.

---

## 10. Monitoramento e Logging

(Por agora esta parte é apenas especulativa, pois não possuímos os conhecimentos necessários para realizar esta etapa.)

- **Monitoramento:** Integrar Prometheus para monitoramento de métricas e Grafana para dashboards de performance.
- **Logging:** Usar a ELK Stack (Elasticsearch, Logstash, Kibana) ou Splunk para centralizar os logs dos backends.

---

## Produtos semelhantes no mercado

1. **OdontoPrev**  
   Descrição: A própria OdontoPrev, maior operadora de planos odontológicos do Brasil, provavelmente já utiliza sistemas internos ou soluções tecnológicas para gerenciar sinistros, além de realizar a validação de documentos, registro de atendimentos e histórico de pacientes.  
   Funcionalidades Similares: Gestão de planos odontológicos, integração com clínicas, processamento de sinistros e controle administrativo para seguradoras.

2. **TOTVS**  
   Descrição: Empresa brasileira de software de gestão, a TOTVS oferece soluções para diferentes setores, incluindo planos de saúde e odontológicos. Eles fornecem módulos que podem incluir o processamento de sinistros, gestão de contratos, integração com redes de atendimento e auditoria de procedimentos.  
   Funcionalidades Similares: Gestão de contratos, validação de procedimentos e documentos, integração com bancos de dados e auditorias de sinistros.

3. **TISS (Troca de Informações na Saúde Suplementar)**  
   Descrição: Embora não seja um produto comercial em si, o padrão TISS (da ANS) é utilizado por várias operadoras de saúde para padronizar a troca de informações entre seguradoras, prestadores de serviços e administradores de planos de saúde, incluindo dados de sinistros e atendimentos odontológicos.  
   Funcionalidades Similares: Padronização de troca de informações entre operadoras e prestadores, envio e recebimento de documentos e dados de sinistros.

4. **Guidewire Software**  
   Descrição: Multinacional americana que oferece software para seguradoras, com foco em gestão de sinistros e operações de seguros em geral, embora voltado mais para seguros de saúde, vida e automóveis. O Guidewire ClaimCenter é um de seus produtos para gerenciamento de sinistros.  
   Funcionalidades Similares: Registro e acompanhamento de sinistros, validação de documentos, auditoria, emissão de relatórios e integração com seguradoras.

5. **SAP for Insurance**  
   Descrição: A SAP oferece uma solução específica para a indústria de seguros, que inclui módulos de gestão de sinistros e integração com redes de prestadores de serviços. Embora focada principalmente em seguros gerais, também pode ser adaptada para seguros odontológicos.  
   Funcionalidades Similares: Gestão de sinistros, processamento de documentos, integração com seguradoras e prestadores de serviços, automação de relatórios e análise de dados.

6. **Softplan – SAJ Saúde**  
   Descrição: Softplan é uma empresa brasileira de tecnologia que oferece soluções de gestão para o setor público e de saúde, incluindo o sistema SAJ Saúde. Esse sistema permite a gestão de sinistros de saúde e planos odontológicos.  
   Funcionalidades Similares: Gestão de sinistros, validação de documentos, gestão de contratos e integração com redes de atendimento.

7. **Startups e Soluções Customizadas**  
   Existem várias startups focadas em healthtech e insurtech que desenvolvem soluções personalizadas para seguradoras de saúde e odontológicas. Algumas delas podem já trabalhar com gestão de sinistros e automação de processos para seguradoras.  
   Exemplos: Dr. Consulta (focado mais em saúde geral, mas com potencial de ampliação para planos odontológicos), Conexa Saúde (telemedicina e gestão de planos de saúde).

---

## Exemplo de Fluxo de um Sinistro

1. O cliente registra um sinistro no frontend.
2. O backend Java salva os dados de cadastro e encaminha informações ao backend C# via API.
3. O backend C# processa o sinistro, valida documentos e retorna o status ao backend Java.
4. O backend Java atualiza o status do sinistro e notifica o cliente.

---

## Avaliação do Potencial de Mercado

- **Tamanho do Mercado Total (TAM):** R$13,5 bilhões (mercado total de sinistros odontológicos no Brasil).
- **Mercado Disponível (SAM):** R

$7 bilhões (segmento de seguros odontológicos).
- **Mercado Alvo (SOM):** R$3 bilhões (mercado potencial focado em digitalização de processos e automação).

---

## Protótipo das Telas

(Desenvolver protótipos das telas a partir dos fluxos de navegação definidos.)
![Protótipos - 1](https://github.com/lissCez/CHALLENGE_AI/blob/main/imagens/unnamed.png)
![Protótipos - 2](https://github.com/lissCez/CHALLENGE_AI/blob/main/imagens/unnamed%20(1).png)
![Protótipos - 3](https://github.com/lissCez/CHALLENGE_AI/blob/main/imagens/unnamed%20(2).png)
![Protótipos - 4](https://github.com/lissCez/CHALLENGE_AI/blob/main/imagens/unnamed%20(3).png)
---

## Conclusão

Este projeto busca implementar uma solução moderna e eficiente para o gerenciamento de sinistros odontológicos, com integração entre diferentes tecnologias, microserviços e uma interface intuitiva para usuários e administradores.

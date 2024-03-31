# PROJETO NEXUS

O Projeto Nexus é uma plataforma inovadora que visa incentivar colaboradores de empresas a adotarem posturas focadas no ESG (Ambiental, Social e Governança) em seu dia a dia, tanto dentro quanto fora do ambiente de trabalho. Através de gamificação e benefícios, o Nexus busca recompensar boas práticas e promover hábitos mais saudáveis.

## Recursos/Features

### Autentificação

- \[ ] Deveria ser possível autenticar usando e-mail e senha;
- \[ ] Deveria ser possível autenticar usando a conta google;
- \[ ] Deveria ser possivel recuperar a senha usando o e-mail;

### Organizações

- \[ ] Deveria ser possível criar uma nova organização (Nome, avatar, e-email);
- \[ ] Deveria ser possível atualizar uma organização;
- \[ ] Deveria ser possível deletar uma organização;
- \[ ] Deveria ser possível transferir o dono/owner da empresa;
- \[ ] Deveria ser possível criar equipes;
- \[ ] Deveria ser possível atualizar equipes;
- \[ ] Deveria ser possível deletar equipes;
- \[ ] Deveria ser possível atribuir um membro há equipe;
- \[ ] Deveria ser possível remover um membro de uma equipe;
- \[ ] Deveria ser possível atualizar a função de um membro;

### Convites

- \[ ] Deveria ser possível criar um novo membro com email e função;
- \[ ] Deveria ser possível aceitar um convite preenchendo nome e senha;
- \[ ] Deveria ser possível revogar convites pendentes;

### Membros

- \[ ] Deveria ser possível um membro registrar suas boas práticas;
- \[ ] Deveria ser possível um membro consultar seus pontos;
- \[ ] Deveria ser possível um membro poder verificar o sistema de calculo de pontos;
- \[ ] Deveria ser possível um membro consultar o ranking de membros com mais pontos;
- \[ ] Deveria ser possível um membro resgatar recompensas após um ciclo determinada pela organização;
- \[ ] Deveria ser possível um membro pertecer uma equipe da empresa;

### Gameficação

- \[ ] Deveria ser possível registrar atividades para os membros;
- \[ ] Deveria ser possível consultar todas as atividades criadas;
- \[ ] Deveria ser possível atualziar uma atividade;
- \[ ] Deveria ser possível deletar uma atividade;
- \[ ] Deveria ser possível criar recompensas;
- \[ ] Deveria ser possível atualizar recompensas;
- \[ ] Deveria ser possível consultar recompensas;
- \[ ] Deveria ser possível deletar recompensas;
- \[ ] Deveria ser possível criar um ranking de membros com mais pontos;

## Funções & Permissões

### Funções

- Dono(Conta como administrador)
- Administrador
- Membro
- Anônimo

### Tabela de Permissões

|  | Administrador | Membro | Anônimo |
| ----------- | ----------- | ----------- | ----------- |
| Atualizar uma organização | :white_check_mark: | :x: | :x: |
| Deletar uma organização | :white_check_mark: | :x: |  :x: |
| Transferir o dono da organização | :warning: | :x: | :x: |
| Criar equipes | :white_check_mark: | :x: | :x: |
| Atualizar equipes | :white_check_mark: | :x: | :x: |
| Deletar equipes | :white_check_mark: | :x: | :x: |
| Consultar equipes | :white_check_mark: | :white_check_mark: | :x: |
| Atribuir um membro a uma equipe | :white_check_mark: | :x: | :x: |
| Remover um membro de uma equipe | :white_check_mark: | :x: | :x: |
| Atualiza a função de um membro | :white_check_mark: | :x: | :x: |
| Criar um convite | :white_check_mark: | :x: | :x: |
| Definir um ciclo | :white_check_mark: | :x: | :x: |
| Criar uma atividade | :white_check_mark: | :x: | :x: |
| Atualizar uma atividade | :white_check_mark: | :x: | :x: |
| Deletar uma atividade | :white_check_mark: | :x: | :x: |
| Consultar uma atividade | :white_check_mark: | :white_check_mark: | :x: |
| Criar uma recompensa | :warning: | :x: | :x: |
| Atualizar uma recompensa | :warning: | :x: | :x: |
| Deletar uma recompensa | :warning: | :x: | :x: |
| Consultar as recompensa | :white_check_mark: | :white_check_mark: | :x: |

> :white_check_mark: = Permitido :x: = Negado :warning: = Permitido com Condições

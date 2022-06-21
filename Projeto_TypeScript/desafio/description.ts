enum Trabalho {
    Fotografo,
    Fisico,
    Engenheiro,
    Espia
}

enum Local {
    Queens,
    Nova_York,
    Manhattan,
    Stalingrado
}

enum Avanger {
    Homem_aranha,
    Hulk,
    Homem_de_ferro,
    Viuva_negra  
}

type Super = {
    nome: string,
    idade: number,
    profissao: Trabalho,
    origem: Local,
    vingador: Avanger
}

let pessoa1: Super = {
    nome: 'Peter Parker',
    idade: 27,
    profissao: Trabalho.Fotografo,
    origem: Local.Queens,
    vingador: Avanger.Homem_aranha
};

let pessoa2: Super = {
    nome: 'Bruce Banner',
    idade: 40,
    profissao: Trabalho.Fisico,
    origem: Local.Nova_York,
    vingador: Avanger.Hulk
};

let pessoa3: Super = {
    nome: 'Tony Stark',
    idade: 50,
    profissao: Trabalho.Engenheiro,
    origem: Local.Manhattan,
    vingador: Avanger.Homem_de_ferro
};

let pessoa4: Super = {
    nome: 'Natasha Romanoff',
    idade: 31,
    profissao: Trabalho.Espia,
    origem: Local.Stalingrado,
    vingador: Avanger.Viuva_negra
}
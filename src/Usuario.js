let users = [];

class Usuario {
  constructor(nip, senha) {
    this.nip = nip;
    this.senha = senha;
  }

  cadastrarUsuario(nip, senha) {
    if (nip === undefined || senha === undefined) {
      throw new Error("Nip ou senha inválidos");
    }
    let usuarioCadastrado = { nip, senha };
    users.push(usuarioCadastrado);
    return users;
  }
  /* Futura funcionalidade */
  filtrarUsuarioCadastrado(nip) {
    if (!users.find((userNip) => userNip.nip === nip)) {
      throw new Error("Usuário não encontrado");
    }
    return users.find((userNip) => userNip.nip === nip);
  }
  /* Futura funcionalidade */
  deletarUsuario(nip) {
    const posic = users.find((userNip) => userNip.nip === nip);
    if (!posic) {
      throw new Error("Usuário não encontrado!");
    }
    users.splice(posic, 1);
    return users;
  }
}








module.exports = Usuario;

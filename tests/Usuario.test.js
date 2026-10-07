const Usuario = require("../src/Usuario.js");
describe("Classe Usuario", () => {
  let usuario;
  beforeEach(() => {
    usuario = new Usuario(100, 12345);
  });

  describe("Estrutura das classes", () => {
    test("Deve criar instancia de Usuario", () => {
      expect(usuario).toBeInstanceOf(Usuario);
    });
 
    test("Deve possuir a propriedade NIP", () => {
      expect(usuario).toHaveProperty("nip");
    });
    test("Deve possuir a propriedade senha", () => {
      expect(usuario).toHaveProperty("senha");
    });

    test("Deve possuir os métodos: cadastrarUsuario, filtrarUsuarioCadastrado e deletarUsuario", () => {
      expect(typeof usuario.cadastrarUsuario).toBe("function");
      expect(typeof usuario.filtrarUsuarioCadastrado).toBe("function");
      expect(typeof usuario.deletarUsuario).toBe("function");
    });
  });

  describe("Estado inicial", () => {
    test("Deve armazenar os dados informados no constructor", () => {
      expect(usuario.nip).toBe(100);
      expect(usuario.senha).toBe(12345);
    });
  });

  describe("Busca de usuário", () =>{
    test("Deve buscar o usuário pelo NIP", () => {
        usuario.cadastrarUsuario(100,12345);
      
      const usuarioEncontrado = usuario.filtrarUsuarioCadastrado(100);
      
      expect(usuarioEncontrado).toEqual({ nip: 100, senha: 12345});
    })
    
  })

  describe("Deletar o usuário", () =>{
    test("Deve deletar o usuário pelo NIP", () =>{
      usuario.cadastrarUsuario(1,12345)
      usuario.deletarUsuario(1)
      
    })
  })
});


const expect = require("chai").expect;
const platzom = require("../dist/src/platzom").default;

describe("#platzom", function() {
  it(' Si la palabra termina con "ar", estas dos letras deben ser eliminas de la palabra.', function() {
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");
  });

  it('Si la palabra inicia con "z", se añade al final  de la palabra las letras"pe". Ejemplo palabra: "zorro" => "zorrope"', function() {
    const translation = platzom("Zorro");
    const translation2 = platzom("Zarpar");

    expect(translation).to.equal("Zorrope");
    expect(translation2).to.equal("Zarppe");
  });

  it('Si la palabra traducida tiene 10 o más letras, se debe dividir en dos porla mitad y estas dos partes deben estar unidas con un guión medio. Ejamplo: "abecedario" => "abce-dario".', function() {
    const translation = platzom("abecedario");
    expect(translation).to.equal("abece-dario");
  });

  it('Si la palabra original es un palíndromo, ninguna regla anteriaor cuenta yse devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.Ejemplo: "sometemos" => "SoMeTeMoS"', function() {
    const translation = platzom("sometemos");
    expect(translation).to.equal("SoMeTeMoS");
  });
});
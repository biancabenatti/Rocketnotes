module.exports={
  bail: true, //Se um teste falhar ele para de executar os testes para que possa resolver esse em questão.
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js" 
    /* Expressao regular para dizer qual o padrao dos arquivos de teste. 
    ** / - Dentro de qualquer pasta vai haver um arquivo que tenha qualquer nome * que a extensão dele
    vai ser .spec.js 
    spec - significa teste 
    Como nao queremos realizar testes na pasta node_modules temos que colocar <rootDir> a partir da raiz 
    do nosso projeto olhar para a pasta /src/
    */
  ]
}
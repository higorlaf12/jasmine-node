describe("Suite de teste de exemplo com NodeJs",function () {

    it("Deve demonstrar uso do Jasmine com o NodeJS",function () {
        expect(true).toEqual(true);
    });
    it("Deve escutar a entrada ",function () {
        expect(1).toEqual(1);
    });
    it("Vai dar erro ",function () {
       expect(2+2).toEqual(3);
    });


});
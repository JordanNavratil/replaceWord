describe('findAndReplace', function(){
  it("replaces 'life' with 'dog' in the string input 'life'", function(){
      expect(findAndReplace('life','life', 'dog')).to.equal('dog');
  });

  it("replaces 'life' with 'dog' in the string input 'a life'", function(){
    expect(findAndReplace('a life','life', 'dog')).to.equal('a dog');
  });

  it("replaces 'life' with 'dog' in the string input 'get a life'", function(){
    expect(findAndReplace('get a life','life', 'dog')).to.equal('get a dog');
  });
});

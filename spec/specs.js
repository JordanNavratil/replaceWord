describe('replaceWord', function(){
  it("replaces 'life' with 'dog' in the string input 'life'", function(){
      expect(replaceWord('life','life', 'dog')).to.equal('dog');
  });

  it("replaces 'life' with 'dog' in the string input 'a life'", function(){
    expect(replaceWord('a life','life', 'dog')).to.equal('a dog');
  });

  it("replaces 'life' with 'dog' in the string input 'get a life'", function(){
    expect(replaceWord('get a life','life', 'dog')).to.equal('get a dog');
  });
});

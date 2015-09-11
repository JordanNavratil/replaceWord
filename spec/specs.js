describe('replaceWord', function(){
  it("replaces 'life' with 'dog' in the string input 'life'", function(){
      expect(replaceWord('life','life', 'dog')).to.eql('dog');
  });

  it("replaces 'life' with 'dog' in the string input 'a life'", function(){
    expect(replaceWord('a life','life', 'dog')).to.eql('a dog');
  });

  it("replaces 'life' with 'dog' in the string input 'get a life'", function(){
    expect(replaceWord('get a life','life', 'dog')).to.eql('get a dog');
  });
});

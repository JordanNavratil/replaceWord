describe('findAndReplace', function(){
  it("replaces 'life' with 'dog' in the string input 'get a life'", function(){
    expect(findAndReplace('get a life','life', 'dog')).to.equal('get a dog');
  });
  // 
  // it("replaces 'life' with 'dog' in the string input 'a life'", function(){
  //   expect(findAndReplace('cat tiger','cat', 'dog')).to.equal('dog tiger');
  // });
  //
  // it("replaces 'cat' with 'dog' in the string input 'cat'", function(){
  //   expect(findAndReplace('cat','cat', 'dog')).to.equal('dog');
  // });
});

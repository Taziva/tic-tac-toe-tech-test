describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("instantiate a new game", function() {
    expect(game instanceof Game).toBeTruthy();
  });

  it("Should have 2 players", function(){
    expect(game.players.length).toEqual(2)
  })

  it("Should have 1 player using X", function(){
    expect(game.players[0]).toEqual('X')
  })

  it("Should have 1 player using O", function(){
    expect(game.players[1]).toEqual('O')
  })
});

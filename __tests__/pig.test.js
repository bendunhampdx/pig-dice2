import { Player } from './../src/pig.js';

describe('Player', () => {

  test('should correctly create a player object', () => {
    const player = new Player("variable2", "variable");
    expect(player.name).toEqual("variable2");
    expect(player.totalPoints).toEqual("variable")
  });

  test('should produce a number less than or equal to 6', () => {
    const player = new Player("name", 0);
    expect(player.dice()).toBeLessThanOrEqual(6);
  });
})
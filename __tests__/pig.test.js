import { Player } from './../src/pig.js';

describe('Player', () => {
  let player;

  beforeEach(()=> {
    player = new Player("name", 0)
  })
  test('should correctly create a player object', () => {
    expect(player.name).toEqual("name");
    expect(player.totalPoints).toEqual(0)
  });

  test('should produce a number less than or equal to 6', () => {
    expect(player.dice()).toBeLessThanOrEqual(6);
  });
  
  test('it should recognize when a number === 1', () => {
    expect(player.roll(1)).toEqual(true);
  });
  test('it should recognize when a number !== 1', () => {
    expect(player.roll(2)).toEqual(false);
  });
})

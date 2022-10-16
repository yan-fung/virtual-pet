const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});

describe('constructor', () => {
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
  });

  describe('constructor', () => {
    it('has a inital age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
  });

  describe('constructor', () => {
    it('has a inital hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('constructor', () => {
    it('has a inital fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });

  describe('growUp', () => {
    it('increments the hunger by 5', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.hunger).toEqual(5);
    });
  });

  describe('growUp', () => {
    it('decrease the fitness by 3', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.fitness).toEqual(7);
    });
  });

  describe('growUp', () => {
  
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
      });
    });

  describe('walk', () => {
    it('increases fitness by 4', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 4;
      pet.walk();
  
      expect(pet.fitness).toEqual(8);
    });
  });

  describe('walk', () => {
    it('increases fitness by to a maximum of 10', () => {
      const pet = new Pet('fido');
  
      pet.fitness = 8;
      pet.walk();
  
      expect(pet.fitness).toEqual(10);
    });
  });

  describe('walk', () => {
  
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.fitness = 0;
  
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      });
    });

  describe('feed', () => {
    it('decrease the hunger by 3', () => {
        const pet = new Pet('fido');

        pet.hunger = 4;
        pet.feed()
        
        expect(pet.hunger).toEqual(1);
    });
  });

  describe('feed', () => {
  
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });
    });


  describe('checkUp', () => {
    it('return "I need a walk" if the fitness is 3 or less ', () => {
        const pet = new Pet('fido');

        pet.fitness = 3;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I need a walk');
    });
  });

  describe('checkUp', () => {
    it('return "I am hungry" if the hunger is 5 or more ', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I am hungry');
    });
  });

  describe('checkUp', () => {
    it('return "I am hungry AND I need a walk" if the hunger is 5 or more and the fitness is 3 or less', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
  });

  describe('checkUp', () => {
    it('return "I feel great" if I am not hungry and I am fit ', () => {
        const pet = new Pet('fido');

        pet.hunger = 2;
        pet.fitness = 5;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I feel great!');
    });
  });

  describe('checkUp', () => {
  
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
        
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
      });
    });


  describe('isAlive', () => {
    it('return false if the hunger is 10 or more, the fitness is 0 and the age is 30 or more', () => {
        const pet = new Pet('fido');

        pet.hunger = 10;
        pet.fitness = 0;
        pet.age = 30;
        pet.isAlive;
        
        expect(pet.isAlive).toBe(false);
    });
  });

  describe('isAlive', () => {
    it('return true if the hunger is 9 or less, the fitness is 1 or more and the age is 29 or less', () => {
        const pet = new Pet('fido');

        pet.hunger = 8;
        pet.fitness = 2;
        pet.age = 28;
        pet.isAlive;
        
        expect(pet.isAlive).toBe(true);
    });
  });


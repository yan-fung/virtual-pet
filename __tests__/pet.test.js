const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  it('has a inital age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });

  it('has a inital hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  });

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

    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.hunger).toEqual(5);
    });

    it('decrease the fitness by 3', () => {
        const pet = new Pet('Fido');
    
        pet.growUp();
    
        expect(pet.fitness).toEqual(7);
      });
    
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

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
    
        pet.fitness = 8;
        pet.walk();
    
        expect(pet.fitness).toEqual(10);
      });
    
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

    it('return "I am hungry" if the hunger is 5 or more ', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('return "I am hungry AND I need a walk" if the hunger is 5 or more and the fitness is 3 or less', () => {
        const pet = new Pet('fido');

        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    it('return "I feel great" if I am not hungry and I am fit ', () => {
        const pet = new Pet('fido');

        pet.hunger = 2;
        pet.fitness = 5;
        pet.checkUp()
        
        expect(pet.checkUp()).toEqual('I feel great!');
    });

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

    it('return true if the hunger is 9 or less, the fitness is 1 or more and the age is 29 or less', () => {
        const pet = new Pet('fido');

        pet.hunger = 8;
        pet.fitness = 2;
        pet.age = 28;
        pet.isAlive;
        
        expect(pet.isAlive).toBe(true);
    });
  });

  describe('adoptChild', () => {
    it('add a child to the array of children property that the first element is the child instance you passed as a parameter', () => {
        const parent = new Pet('Skippy');
        const child_one = new Pet('Kitty');

        parent.adoptChild(child_one);

        expect(parent.childred).toEqual([ { name: 'Kitty', age: 0, hunger: 0, fitness: 10, childred: [] } ]);
    });
    
    it('Added two more childred for parent', () => {
        const parent = new Pet('Skippy');
        const child_one = new Pet('Kitty');
        const child_two = new Pet('Nana');
        const child_three = new Pet('Siumai');

        parent.adoptChild(child_one);
        parent.adoptChild(child_two);
        parent.adoptChild(child_three);

        expect(parent.childred).toEqual(
            [ 
                { name: 'Kitty', age: 0, hunger: 0, fitness: 10, childred: [] },
                { name: 'Nana', age: 0, hunger: 0, fitness: 10, childred: [] },
                { name: 'Siumai', age: 0, hunger: 0, fitness: 10, childred: [] }   
            ]);
    });

    it('the age of child "Nana" is one after calling the growUp method', () => {
        const parent = new Pet('Skippy');
        const child_one = new Pet('Kitty');
        const child_two = new Pet('Nana');
        const child_three = new Pet('Siumai');

        parent.adoptChild(child_one);
        parent.adoptChild(child_two);
        parent.adoptChild(child_three);

        parent.childred[1].growUp();


        expect(parent.childred[1].age).toEqual(1);
    });

  });

  describe('haveBaby', () => {
    it('create a child object to the Pet instance', () => {
        const parent = new Pet('Xiaoxiao');

        parent.haveBaby('Xuexue');

        expect(parent.childred).toEqual([ { name: 'Xuexue', age: 0, hunger: 0, fitness: 10, childred: [] } ]);
    });
  });

const MenuController = require("../controllers/MenuController");

// #1
describe("MenuController", () => {

    beforeEach(() =>{
        this.menu = new MenuController;
    });

    
    describe("#getReminder()", () => {
        it("Should return the reminder for the Bloc Address Assignment (Learning is a life-long pursuit)", () => {
            expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
        });
    });
  });
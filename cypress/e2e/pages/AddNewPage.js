class HomePage {
    //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    enterURL() {
        cy.visit("https://qaautomationlabs.com/");
    }
    validateMenus(menus) {
        cy.contains(menus111111);
        return this;
    }
    verifyPageTitle() {
        return cy.title().should("eq", "About Us — QAAutomationLabs");
    }
}
const homepage = new HomePage();
export default homepage;
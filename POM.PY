//CREATE PAGE OBJECT FOR ALL PAGES

//LOGIN PAGE
exports.loginPage=
class LoginPage{
//CREATE CONSTRUCTOR FOR ALL ATTRIBUTES
constructor (page){
this.page=page
this.loginLink="xpath"
this.usernameInput="xpath"
this.passwordInput="xpath"
this.loginButton="xpath"}
//CREATE METHOD
async.gotoLoginPage(){
  await this.page.goto('url')}
async login(username,password){
  await this.page.locator(this.loginLink).click()
  await this.page.locator(this.usernameInput).fill(username)
  await this.page.locator(this.passwordInput).fill(pswd)
  await this.page.locator(this.loginButton).click()}}

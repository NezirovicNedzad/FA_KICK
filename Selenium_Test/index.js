const {Builder,By,Key,util}=require("selenium-webdriver");
const assert = require("assert");

async function testPrijave(){

  let driver=await new Builder().forBrowser("firefox").build();


  let starePrijave = 0;
  let novePrijave = 0;
  await driver.get("https://fa-kickapp.herokuapp.com/");
 
  await driver.findElement(By.name("prijavi")).click();
  await driver.sleep(2000);
   // Enter login data
   await driver
   .findElement(By.name("email"))
   .sendKeys("nedzad@example.com");
 await driver
   .findElement(By.name("password"))
   .sendKeys("123456");
 await driver.sleep(2000);
 // Login
 await driver.findElement(By.name("log")).click();
 await driver.sleep(2000);

 //Pronalazi se broj  kampova na kojima je kor prijavljen
 await driver
    .findElements(By.className("prijava"))
    .then((elements) => (starePrijave = elements.length));
  await driver.sleep(1000);


//dolazi se stranice sa svim dostupnim kampovima
  await driver.findElement(By.name("kamp")).click();
  await driver.sleep(2000);
  await driver.findElement(By.className("carousel-control-next")).click();
  await driver.sleep(1200);
  await driver.findElement(By.className("carousel-control-next")).click();
  await driver.sleep(1200);

//ulazimo u stranicu kampa koji hocemo da dodamo
  await driver.findElement(By.name("Dvonedeljni Kamp")).click();
  await driver.sleep(2000);

//prijavljivanje na kamp

await driver.findElement(By.id("btn1")).click();
await driver.sleep(2000);

await driver.switchTo().alert().accept(); 
await driver.sleep(2000);
await driver
    .findElements(By.className("prijava"))
    .then((elements) => (novePrijave = elements.length));
  await driver.sleep(1000);


  console.log("Prvobitne prijava  na kampova ima: ", starePrijave,"a nakon dodavanja nove prijave broj prijava sada iznosi",novePrijave);


  //ako je broj starih prijava jednak broju novih prijava -1 test je uspesan
  assert.equal(starePrijave, novePrijave - 1);


}

testPrijave();
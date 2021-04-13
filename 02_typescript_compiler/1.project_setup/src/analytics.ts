let logged;
let beanBag = "pot";
function sendAnalytics(data: string) {
  // let red = 9;
  console.log(data);
  logged = true;
}
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}
sendAnalytics("Data analutics HERE!");

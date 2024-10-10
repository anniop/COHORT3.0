const jwt = require("jsonwebtoken");
const jwtpassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwrodSchema = zod.string().min(6)

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwrodSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign({
    username
  }, jwtpassword);

  return signature;
}
function verifyJwt(token) {
  try {
    const verify = jwt.verify(token, "secret");
    if (verify) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("Invalid Token or Invalid secret Key");
  }
}


function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }

}

let ans = signJwt("jayganesh@gmail.com", "harharmahadev");
console.log(ans);

let ans1 = decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpheWdhbmVzaEBnbWFpbC5jb20iLCJpYXQiOjE3Mjg1Mzc3NTh9.3VHKFjjXqToVErfTcPtAv_K34RKy0D1yd3Z2T3hGKUE");
console.log(ans1);

let ans2 = verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpheWdhbmVzaEBnbWFpbC5jb20iLCJpYXQiOjE3Mjg1Mzc3NTh9.3VHKFjjXqToVErfTcPtAv_K34RKy0D1yd3Z2T3hGKUE");
console.log(ans2);
